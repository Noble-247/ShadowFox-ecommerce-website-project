import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  const { currency, deliveryFee, getTotalCartAmount } = useContext(ShopContext);

  return (
    <section className='w-full max-w-md mx-auto'>
      <div className='text-2xl md:text-3xl mb-6'>
        <Title titleOne='CART' titleTwo='TOTALS' />
      </div>
      <div className='bg-white rounded-lg shadow-lg p-6 border border-gray-100'>
        <div className='space-y-4'>
          <div className='flex justify-between items-center py-2'>
            <p className='text-gray-600'>Subtotal</p>
            <p className='font-medium'>
              {currency} {getTotalCartAmount()}.00
            </p>
          </div>
          <div className='border-t border-dashed border-gray-200'></div>
          <div className='flex justify-between items-center py-2'>
            <p className='text-gray-600'>Shipping Fee</p>
            <p className='font-medium'>
              {currency} {deliveryFee}.00
            </p>
          </div>
          <div className='border-t border-dashed border-gray-200'></div>
          <div className='flex justify-between items-center py-3 mt-2'>
            <p className='text-lg font-semibold'>Total</p>
            <p className='text-lg font-bold text-emerald-600'>
              {currency}
              {getTotalCartAmount() === 0
                ? 0
                : getTotalCartAmount() + deliveryFee}
              .00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartTotal;
