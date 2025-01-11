import { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  console.log(visible);

  return (
    <nav className='flex items-center justify-between py-5 font-medium'>
      <NavLink to='/'>
        <img src={assets.logo} alt='Website Logo' />
      </NavLink>

      <ul className='hidden md:flex gap-5 text-sm text-gray-700'>
        <li>
          <NavLink to='/' end className={`flex flex-col items-center gap-1`}>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[2.5px] bg-gray-700 hidden' />
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/collections'
            className={`flex flex-col items-center gap-1`}
          >
            <p>COLLECTIONS</p>
            <hr className='w-2/4 border-none h-[2.5px] bg-gray-700 hidden' />
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className={`flex flex-col items-center gap-1`}>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[2.5px] bg-gray-700 hidden' />
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' className={`flex flex-col items-center gap-1`}>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[2.5px] bg-gray-700 hidden' />
          </NavLink>
        </li>
      </ul>

      <div className='flex items-center gap-6 '>
        <FaSearch className='text-[1.2rem] text-gray-700 cursor-pointer' />
        <div className='group relative'>
          <FaUser className='text-[1.2rem] text-gray-700 cursor-pointer' />
          <div className='group-hover:block hidden absolute right-0 dropdown-menu shadow-md p-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-md'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>My Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <NavLink to='/cart' className='relative'>
          <FaShoppingCart className='text-[1.2rem]' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-red-700 text-white aspect-square rounded-full text-[8px]'>
            10
          </p>
        </NavLink>
        {/* Mobile Menu Icon */}
        {visible === false ? (
          <FaBars
            onClick={() => setVisible(true)}
            className='md:hidden text-[1.5rem] text-gray-700 cursor-pointer'
          />
        ) : (
          <FaTimes
            onClick={() => setVisible(false)}
            className='md:hidden text-[1.5rem] text-gray-700 cursor-pointer'
          />
        )}
      </div>
      {/* Mobile Menu */}
      <ul
        className={`md:hidden flex flex-col items-start gap-10 absolute top-[80px] right-0 overflow-hidden px-6 py-10 bg-gray-700 text-white rounded-md transition-all duration-300 ease-in-out transform ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <li>
          <NavLink
            onClick={() => setVisible(false)}
            to='/'
            end
            className={`flex flex-col items-center gap-1`}
          >
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[2.5px] bg-gray-300 hidden' />
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setVisible(false)}
            to='/collections'
            className={`flex flex-col items-center gap-1`}
          >
            <p>COLLECTIONS</p>
            <hr className='w-2/4 border-none h-[2.5px] bg-gray-300 hidden' />
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setVisible(false)}
            to='/about'
            className={`flex flex-col items-center gap-1`}
          >
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[2.5px] bg-gray-300 hidden' />
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setVisible(false)}
            to='/contact'
            className={`flex flex-col items-center gap-1`}
          >
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[2.5px] bg-gray-300 hidden' />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
