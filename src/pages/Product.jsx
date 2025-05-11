import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect, useCallback } from 'react';
import { ShopContext } from '../context/ShopContext';
import { IoStarSharp } from 'react-icons/io5';
import NotFound from './NotFound';
import RelatedProducts from '../components/RelatedProducts';
import { SiTicktick } from 'react-icons/si';
import useTitle from '../customHooks/useTitle';

const Product = () => {
  useTitle('Product | Xumia');

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [mainProductImage, setMainProductImage] = useState('');
  const [productSize, setProductSize] = useState('');

  // Get the product data from the products array
  const fetchProductData = useCallback(() => {
    const product = products.find((item) => item._id === productId);
    // console.log(product);
    // Check if product exists
    if (product) {
      setProductData(product);
      setMainProductImage(product.image[0]);
    }
  }, [productId, products]);

  useEffect(() => {
    fetchProductData();
  }, [fetchProductData]);

  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      {productData ? (
        <article className='border-t-2 pt-10 transition-all duration-300'>
          {/* Product Data */}
          <div className='grid lg:grid-cols-2 gap-12'>
            {/* Product Image */}
            <div className='flex flex-col-reverse sm:flex-row gap-4'>
              <div className='flex sm:flex-col overflow-x-auto gap-4 w-full sm:w-24'>
                {productData.image.map((item, index) => (
                  <img
                    onClick={() => setMainProductImage(item)}
                    src={item}
                    key={index}
                    alt='Product Image'
                    className={`w-20 h-20 object-cover cursor-pointer rounded-lg hover:opacity-80 transition-opacity duration-200 ${
                      mainProductImage === item ? 'border-2 border-red-900' : ''
                    }`}
                  />
                ))}
              </div>
              <div className='flex-1'>
                <img
                  src={mainProductImage}
                  alt='Product Image'
                  className='w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
                />
              </div>
            </div>

            {/* Product Details */}
            <div className='space-y-6'>
              <h1 className='font-semibold text-3xl text-gray-900'>
                {productData.name}
              </h1>
              <div className='flex items-center gap-1'>
                {[...Array(5)].map((_, index) => (
                  <IoStarSharp
                    key={index}
                    className={`text-xl ${
                      index < 4 ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                  />
                ))}
                <p className='pl-2 text-gray-600'>(120)</p>
              </div>
              <p className='text-4xl font-bold text-red-900'>
                {currency}
                {productData.price}
              </p>
              <p className='text-gray-600 text-lg'>
                <a
                  className='hover:text-red-900 transition-colors duration-200'
                  href='#full-Description'>
                  {productData.description.slice(0, 200)}...
                  <span className='font-medium ml-2 hover:underline'>
                    See More
                  </span>
                </a>
              </p>
              <div className='space-y-6'>
                <div className='space-y-4'>
                  <p className='font-medium text-lg'>Select Size</p>
                  <div className='flex flex-wrap gap-3'>
                    {productData.sizes.map((item, index) => (
                      <button
                        onClick={() => setProductSize(item)}
                        className={`px-6 py-3 rounded-lg transition-all duration-200 ${
                          productSize === item
                            ? 'bg-red-900 text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                        key={index}>
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => addToCart(productData._id, productSize)}
                  className='w-full sm:w-auto px-8 py-4 bg-red-900 text-white rounded-lg font-medium hover:bg-red-800 transition-colors duration-200 transform hover:scale-105'>
                  ADD TO CART
                </button>
                <hr className='my-8' />
                <div className='grid sm:grid-cols-2 gap-4 text-gray-600'>
                  {[
                    '100% original Product',
                    'Free Delivery on order above $50',
                    'Pay on delivery is available',
                    'Easy 7-day returns & exchange',
                  ].map((text, index) => (
                    <div
                      key={index}
                      className='flex items-center gap-2 bg-gray-50 p-3 rounded-lg'>
                      <SiTicktick className='text-red-900' />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Production Description and Review Section */}
          <div className='mt-16'>
            <div className='flex gap-1'>
              <button className='font-semibold px-6 py-3 bg-red-900 text-white rounded-t-lg'>
                Description
              </button>
              <button className='px-6 py-3 text-gray-600 hover:bg-gray-100 rounded-t-lg transition-colors duration-200'>
                Reviews (120)
              </button>
            </div>
            <div className='border rounded-lg p-6 prose max-w-none'>
              <p
                id='full-Description'
                className='text-gray-600 leading-relaxed'>
                {productData.description}
              </p>
            </div>
          </div>

          {/* Display Related Products */}
          <div className='mt-16'>
            <RelatedProducts
              category={productData.category}
              subCategory={productData.subCategory}
            />
          </div>
        </article>
      ) : (
        <NotFound />
      )}
    </section>
  );
};

export default Product;
