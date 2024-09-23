import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import {  ArrowLeftOutlined, MenuFoldOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import Logo from "../assets/images/Serene Blue.png";
import Profile from './headerExtras/Profile';
import { Badge } from 'antd';
import { ShopContext } from '../context/ShopContext';

export default function Navbar() {

    const [visible, setVisible] = useState(false);
    const {setShowSearch, getCartCount} = useContext(ShopContext);


  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <Link to='/'>
            <img src={Logo} alt='logo' className='w-28' />    
        </Link>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' hidden />
            </NavLink>
            <NavLink to='/products' className='flex flex-col items-center gap-1'>
                <p>PRODUCTS</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' hidden />
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' hidden />
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' hidden />
            </NavLink>
        </ul>
        <div className='flex items-center gap-6'>
           <SearchOutlined onClick={()=>setShowSearch(true)} style={{fontSize: '19px'}} className='cursor-pointer ' />
           <Profile />
            <Link to='/cart'>
                <Badge count= {getCartCount()}>
                <ShoppingCartOutlined className='relative' style={{fontSize: '19px'}}  />
                </Badge>
            </Link>    
            <MenuFoldOutlined onClick={()=>setVisible(true)} className='cursor-pointer sm:hidden w-5'/>  
        </div>

        {/* Sidebar Menu for smaller screens */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-grey-600'>
                <div onClick={()=>setVisible(false)}  className='flex items-center gap-4 p-3 cursor-pointer'>
                    <ArrowLeftOutlined />
                    <p>Back</p>
                </div>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/products'>PRODUCTS</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
            </div>
        </div>
    </div>
  )
}
