import { create } from "domain";
import imagekit from "../configs/imagekit.js";
import Booking from "../models/Bookings.js";
import Car from "../models/Car.js";
import User from "../models/User.js";
import fs from "fs";


//API to Change Role of Usser
export const changeRoleToOwner = async (req, res)=>{
    try {
        const {_id} = req.user;
        await User.findByIdAndUpdate(_id, {role: "owner"})
        res.json({success: true, message: "New you can list cars"})
    } catch (error) {
        console.log(error.message);
          res.json({success: false, message: error.message})
    }
}

//API TO LIST CAR

export const addCar = async (req, res)=>{
    try{
        const {_id} = req.user;
        let car = JSON.parse(req.body.carData);
        const imageFile = req.file;
        //upload Image to Imagekit
        const fileBuffer = fs.readFileSync(imageFile.path)
      const response = await imagekit.upload({
            file:fileBuffer,
            fileName: imageFile.originalname,
            folder: '/cars'
        })

        // optimization through imagekit URL transformation
var optimizedImageUrl = imagekit.url({
    path : response.filePath,
    transformation : [
        {width: '1280'},
        {quality:'auto'},
        {format: 'webp'}
    ]
});

const image = optimizedImageUrl;
await Car.create({...car, owner:_id, image})

res.json({success:true, message: "Car Added"})

    } catch(error){
        console.log(error.message);
          res.json({success: false, message: error.message})
    }
}


//API TO LIST OWNER CARS 

export const getOwnerCars = async (req, res) =>{
    try{
        const {_id} = req.user;
        const cars = await Car.find({owner: _id})
        res.json({success: true, cars})
    }catch (error){
        console.log(error.message)
        res.json({success: false, message:error.message})
    }
}


//API to Toggle Car Availability

export const toggleCarAvailability = async (req, res) =>{
     try{
        const {_id} = req.user;
        const {carId} = req.body
        const car = await Car.findById(carId)

        //checking is car belongs to the user
        if(car.owner.toString() !== _id.toString()){
            return res.json({success: false, message: "Unauthorized"});
        }
        car.isAvailable = !car.isAvailable;
        await car.save()

        res.json({success: true, message:"Availability Toggled"})
    }catch (error){
        console.log(error.message)
        res.json({success: false, message:error.message})
    }
}

//API to Delete Car

export const deleteCar = async (req, res) =>{
     try{
        const {_id} = req.user;
        const {carId} = req.body
        const car = await Car.findById(carId)

        //checking is car belongs to the user
        if(car.owner.toString() !== _id.toString()){
            return res.json({success: false, message: "Unauthorized"});
        }
        car.owner = null;
        car.isAvailable = false;
        await car.save()

        res.json({success: true, message:"Car Removed"})
    }catch (error){
        console.log(error.message)
        res.json({success: false, message:error.message})
    }
}


//API to get Dashoard Data

export const getDashboardData = async (req, res) =>{
    try{
        const { _id, role} = req.user;
        if(role !== 'owner'){
            return res.json({ success: false, message: "Unauthorized"});
        }
        const cars = await Car.find({owner: _id})
        const bookings = await Booking.find({owner: _id}).populate('car').sort({ createdAt: -1});

        const pendingBookings = await Booking.find({owner: _id, status:"pending"})
         const completedBookings = await Booking.find({owner: _id, status:"confirmed"})
//Calculate monthlyRevenue from booking where status is confirmed
        const monthlyRevenue = bookings.slice().filter(booking => booking.status === 'confirmed').reduce((acc, booking)=> acc + booking.price, 0)

      const dashboardData = {
        totalCars: cars.length,
        totalBookings: bookings.length,
        pendingBookings: pendingBookings.length,
        completedBookings: completedBookings.length,
        recentBookings: bookings.slice(0, 3),
        monthlyRevenue
      }  
      res.json({ success: true, dashboardData})
    } catch (error){
        console.log(error.message)
        res.json({success: false, message: error.message})
    }
}


// API to  update user image

export const updateUserImage = async (req, res) => {
    try {
        const userId = req.user._id; //  Always use from req.user
        const imageFile = req.file;

        if (!imageFile) {
            return res.json({ success: false, message: "No image file received" });
        }

        // Read the file buffer
        const fileBuffer = fs.readFileSync(imageFile.path);

        // Upload to ImageKit
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/users",
        });

        // Optional: generate optimized URL (you can skip this and use response.url)
        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                { width: "400" },
                { quality: "auto" },
                { format: "webp" },
            ],
        });

        // Save to DB
        await User.findByIdAndUpdate(userId, { image: optimizedImageUrl });

        res.json({ success: true, message: "Image Updated", image: optimizedImageUrl });

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
};