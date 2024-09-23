import { Dropdown, Menu, Space, Typography } from 'antd';
import React, { useState } from 'react'
import { UserOutlined, SettingOutlined, LogoutOutlined, OrderedListOutlined, TruckOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const options = [
    {
      key: '1',
      label: 'My Account',
      icon: <UserOutlined />
    },
    {
      key: '2',
      label: 'Orders',
      icon: <OrderedListOutlined />
    },
    {
      key: '3',
      label: 'Deliveries',
      icon: <TruckOutlined />
      
    },
    {
      key: '4',
      label: 'Settings',
      icon: <SettingOutlined />
    },
    {
      key: '5',
      danger: true,
      label: 'Sign Out',
      icon: <LogoutOutlined />
    },
  ];

 



const Profile = () => {

  const menu = (
    <Menu>
      {options.map(option => (
        <Menu.Item key={option.key} icon={option.icon} danger={option.danger}>
          {option.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const iconStyle = (icon) => ({
    fontSize: '19px',
    color: hoveredIcon === icon ? '' : 'black',
    transition: 'color 0.2s',
    cursor: 'pointer',
     backgroundColor: ''
    

  });
  return (
       <>
              <Dropdown
                 overlay={menu}
    
              >
   
                <Typography.Text>
                  <Space 
                    style={iconStyle('UserOutlined')}
                    onMouseEnter={() => handleMouseEnter('UserOutlined')}
                    onMouseLeave={handleMouseLeave} 
                  >
                    <Link to='/login'><UserOutlined className='text-gray-600' /></Link>
                    {/* Profile */}
                  
                  </Space>
                </Typography.Text>
    

            </Dropdown>
       </>
  )
}



export default Profile;
