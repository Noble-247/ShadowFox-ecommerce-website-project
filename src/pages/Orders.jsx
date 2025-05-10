import useTitle from '../customHooks/useTitle';
import { useContext } from 'react';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

const Orders = () => {
  useTitle('Orders | Xumia');
  const { products, currency } = useContext(ShopContext);

  function handleClick() {
    toast.info('This feature will be enabled soon. stay tuned 😊!');
  }

  return (
    <>
      {/* Hero Section */}
      <div className='relative h-[40vh] bg-gradient-to-r from-red-900 to-red-700'>
        <div className='absolute inset-0 bg-black/40' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-center text-white space-y-4'>
            <h1 className='text-4xl md:text-6xl font-bold'>My Orders</h1>
            <p className='text-lg md:text-xl'>
              Track and manage your purchases
            </p>
          </div>
        </div>
      </div>

      <section className='container mx-auto px-4 py-8'>
        <div className='bg-white rounded-lg shadow-lg p-6'>
          <div className='mb-8'>
            <Title titleOne='ORDER' titleTwo='HISTORY' />
          </div>

          <div className='space-y-6'>
            {products.slice(1, 4).map((item) => (
              <div
                key={uuidv4()}
                className='bg-gray-50 rounded-lg p-4 transition-all hover:shadow-md'>
                <div className='flex flex-col md:flex-row md:items-center justify-between gap-6'>
                  <div className='flex items-start gap-6'>
                    <img
                      src={item.image[0]}
                      alt='Product Image'
                      className='w-24 h-24 object-cover rounded-md'
                    />
                    <div className='flex-1'>
                      <h3 className='text-lg font-semibold text-gray-800'>
                        {item.name}
                      </h3>
                      <div className='mt-2 space-y-1 text-sm text-gray-600'>
                        <p className='text-xl font-medium text-gray-800'>
                          {currency} {item.price}
                        </p>
                        <div className='flex flex-wrap gap-4'>
                          <span className='inline-flex items-center'>
                            <svg
                              className='w-4 h-4 mr-1'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'>
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M20 7l-8 4-8-4V5l8 4 8-4v2z'
                              />
                            </svg>
                            Quantity: 1
                          </span>
                          <span className='inline-flex items-center'>
                            <svg
                              className='w-4 h-4 mr-1'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'>
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M15 15l-2 5L9 9l11 4-5 2z'
                              />
                            </svg>
                            Size: M
                          </span>
                        </div>
                        <p className='text-gray-500'>
                          Ordered on{' '}
                          <span className='font-medium'>26 January, 2025</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 items-center'>
                    <div className='flex items-center gap-2'>
                      <span className='w-2 h-2 rounded-full bg-green-500'></span>
                      <span className='text-sm font-medium text-green-600'>
                        Ready to ship
                      </span>
                    </div>
                    <button
                      onClick={handleClick}
                      className=' bg-red-900 hover:bg-red-800 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors'>
                      Track Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Orders;
