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
      border: '1px solid #E5E7EB',
      borderRadius: '8px',
      fontSize: '0.875rem',
      minHeight: '40px',
      backgroundColor: '#F9FAFB',
      borderColor: isFocused ? '#7F1D1D' : '#E5E7EB',
      boxShadow: isFocused ? '0 0 0 2px rgba(127, 29, 29, 0.1)' : 'none',
      '&:hover': {
        borderColor: isFocused ? '#7F1D1D' : '#9CA3AF',
      },
      transition: 'all 0.2s ease',
    }),
    // Style for individual options in the dropdown
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      backgroundColor: isSelected ? '#7F1D1D' : isFocused ? '#FEF2F2' : 'white',
      color: isSelected ? 'white' : '#1F2937',
      fontSize: '0.875rem',
      padding: '10px 16px',
      transition: 'all 0.2s ease',
      ':active': {
        backgroundColor: '#7F1D1D',
        color: 'white',
      },
    }),
    // Style for the dropdown menu container
    menu: (base) => ({
      ...base,
      borderRadius: '8px',
      marginTop: '4px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    }),
  };

  function toggleCategory(event) {
    if (category.includes(event.target.value)) {
      setCategory((previous) =>
        previous.filter((item) => item !== event.target.value)
      );
    } else {
      setCategory((previous) => [...previous, event.target.value]);
    }
  }

  function toggleSubCategory(event) {
    if (subCategory.includes(event.target.value)) {
      setSubCategory((previous) =>
        previous.filter((item) => item !== event.target.value)
      );
    } else {
      setSubCategory((previous) => [...previous, event.target.value]);
    }
  }

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

    setFilterProducts(copyOfProducts);
  }

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

  function searchCollections() {
    let copyOfProducts = products.slice();

    copyOfProducts = copyOfProducts.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

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

  return (
    <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      <div className='flex flex-col sm:flex-row gap-8'>
        {/* Filter Options - Left Side */}
        <section className='w-full sm:w-64 flex-shrink-0'>
          <div className='sticky top-4'>
            <button
              onClick={() => setShowFiter(!showFilter)}
              className='w-full sm:hidden flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-4 transition-all duration-200 hover:shadow-md'>
              <span className='font-medium'>FILTERS</span>
              <BiChevronsUp
                className={`transform transition-transform duration-200 ${
                  showFilter ? '' : 'rotate-180'
                }`}
              />
            </button>

            <div
              className={`space-y-6 transition-all duration-300 ease-in-out ${
                showFilter ? 'opacity-100' : 'opacity-0 sm:opacity-100'
              } ${
                showFilter ? 'max-h-[1000px]' : 'max-h-0 sm:max-h-[1000px]'
              } overflow-hidden`}>
              {/* Category Filters */}
              <div className='bg-white p-6 rounded-lg shadow-sm'>
                <p className='text-lg font-medium mb-4'>Categories</p>
                <div className='space-y-3'>
                  {/* Map through category options */}
                  {['Men', 'Women', 'Kids'].map((cat) => (
                    <label
                      key={cat}
                      className='flex items-center gap-3 group cursor-pointer'>
                      <input
                        type='checkbox'
                        value={cat}
                        onChange={toggleCategory}
                        className='w-4 h-4 rounded border-gray-300 text-red-900 focus:ring-red-900'
                      />
                      <span className='text-gray-700 group-hover:text-red-900 transition-colors'>
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Subcategory Filter */}
              <div className='bg-white p-6 rounded-lg shadow-sm'>
                <p className='text-lg font-medium mb-4'>Type</p>
                <div className='space-y-3'>
                  {/* Map through subcategory options */}
                  {['Topwear', 'Bottomwear', 'Winterwear'].map((type) => (
                    <label
                      key={type}
                      className='flex items-center gap-3 group cursor-pointer'>
                      <input
                        type='checkbox'
                        value={type}
                        onChange={toggleSubCategory}
                        className='w-4 h-4 rounded border-gray-300 text-red-900 focus:ring-red-900'
                      />
                      <span className='text-gray-700 group-hover:text-red-900 transition-colors'>
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collections - Right Side */}
        <section className='flex-1'>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8'>
            <div className='text-2xl md:text-3xl'>
              <Title titleOne='ALL' titleTwo='COLLECTIONS' />
            </div>
            {/* React Select component with:
                - Custom styling through styles prop
                - Default value set to first option
                - onChange handler to update sortType state
                - Search functionality disabled
                - Full width on mobile, fixed width on desktop */}
            <Select
              options={sortOptions}
              styles={customStyles}
              defaultValue={sortOptions[0]}
              onChange={(option) => setSortType(option.value)}
              isSearchable={false}
              className='w-full sm:w-48'
            />
          </div>

          {/* Products Grid */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8'>
            {filterProducts.map((item) => (
              <div
                key={uuidv4()}
                className='group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1'>
                <ProductItem
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filterProducts.length === 0 && (
            <div className='text-center py-12'>
              <p className='text-gray-500 text-lg'>
                No products found matching your criteria
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Collections;
