import React from 'react'

import kabras2Kg from '../assets/images/kabras 2kg.jpg';

export default function Hero() {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 bg-white'>
        {/* Hero Left Side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#755f5f]'>
                <div className='flex items-center gap-2'>
                  <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                  <p className='font-medium text-sm md:text-base'> 
                    OUR BEST SALES
                  </p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>
                  New Arrivals
                </h1>
                <div className='flex items-center gap-2'>
                  <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                  <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                </div>
            </div>
        </div>
  
        {/* Hero Right Side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center'>
          <img className='w-full sm:w-1/2' src={kabras2Kg} alt='New Product' />
        </div>
    </div>

  )
}
