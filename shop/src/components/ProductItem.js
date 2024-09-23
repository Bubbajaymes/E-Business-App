import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id, image, name, price}) => {

    const {currency} = useContext(ShopContext);
  return (
<Link className='text-gray-700 cursor-pointer' to={`/item/${id}`}>
  {/* image Container */}
  <div className='overflow-hidden h-48'>
    
    <img
      className='w-full h-full object-cover hover:scale-110 transition ease-in-out duration-300'
      src={image[0]}
      alt={name}
    />
  </div>
  {/* Product name */}
  <p className='pt-3 pb-1 text-sm'>{name}</p>
  {/* Product price */}
  <p className='text-sm font-medium'>{currency} {price}</p>
</Link>
  )
}

export default ProductItem