import useTitle from "../customHooks/useTitle";
import { useState } from "react";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { FaStripe } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  useTitle("Place Order | Xumia");

  const method = {
    cashOnDelivery: "Cash On Delivery",
    stripe: "Stripe",
    paypal: "PayPal",
  };
  const [paymentMethod, setPaymentMethod] = useState(method.cashOnDelivery);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/orders");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'
    >
      {/* Left Side */}
      <section className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title titleOne='DELIVERY' titleTwo='INFORMATION' />
        </div>

        <div className='flex gap-3'>
          <input
            type='text'
            name='firstName'
            placeholder='Your first name'
            pattern='[A-Za-z]{2,}'
            required
            className='border border-gray-300 rounded-md py-1.5 px-3.5 w-full'
          />
          <input
            type='text'
            name='lastName'
            placeholder='Your last name'
            pattern='[A-Za-z]{2,}'
            required
            className='border border-gray-300 rounded-md py-1.5 px-3.5 w-full'
          />
        </div>
        <input
          type='email'
          name='email'
          placeholder='Your email'
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
          required
          className='border border-gray-300 rounded-md py-1.5 px-3.5 w-full'
        />
        <input
          type='text'
          name='streetAddress'
          placeholder='Your street address'
          required
          className='border border-gray-300 rounded-md py-1.5 px-3.5 w-full'
        />
        <div className='flex gap-3'>
          <input
            type='text'
            name='city'
            placeholder='City'
            pattern='[A-Za-z]{2,}'
            required
            className='border border-gray-300 rounded-md py-1.5 px-3.5 w-full'
          />
          <input
            type='text'
            name='state'
            placeholder='State'
            pattern='[A-Za-z]{2,}'
            required
            className='border border-gray-300 rounded-md py-1.5 px-3.5 w-full'
          />
        </div>
        <div className='flex gap-3'>
          <input
            type='number'
            name='zipCode'
            placeholder='Zip Code'
            pattern='[0-9]{5}'
            required
            className='border border-gray-300 rounded-md py-1.5 px-3.5 w-full'
          />
          <input
            type='text'
            placeholder='country'
            pattern='[A-Za-z]{2,}'
            required
            className='border border-gray-300 rounded-md py-1.5 px-3.5 w-full'
          />
        </div>
        <input
          type='tel'
          name='phoneNumber'
          placeholder='Your phone number'
          pattern='(\d{3}[-\s]?\d{3}[-\s]?\d{4}|\(\d{3}\)\s?\d{3}[-\s]?\d{4})'
          required
          className='border border-gray-300 rounded-md py-1.5 px-3.5 w-full'
        />
      </section>

      {/* Right Side */}
      <section className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title titleOne='PAYMENT' titleTwo='METHOD' />
          {/* Payment Method Selection */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div
              onClick={() => setPaymentMethod(method.stripe)}
              className='flex items-center gap-3 border p-2 px-3 cursor-pointer'
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  paymentMethod === method.stripe ? "bg-green-500" : ""
                }`}
              ></p>
              <FaStripe className='text-[55px] text-blue-700' />
            </div>
            <div
              onClick={() => setPaymentMethod(method.paypal)}
              className='flex items-center gap-3 border p-2 px-3 cursor-pointer'
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  paymentMethod === method.paypal ? "bg-green-500" : ""
                }`}
              ></p>
              <FaCcPaypal className='text-[55px] text-blue-700' />
            </div>
            <div
              onClick={() => setPaymentMethod(method.cashOnDelivery)}
              className='flex items-center gap-3 border p-2 px-3 cursor-pointer'
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  paymentMethod === method.cashOnDelivery ? "bg-green-500" : ""
                }`}
              ></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>
                CASH ON DELIVERY
              </p>
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button
              type='submit'
              className='bg-red-900 hover:bg-red-700 text-gray-50 px-16 py-3 text-sm'
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </section>
    </form>
  );
};

export default PlaceOrder;
