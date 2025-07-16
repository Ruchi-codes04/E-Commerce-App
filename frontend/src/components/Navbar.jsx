import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearch, getCartCount} = useContext(ShopContext);


  return (
    <div className="flex items-center w-full justify-between  font-medium py-4">
      <div>
        <Link to={'/'}>
        <img
          src={assets.logo}
          className='w-[80px] h-[80px] rounded-full'
          alt="Logo"
        />
        </Link>
      </div>

      <ul
        className="hidden sm:flex list-none text-sm text-[#4B5563] gap-[32px]"
        
      >
        <li>
          <NavLink
            to="/"
            className="hover:text-[#111827] text-inherit no-underline"
          >
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.6px] bg-gray-700 hidden'/>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/collections"
            className="hover:text-[#111827] text-inherit no-underline"
          >
            <p> COLLECTIONS</p>
            <hr className='w-2/4 border-none h-[1.6px] bg-gray-700 hidden'/>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className="hover:text-[#111827] text-inherit no-underline"
          >
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.6px] bg-gray-700 hidden'/>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className="hover:text-[#111827] text-inherit no-underline"
          >
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.6px] bg-gray-700 hidden'/>
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-[30px] ml-[48px]">
        <img onClick={()=>setShowSearch(true)}
          src={assets.search_icon}
          alt="search-icon"
          className="w-5 cursor-pointer"
        />
        <div className="relative group">
          <Link to = "/login">
          <img
            src={assets.profile_icon}
            alt="profile-icon"
            className="w-[20px] h-[20px]"
          />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-[0px] pt-[5px]">
            <div className="flex flex-col w-36 bg-[#f1f5f9] text-[#6b7280] rounded px-[16px] py-[12px] gap-3">
              <p className="cursor-pointer hover:text-[#000]">My Profile</p>
              <p className="cursor-pointer hover:text-[#000]">Orders</p>
              <p className="cursor-pointer hover:text-[#000]">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className='relative'>
           <img src={assets.cart_icon} alt="cart-icon" className="w-[20px] min-w-[20px]" />
           <p className='absolute right-[-5px] bottom-[-5px] w-[16px] text-center leading-[16px] bg-[#000] text-[#fff] aspect-square rounded-full text-[8px]'>{getCartCount()}</p>

        </Link>
        <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt="menu-icon" className='w-5 cursor-pointer sm:hidden'/>
       </div>

       {/* Sidebar menu for small screens */}
       <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
             <div className="flex flex-col text-gray-600">
              <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                <img src={assets.dropdown_icon} alt="dropdown-icon" className="h-4 rotate-180" />
                <p>Back</p>
              </div>

              <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
              <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collections'>COLLECTIONS</NavLink>
              <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
              <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>


             </div>

       </div>



    </div>
  );
};

export default Navbar;
