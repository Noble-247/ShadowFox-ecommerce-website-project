import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <motion.div
      initial='hidden'
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
      className='group'>
      <Link
        to={`/product/${id}`}
        className='block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'>
        <div className='relative aspect-[4/5] overflow-hidden rounded-t-lg'>
          <img
            src={image[0]}
            alt={name}
            className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500'
          />
          <div className='absolute top-2 left-2'>
            <span className='bg-red-500 text-white text-xs px-2 py-1 rounded-full'>
              New
            </span>
          </div>
        </div>
        <div className='p-4'>
          <h3 className='text-sm sm:text-base font-medium text-gray-800 line-clamp-2 mb-2'>
            {name}
          </h3>
          <div className='flex items-center justify-between'>
            <p className='text-lg font-bold text-gray-900'>
              <span className='text-sm text-gray-600'>{currency}</span>
              {price.toLocaleString()}
            </p>
            <div className='opacity-0 group-hover:opacity-100 transition-opacity'>
              <button className='bg-black text-white p-2 rounded-full hover:bg-gray-800'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path d='M10 12l-4-4h8l-4 4z' />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductItem;
