/* eslint-disable react-hooks/exhaustive-deps */
import useTitle from '../customHooks/useTitle';
import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { BiChevronsUp } from 'react-icons/bi';
import Title from '../components/Title';
import { v4 as uuidv4 } from 'uuid';
import ProductItem from '../components/ProductItem';
import Select from 'react-select';

const Collections = () => {
  useTitle('Collections | Xumia');

  const { products, searchQuery, setSearchQuery } = useContext(ShopContext);
  const [showFilter, setShowFiter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('Relevant');

  // Define options for the sort dropdown
  // Each option has a value (used internally) and a label (displayed to user)
  const sortOptions = [
    { value: 'relevant', label: 'Sort by: Relevance' },
    { value: 'low-high', label: 'Sort by: Low to High' },
    { value: 'high-low', label: 'Sort by: High to Low' },
  ];

  // Custom styles for React Select component
  // This object allows us to override default styling of various parts of the select
  const customStyles = {
    // Style for the main control container
    control: (base, { isFocused }) => ({
      ...base,
      border: '2px solid #D1D5DB', // Gray border matching Tailwind's gray-300
      borderRadius: '2px',
      fontSize: '0.875rem', // 14px, matching text-sm
      minHeight: '30px',
      borderColor: isFocused ? '#7F1D1D' : '#D1D5DB', // Changes border color when focused
      boxShadow: isFocused ? '0 0 0 1px #7F1D1D' : 'none', // Adds a subtle outline when focused
      '&:hover': {
        borderColor: isFocused ? '#7F1D1D' : '#9CA3AF', // Darker gray on hover (gray-400)
      },
    }),
    // Style for individual options in the dropdown
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      // Change background colors based on state:
      // - Selected: deep red (red-900)
      // - Focused/Hovered: light red (red-100)
      // - Default: white
      backgroundColor: isSelected ? '#7F1D1D' : isFocused ? '#FEE2E2' : 'white',
      color: isSelected ? 'white' : '#1F2937', // Text color: white for selected, gray-800 for others
      fontSize: '0.875rem', // Reduces font size to 14px
      padding: '8px 12px', // Adjusts padding to match smaller font
      ':active': {
        backgroundColor: '#7F1D1D', // Deep red when clicked
        color: 'white',
      },
    }),
    // Style for the dropdown menu container
    menu: (base) => ({
      ...base,
      borderRadius: '2px',
      marginTop: '2px',
    }),
  };

  // Add or remove items from category
  function toggleCategory(event) {
    if (category.includes(event.target.value)) {
      setCategory((previous) =>
        previous.filter((item) => item !== event.target.value)
      );
    } else {
      setCategory((previous) => [...previous, event.target.value]);
    }
  }

  // Add or remove items from subCategory
  function toggleSubCategory(event) {
    if (subCategory.includes(event.target.value)) {
      setSubCategory((previous) =>
        previous.filter((item) => item !== event.target.value)
      );
    } else {
      setSubCategory((previous) => [...previous, event.target.value]);
    }
  }

  // Filter collections based on the given item category or subCategory
  function applyAllCategoryFilters() {
    let copyOfProducts = products.slice();

    if (category.length > 0) {
      copyOfProducts = copyOfProducts.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      copyOfProducts = copyOfProducts.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    // Save the result of the filter process into the filterProducts array
    setFilterProducts(copyOfProducts);
  }

  // Sort collections based on the selected criteria from the form select option
  function sortFilteredProducts() {
    let copyOfFilterProducts = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(
          copyOfFilterProducts.sort((a, b) => a.price - b.price)
        );
        break;

      case 'high-low':
        setFilterProducts(
          copyOfFilterProducts.sort((a, b) => b.price - a.price)
        );
        break;

      default:
        applyAllCategoryFilters();
        break;
    }
  }

  // Search for items based on their name or ....
  function searchCollections() {
    let copyOfProducts = products.slice();

    copyOfProducts = copyOfProducts.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Save the result of the filter process into the filterProducts array
    setFilterProducts(copyOfProducts);
  }

  useEffect(() => {
    applyAllCategoryFilters();
  }, [category, setCategory, subCategory, setSubCategory]);

  useEffect(() => {
    sortFilteredProducts();
  }, [sortType]);

  useEffect(() => {
    searchCollections();
  }, [searchQuery, setSearchQuery]);

  // ======== Testing Filter Array ===========
  /*  useEffect(() => {
    console.log(category, subCategory);
  }, [category, subCategory]); */
  // =========            ================

  return (
    <main className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options - (Left Side) */}
      <section className='min-w-60'>
        <p
          onClick={() => setShowFiter(!showFilter)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS{' '}
          <BiChevronsUp
            className={`sm:hidden animate-pulse ${
              showFilter === false ? 'rotate-180' : ''
            }`}
          />
        </p>
        {/* Category Filters */}
        <div
          className={`border border-gray-300 rounded-sm pl-5 py-3 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input
                onChange={toggleCategory}
                type='checkbox'
                value={'Men'}
                className='w-3 checked:accent-red-900'
              />{' '}
              Men
            </label>
            <label className='flex gap-2'>
              <input
                onChange={toggleCategory}
                type='checkbox'
                value={'Women'}
                className='w-3 checked:accent-red-900'
              />{' '}
              Women
            </label>
            <label className='flex gap-2'>
              <input
                onChange={toggleCategory}
                type='checkbox'
                value={'Kids'}
                className='w-3 checked:accent-red-900'
              />{' '}
              Kids
            </label>
          </div>
        </div>

        {/* Subcategory Filter */}
        <div
          className={`border border-gray-300 rounded-sm pl-5 py-3 my-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input
                onChange={toggleSubCategory}
                type='checkbox'
                value={'Topwear'}
                className='w-3 checked:accent-red-900'
              />{' '}
              Topwear
            </label>
            <label className='flex gap-2'>
              <input
                onChange={toggleSubCategory}
                type='checkbox'
                value={'Bottomwear'}
                className='w-3 checked:accent-red-900'
              />{' '}
              Bottomwear
            </label>
            <label className='flex gap-2'>
              <input
                onChange={toggleSubCategory}
                type='checkbox'
                value={'Winterwear'}
                className='w-3 checked:accent-red-900'
              />{' '}
              Winterwear
            </label>
          </div>
        </div>
      </section>

      {/* Collections - (Right Side) */}
      <section className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title titleOne='ALL' titleTwo='COLLECTIONS' />
          {/* React Select component with:
              - Custom styling through styles prop
              - Default value set to first option
              - onChange handler to update sortType state
              - Search functionality disabled
              - Fixed width of 12rem (w-48) */}
          <Select
            options={sortOptions}
            styles={customStyles}
            defaultValue={sortOptions[0]}
            onChange={(option) => setSortType(option.value)}
            isSearchable={false}
            className='w-48'
          />
        </div>

        {/* Render Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6'>
          {filterProducts.map((item) => (
            <ProductItem
              key={uuidv4()}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Collections;
