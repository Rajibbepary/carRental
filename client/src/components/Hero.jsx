import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Hero = () => {

    const [pickupLacation, setPickupLocation] = useState('')
    const {pickupDate, setPickupDate, returnDate, setReturnDate, navigate} = useAppContext()
const handleSearch = (e)=>{
  e.preventDefault()
  navigate('/cars?pickupLocation' + pickupLacation + '&pickupDate=' + pickupDate + '&returnDate=' + returnDate)
}


  return (
    <div className='h-screen flex flex-col items-center justify-center lg:pt-16 bg-light text-center'>
      <h1 className='text-4xl md:text-5xl font-semibold lg:mt-20'>Luxury cars on Rent</h1>
    <form onSubmit={handleSearch} className='flex flex-col md:flex-row items-center md:items-center justify-between p-6 mt-10 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]'>
    <div className='flex flex-col md:flex-row items-center md:items-center gap-10 min-md:ml-8'>
<div className='flex flex-col items-start gap-2'>
    <select required value={pickupLacation} onChange={(e)=>setPickupLocation(e.target.value)}>
        <option value=''>Pickup Location</option>
        {cityList.map((city)=> <option key={city} value={city}>{city}</option>)}
    </select>
    <p className='px-1 text-sm text-gray-500'> {pickupLacation ? pickupLacation : 'Please select location'}</p>
</div>

<div className='flex flex-col items-start gap-2'>
<label htmlFor='pickup-date'>Pick-up Date</label>
<input value={pickupDate} onChange={e=>setPickupDate(e.target.value)} type='date' id='pickup-date' min={new Date().toISOString().split('T')[0]} className='text-gray-500 text-sm' required/>
</div>
<div className='flex flex-col items-start gap-2'>
<label htmlFor='return-date'>Return Date</label>
<input value={returnDate} onChange={e=>setReturnDate(e.target.value)} type='date' id='return-date' className='text-gray-500 text-sm' required/>
</div>
    </div>
    <button className='flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer'>Search
    <img src={assets.search_icon} alt="search" className='brightness-300' />
</button>
    </form>
      <img src={assets.main_car} alt='car'/>
    </div>
  )
}

export default Hero
