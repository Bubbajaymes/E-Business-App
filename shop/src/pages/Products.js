import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import {  RightOutlined } from '@ant-design/icons';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

export default function Products() {
  const {items, search, showSearch} = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterItems, setFilterItems] = useState([]);
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev=>prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleBrand = (e) => {
    if (brand.includes(e.target.value)) {
      setBrand(prev=>prev.filter(item => item !== e.target.value))
    } else {
      setBrand(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = items.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    if (brand.length > 0) {
      productsCopy = productsCopy.filter(item => brand.includes(item.brand));
    }
    setFilterItems(productsCopy)
  }

  const sortProduct = () => {
    let filterItemsSort = filterItems.slice();
    switch (sortType) {
      case 'low-high':
        setFilterItems(filterItemsSort.sort((a,b) =>(a.price - b.price)))
        break;
      case 'high-low':
          setFilterItems(filterItemsSort.sort((a,b) =>(b.price - a.price)))
        break;    
      default:
        applyFilter();
        break;
    }
  }

  // useEffect(()=>{
  //   setFilterItems(items);
  // }, [])

  useEffect(()=>{
    applyFilter();
  }, [category, brand, search, showSearch])


  useEffect(()=>{
    sortProduct();
  }, [sortType])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Left Side - Filter Options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTER
         <RightOutlined className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}  />
          
        </p>
        {/* Filter by Category */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
              
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Sugar' onChange={toggleCategory} />Sugar
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Milk' onChange={toggleCategory} />Milk
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Rice' onChange={toggleCategory} />Rice
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Bakery' onChange={toggleCategory} />Bakery
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Candy' onChange={toggleCategory} />Candy
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Oil-Fat' onChange={toggleCategory} />Cooking Fat & Oil
            </p>
          </div>
        </div>

        {/* Filter by Sub-Category */}
        <div className={`border border-gray-300 my-5 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>BRANDS</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='West Kenya Sugar' onChange={toggleBrand} />West Kenya Sugar
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='MMM' onChange={toggleBrand} />Mombasa Maize Millers
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='KOR' onChange={toggleBrand} />Kapa Oil Refineries
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Softcare' onChange={toggleBrand} />Softcare
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='MrBerry' onChange={toggleBrand} />Mr Berry
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'PRODUCTS'} />
          {/* Sort Products */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2 mb-4'>
            <option value='relevant'>Sort By: Relevant</option>
            <option value='low-high'>Sort By: Low To High</option>
            <option value='high-low'>Sort By: High To Low</option>
          </select>
        </div>
        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
                filterItems.map((item, index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
        </div>
      </div>
    </div>
  )
}
