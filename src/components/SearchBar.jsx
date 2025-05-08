import { useContext, useEffect, useRef, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { CiSearch } from 'react-icons/ci';
import { RxCross2 } from 'react-icons/rx';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  /**
   * Context Integration:
   * - searchQuery: Stores the current search text
   * - showSearchField: Controls search modal visibility
   * - Both managed in global context for cross-component access
   */
  const { searchQuery, setSearchQuery, showSearchField, setShowSearchField } =
    useContext(ShopContext);

  /**
   * State & Refs:
   * - inputRef: Used for auto-focus and DOM manipulation
   * - isLoading: Manages search loading state
   */
  const inputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Auto-focus & Keyboard Navigation:
   * - Automatically focuses input when search modal opens
   * - Implements Escape key listener for modal closing
   * - Cleanup listener on component unmount
   */
  useEffect(() => {
    if (showSearchField && inputRef.current) {
      inputRef.current.focus();
    }

    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setShowSearchField(false);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [showSearchField, setShowSearchField]);

  /**
   * Search Handler:
   * - Prevents default form submission
   * - Manages loading state
   * - TODO: Implement actual search logic
   */
  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Implement your search logic here
    setTimeout(() => setIsLoading(false), 1000); // Remove this when implementing real search
  };

  /**
   * Search Reset:
   * - Clears search input
   * - Maintains focus after clearing
   */
  const clearSearch = () => {
    setSearchQuery('');
    inputRef.current?.focus();
  };

  /**
   * Route-based Rendering:
   * - Component only renders on /collections route
   * - Prevents unnecessary modal rendering on other routes
   */
  const location = useLocation();

  if (location.pathname !== '/collections') {
    return null;
  }

  /**
   * UI Features:
   * 1. Backdrop blur with animation
   * 2. Glass morphism effect (backdrop-blur-sm) - removed  from the main div class
   * 3. Responsive sizing with breakpoints
   * 4. Loading state animation
   * 5. Hover and focus interactions
   * 6. Accessibility features
   */
  return showSearchField === true ? (
    <div className='fixed inset-0 bg-black/30 flex items-center justify-center z-50 animate-fadeIn'>
      <section
        className='bg-white/90 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm 
        text-center w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%] xl:w-[50%] 
        transform transition-all duration-300 scale-100 hover:scale-[1.02]'>
        <form onSubmit={handleSearch} className='relative'>
          <div
            className='flex items-center justify-center space-x-3 border-2 border-gray-200 
            px-6 py-3 my-5 mx-auto rounded-full w-full sm:w-[80%] md:w-[70%] 
            focus-within:border-red-400 focus-within:shadow-lg transition-all duration-300
            hover:border-gray-300 bg-white/50'>
            <input
              ref={inputRef}
              type='text'
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder='Type your search query here...'
              className='flex-1 outline-none bg-transparent text-base text-gray-700 placeholder:text-gray-400'
              disabled={isLoading}
            />
            {searchQuery && (
              <RxCross2
                onClick={clearSearch}
                className='w-5 h-5 cursor-pointer text-gray-400 hover:text-gray-600 
                  transition-colors duration-200 hover:scale-110'
              />
            )}
            <button
              type='submit'
              disabled={isLoading}
              className='p-2 hover:bg-gray-100 rounded-full transition-all duration-200 
                disabled:opacity-50 disabled:cursor-not-allowed'>
              {isLoading ? (
                <div
                  className='animate-spin h-5 w-5 border-[3px] border-red-800 
                  rounded-full border-t-transparent'
                />
              ) : (
                <CiSearch className='w-5 h-5 text-gray-600 hover:text-red-800' />
              )}
            </button>
          </div>
        </form>
        <RxCross2
          onClick={() => setShowSearchField(false)}
          className='absolute top-4 right-4 w-6 h-6 cursor-pointer text-gray-400 
            hover:text-gray-600 transition-all duration-200 hover:rotate-90'
        />
      </section>
    </div>
  ) : null;
};

export default SearchBar;
