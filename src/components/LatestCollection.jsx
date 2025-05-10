import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import { v4 as uuidv4 } from 'uuid';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className='py-16 bg-gradient-to-b from-white to-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center space-y-4 mb-12'>
          <div className='animate-fade-in-up text-2xl md:text-3xl'>
            <Title titleOne='LATEST' titleTwo='COLLECTIONS' />
          </div>
          <p className='max-w-2xl mx-auto text-sm md:text-base text-gray-600 leading-relaxed animate-fade-in-up delay-100'>
            Discover the latest trends and styles in our newest collection. Shop
            now and elevate your wardrobe with our curated selection of
            contemporary pieces.
          </p>
        </div>

        {/* Render Product Items */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8'>
          {latestProducts.map((item, index) => (
            <div
              key={uuidv4()}
              className='animate-fade-in-up'
              style={{ animationDelay: `${index * 100}ms` }}>
              <ProductItem
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <Link
            to='/collections'
            className='group inline-flex items-center gap-3 px-8 py-4 text-gray-100 bg-gradient-to-r from-red-900 to-red-700 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out'>
            <span className='font-medium'>Explore All Collections</span>
            <FaArrowRight className='transform group-hover:translate-x-2 transition-transform duration-300' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestCollection;
