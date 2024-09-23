import React from 'react'
import Title from '../components/Title';

import Cart from "../assets/images/ecommerce-cart.jpg";
import NewsletterBox from '../components/NewsletterBox';

export default function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t '>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-8 '>
        <img className='w-full md:max-w-[450px] ' src={Cart} alt=''/>
        <div className='flex flex-col justify-center gap-5  md:w-2/3 text-gray-600'>
          <p>Morbi odio urna, pulvinar vel sem nec, ullamcorper convallis leo. Curabitur at libero a mauris lobortis suscipit. Fusce quam quam, pretium a elementum quis, laoreet in mi. Nullam euismod quam ut lorem iaculis efficitur. Maecenas neque nisl, dignissim sit amet tellus ut, convallis consequat turpis. Donec vel lectus dictum, feugiat nisl a, pellentesque ipsum. Cras maximus venenatis magna vitae imperdiet.</p>
          <p>Nullam blandit ultrices ante, vitae viverra lorem eleifend vel. Morbi odio urna, pulvinar vel sem nec, ullamcorper convallis leo. Nulla aliquet scelerisque dolor, sit amet pretium a elementum quis, laoreet in mi. Nullam euismod quam ut lorem iaculis efficitur. Donec vitae magna non est consequat hendrerit. Phasellus a finibus lectus. Donec vel lectus dictum, feugiat nisl a, pellentesque ipsum. Cras maximus venenatis magna vitae imperdiet.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Duis quis rhoncus urna, ac porttitor diam. Integer nec euismod felis, at tempor urna. Pellentesque faucibus, lacus ut pharetra facilisis, ex mauris iaculis ex, eu aliquet risus elit vitae leo. Donec eu ullamcorper sapien, eget bibendum ipsum. Vivamus placerat eu erat nec vulputate.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance: </b>
          <p className='text-gray-600 '>Donec eu ullamcorper sapien, eget bibendum ipsum. Aliquam eu justo quis erat viverra consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus placerat eu erat nec vulputate.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience: </b>
          <p className='text-gray-600 '>Donec eu ullamcorper sapien, eget bibendum ipsum. Aliquam eu justo quis erat viverra consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus placerat eu erat nec vulputate.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Services: </b>
          <p className='text-gray-600 '>Donec eu ullamcorper sapien, eget bibendum ipsum. Aliquam eu justo quis erat viverra consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus placerat eu erat nec vulputate.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}
