import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faHeadphones, faTruck } from "@fortawesome/free-solid-svg-icons";

export default function OurPolicy() {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 bg-white'>
        <div>
            <FontAwesomeIcon className=' m-auto mb-2'  icon={faArrowsRotate} size='3x' />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>
        <div>
            <FontAwesomeIcon className=' m-auto mb-2'  icon={faTruck} size='3x' />
            <p className='font-semibold'>2 Days Return Policy</p>
            <p className='text-gray-400'>We provide 2 days return policy</p>
        </div>
        <div>
            <FontAwesomeIcon className=' m-auto mb-2'  icon={faHeadphones} size='3x' />
            <p className='font-semibold'>Best Customer Support </p>
            <p className='text-gray-400'>We provide 24/7 customer support</p>
        </div>
    </div>
  )
}
