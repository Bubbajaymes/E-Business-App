import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { SearchOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from 'react-router-dom';

export default function SearchBar() {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false);

    const location = useLocation();

    useEffect(()=>{
        if (location.pathname.includes('products')) {
            setVisible(true);
        } else {
            setVisible(false);
        }
        
    },[location])

    return showSearch  && visible ? (
      <div className='border-t border-b text-center'>
          <div className='inline-flex bg-gray-100 items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='flex-1 outline-none bg-inherit text-sm'
                type='text'
                placeholder='Search'
              />
              <SearchOutlined className='w-4' />
              
          </div>
          <FontAwesomeIcon
                onClick={() => setShowSearch(false)}
                icon={faXmark}
                className='inline w-3 cursor-pointer text-gray-700'
              />
      </div>
    ) : null;
}
