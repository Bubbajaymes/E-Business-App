import React from 'react'
import Hero from '../components/Hero'
import LatestProducts from '../components/LatestProducts'
import BestSales from '../components/BestSales'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

export default function Home() {
  return (
    <div>
        <Hero />
        <LatestProducts />
        <BestSales />
        <OurPolicy />
        <NewsletterBox />
    </div>
  )
}
