import React from 'react';
import { assets } from '../assets/assets';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
const Footer = () => {
    return (
        <motion.div
        initial={{ opacity:0, y: 30}}
        whileInView={{ opacity: 1, y: 0}}
        transition={{ duration: 0.6}}
        className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500'>
            <motion.div
            initial={{ opacity:0, y: 20}}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.6, delay: 0.2}}className='flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor border-b'>
                <div >
                    <motion.img 
                    initial={{ opacity:0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 0.5, delay: 0.3}}
                    src={assets.logo} alt="logo" className=' h-8 md:h-9' />
                    <motion.p
                    initial={{ opacity:0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 0.5, delay:0.4}}
                    className='max-w-80 mt-3'>
                        Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.
                    </motion.p>
                    <motion.div 
                    initial={{ opacity:0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 0.5, delay: 0.5}}
                    className='flex items-center gap-3 mt-6'>
                      <a href='#'> <img src={assets.facebook_logo} className='w-5 h-5'/></a>
                       <a href='#'> <img src={assets.instagram_logo} className='w-5 h-5'/></a>
                       <a href='#'> <img src={assets.twitter_logo} className='w-5 h-5'/></a>
                       <a href='#'> <img src={assets.gmail_logo} className='w-5 h-5'/></a>
                    </motion.div>
                </div>
                <motion.div
                     initial={{ opacity:0, y:20}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.6, delay: 0.4}}
                className='flex flex-wrap justify-between w-1/2 gap-8'>
                
                <div>
                    <h2 className='text-base font-medium uppercase text-gray-800'>Quick Links</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Browse Cars</a></li>
                        <li><a href="#">List Your Car</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>
 <div>
                   <div>
                     <h2 className='text-base font-medium uppercase text-gray-800'>Resources</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Insurange</a></li>
                    </ul>
                   </div>
                  
                </div>
                  <div>
                         <h2 className='text-base font-medium uppercase text-gray-800'>Contact</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li><a href="#">1234 Luxury Driver</a></li>
                        <li><a href="#">Dhaka, Bangladesh</a></li>
                        <li><a href="#">+880 90328928</a></li>
                        <li><a href="#">info@example.com</a></li>
                    </ul>
                    </div>
                </motion.div>
                
               
            </motion.div>

            <motion.div
                    initial={{ opacity:0, y:10}}
                    whileInView={{ opacity: 1, y:0}}
                    transition={{ duration: 0.6, delay: 0.6}}
            className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a> </li>
                    <li>|</li>
                    <li><a href="#">Terms</a></li>
                    <li>|</li>
                    <li><a href="#">Cookies</a></li>
                </ul>
            </motion.div>
        </motion.div>
    );
};

export default Footer;