import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import {  Rate } from 'antd';
import RelatedItems from '../components/RelatedItems';

export default function Item() {
  const {itemId} = useParams();
  const {items, currency, addToCart} = useContext(ShopContext);
  const [itemData, setItemData] = useState(false);
  const [image, setImage] = useState('');
  const [itemType, setItemType] = useState('');


  const fetchItemsData = async () => {
    items.map((item)=>{
      if (item._id === itemId) {
        setItemData(item)
        setImage(item.image[0])
        
        return null;
      }
    })
  }

  useEffect(()=>{

    fetchItemsData();
  }, [itemId, items])

  return itemData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 bg-opacity-100'>
      {/* Items Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Item Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              itemData.image.map((item, index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt=''/>
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full object-cover h-[100%]' src={image} alt='' />
          </div>
        </div>
        {/* Item Iformation */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{itemData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <Rate defaultValue={4} />
            <p className='pl-2'>(209)</p>
            {/* <img src='' alt='' /> */}
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency} {itemData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{itemData.description}</p>
          <div className='flex flex-col gap-4 my-8'>

            {/* I will wor on this section in future */}
            <p>Select Type</p>
            <div className='flex gap-2'>
              {
                itemData.types.map((item,index)=>(
                  
                  <button onClick={()=>setItemType(item)} className={`border py-2 px-4 bg-gray-200 ${item === itemType ? 'border-blue-500 bg-blue-500 text-black' : ''}`} key={index}>{item}</button>
                ))
              } 
            </div>
          </div>
          <button onClick={()=>addToCart(itemData._id,itemType)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-500'>ADD TO CART</button>
          <hr className='mt-8 w-4/5' />
          <div className='text-sm text-gray-500  mt-5 flex-col gap-1'>
            <p>100% Original Product.</p>
            <p> Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 2 days.</p>
          </div>
        </div>
      </div>
      {/* Description & Review Section */}
      <div className='mt-20'>
        <div className='flex '>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (209)</p>
        </div>
          <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
            <p>Vestibulum ullamcorper efficitur dignissim. Sed nec leo velit. 
              Nam eu purus sit amet mauris efficitur vestibulum eu non magna. Suspendisse potenti. Integer in maximus massa. 
              Ut sed feugiat quam. Suspendisse venenatis justo quis arcu rutrum, in aliquet tortor interdum.
              Cras et pellentesque nisi. Nullam at facilisis dui. 
            </p>
            <p>Vestibulum ullamcorper efficitur dignissim. Sed nec leo velit. 
              Nam eu purus sit amet mauris efficitur vestibulum eu non magna. Suspendisse potenti. Integer in maximus massa. 
              Ut sed feugiat quam. Suspendisse venenatis justo quis arcu rutrum, in aliquet tortor interdum.
              Cras et pellentesque nisi. Nullam at facilisis dui. 
            </p>
          </div>
        </div>
        {/* Display Related Items */}
        <RelatedItems category={itemData.category} brand={itemData.brand}  />
      </div>

  ) : <div className='opacity-0'></div>
}
