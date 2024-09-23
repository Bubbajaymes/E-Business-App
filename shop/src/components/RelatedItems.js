import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import ProductItem from './ProductItem';

const RelatedItems = ({category, brand}) => {

    const {items} = useContext(ShopContext);  
    const [related, setRelated] = useState([]); 

    useEffect(()=>{

        if (items.length > 0) {
            let itemsCopy = items.slice();
            itemsCopy = itemsCopy.filter((item) => category === item.category);
            itemsCopy = itemsCopy.filter((item) => brand === item.brand);

            setRelated(itemsCopy.slice(0,5));
            
        }
    },[items, brand, category]);

  return (


    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title text1={'RELATED'} text2={'PRODUCTS'} />
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                related.map((item,index)=>(
                    <ProductItem key={index} id={item.id} name={item.name} price={item.price} image={item.image} />
                ))
            }
        </div>
    </div>
  )
}

export default RelatedItems
