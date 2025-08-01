import { assets } from "../assets/assets";
import Title from "./Title";
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';


const Testimonial = () => {
  const testimonials = [
        {  name: "Emma Rodriguez",
             address: "Barcelona, Spain", image: assets.testimonial_image_1,
             review: "I've rented cars from cars from variour companies, but the experience with CarRental was sxceptional" },
      
          {  name: "Jonh Smite",
             address: "New Your, USA", image: assets.testimonial_image_2,
             review: "I've rented cars from various companies, but the experience with CarRental was exceptional" },
               {  name: "Ava Johnson",
             address: "Sydney, Australia", image: assets.testimonial_image_1,
             review: "I highly recommend the deal with excellent service." },
    ];


    return (
          <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
            
            <Title title={'What Our Customers Say'} subTitle={'Discover why discerning travelers choose StayVenture for their luxury accommodations aroud the world.'}/>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                    initial={{ opacity: 0, y: 40}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut'}}
                    key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="font-playfair text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.address}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <img key={index}
                                src={assets.star_icon}
                                />
                               
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.review}"</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;