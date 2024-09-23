import React from 'react'
import Title from '../components/Title'

import contact from "../assets/images/contact.jpg";
import NewsletterBox from '../components/NewsletterBox';

export default function Contact() {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-20'>
        <img className='w-full md:max-w-[450px]' src={contact} alt=''/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Barshosho <br /> Eastleigh, Nairobi</p>
          <p className='font-semibold text-xl text-gray-600'>Socials</p>
          <p className='text-gray-500'>Tel: +254-716-641-112 <br /> Email: jaymesbubba14@gmail.com <br />Socials:</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Serene Traders</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}
