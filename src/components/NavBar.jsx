import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearchField, getCartCount } = useContext(ShopContext);
  const navigate = useNavigate();

  // Function to show the searchField that is initially set to hidden and thereafter, navigate to the collections page
  function showSearchField() {
    setShowSearchField(true);
    navigate("/collections");
  }

  // console.log(visible)

  return (
    <nav className='flex items-center justify-between py-5 font-semibold'>
      <NavLink to='/'>
        <img src={assets.logo1} alt='Website Logo' />
      </NavLink>

      <ul className='hidden md:flex gap-5 text-sm text-red-900'>
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
        <FaSearch
          onClick={showSearchField}
          className='text-[1.2rem] text-gray-700 cursor-pointer'
        />
        <div className='group relative'>
          <FaUser className='text-[1.2rem] text-gray-700 cursor-pointer' />
          <div className='group-hover:block hidden absolute right-0 dropdown-menu shadow-md p-4'>
            <div className='flex flex-col gap-6 w-36 py-3 px-5 bg-gray-100 text-gray-700 rounded-md'>
              <p className='cursor-pointer hover:text-gray-900'>My Profile</p>
              <p className='cursor-pointer hover:text-gray-900'>My Orders</p>
              <p className='cursor-pointer hover:text-gray-900'>Logout</p>
            </div>
          </div>
        </div>
        <NavLink to='/cart' className='relative'>
          <FaShoppingCart className='text-[1.2rem] text-gray-700' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-red-900 text-white aspect-square rounded-full text-[8px]'>
            {getCartCount()}
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
        className={`md:hidden flex flex-col items-start gap-10 absolute top-[80px] right-0 overflow-hidden px-6 py-10 bg-red-900 text-white rounded-md transition-opacity duration-300 ease-in-out 
          ${visible ? "opacity-100" : "opacity-0"}`}
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
