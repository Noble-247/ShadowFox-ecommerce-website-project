import { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';
import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearchField, getCartCount } = useContext(ShopContext);
  const navigate = useNavigate();

  // Function to show the searchField that is initially set to hidden and thereafter, navigate to the collections page
  function showSearchField() {
    setShowSearchField(true);
    navigate('/collections');
  }

  // console.log(visible)

  return (
    <nav className='flex items-center justify-between py-5 font-semibold'>
      <NavLink to='/'>
        <img src={assets.logo1} alt='Website Logo' className='w-[50px]' />
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
            className={`flex flex-col items-center gap-1`}>
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
          <NavLink to='/login'>
            <FaUser className='text-[1.2rem] text-gray-700 cursor-pointer hover:text-red-900 transition-colors duration-300' />
          </NavLink>
          <div className='invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute right-0 mt-2 transition-all duration-300 ease-in-out transform translate-y-2 group-hover:translate-y-0 z-50'>
            <div className='w-48 py-4 px-6 bg-white rounded-lg shadow-lg border border-gray-100'>
              <div className='space-y-3'>
                <div className='border-b border-gray-100 pb-2 mb-2'>
                  <p className='text-sm font-medium text-gray-500'>Welcome!</p>
                </div>
                <a
                  href='#'
                  className='flex items-center py-2 px-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-900 rounded-md transition-all duration-300 ease-in-out'>
                  <span className='mr-2'>👤</span>
                  My Profile
                </a>
                <a
                  href='#'
                  className='flex items-center py-2 px-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-900 rounded-md transition-all duration-300 ease-in-out'>
                  <span className='mr-2'>📦</span>
                  My Orders
                </a>
                <a
                  href='#'
                  className='flex items-center py-2 px-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-900 rounded-md transition-all duration-300 ease-in-out'>
                  <span className='mr-2'>👋</span>
                  Logout
                </a>
              </div>
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
        className={`md:hidden flex flex-col items-start gap-10 absolute top-[80px] right-0 overflow-hidden px-6 py-10 bg-red-900 text-white rounded-md transition-all duration-300 ease-in-out z-50
          ${visible ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <li>
          <NavLink
            onClick={() => setVisible(false)}
            to='/'
            end
            className={`flex flex-col items-center gap-1`}>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[2.5px] bg-gray-300 hidden' />
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setVisible(false)}
            to='/collections'
            className={`flex flex-col items-center gap-1`}>
            <p>COLLECTIONS</p>
            <hr className='w-2/4 border-none h-[2.5px] bg-gray-300 hidden' />
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setVisible(false)}
            to='/about'
            className={`flex flex-col items-center gap-1`}>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[2.5px] bg-gray-300 hidden' />
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setVisible(false)}
            to='/contact'
            className={`flex flex-col items-center gap-1`}>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[2.5px] bg-gray-300 hidden' />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
