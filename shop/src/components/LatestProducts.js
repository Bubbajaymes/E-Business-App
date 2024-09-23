import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

export default function LatestProducts() {
    const { items } = useContext(ShopContext);
    const [latestItems, setLatestItems] = useState([]);

    useEffect(()=>{
        setLatestItems(items.slice(0,10));
    },[])

  return (
    <div className='my-10 bg-white'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'PRODUCTS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
           ffhfj fjuj  fowijfn  p lfdj mv ok f jom lkv nxj shsddjd ds dkjd l k k kl h ji fy g kl uf ftd
        </p>
      </div> 
              {/* Redering Items */}
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestItems.map((item, index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
          </div>
    </div>



  )
}
