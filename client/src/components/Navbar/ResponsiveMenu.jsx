import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const ResponsiveMenu = ({open}) => {
  return (
   <AnimatePresence mode='wait'>
    {
        open && (
            <div
            
            className='absolute top-20 left-0 w-full h-screen z-20'>
                <div className='text-xl font-semibold uppercase bg-cyan-500 text-white py-10 m-6 rounded-3xl'>
                    <ul className='flex flex-col items-center gap-10'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contsct</li>
                    </ul>
                </div>
            </div>
        )
    }
   </AnimatePresence>
  )
}

export default ResponsiveMenu