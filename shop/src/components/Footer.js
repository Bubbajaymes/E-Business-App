import React from 'react'

import Logo from "../assets/images/Serene Blue.png";

export default function Footer() {
  return (
    <div>
        <div className='flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm bg-white'>
            <div>
               <img src={Logo} alt='logo' className='w-28 mb-5' /> 
                <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum nec massa vel egestas.
                 Nam scelerisque velit sit amet mi ultricies, eget tempor lectus convallis.
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+254-716-641-112</li>
                    <li>jaymesbubba14@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>
            Serene Traders ©{new Date().getFullYear()} Created by Bubba Jaymes.
            </p>
        </div>
    </div>
  )
}
