import useTitle from '../customHooks/useTitle';
import { useState } from 'react';
import CartTotal from '../components/CartTotal';
import Title from '../components/Title';
import { FaStripe } from 'react-icons/fa';
import { FaCcPaypal } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  useTitle('Place Order | Xumia');

  const method = {
    cashOnDelivery: 'Cash On Delivery',
    stripe: 'Stripe',
    paypal: 'PayPal',
  };
  const [paymentMethod, setPaymentMethod] = useState(method.cashOnDelivery);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const validations = {
      firstName: /^[A-Za-z\s]{2,30}$/,
      lastName: /^[A-Za-z\s]{2,30}$/,
      email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      streetAddress: /^[A-Za-z0-9\s,.#-]{5,100}$/,
      city: /^[A-Za-z\s.-]{2,50}$/,
      state: /^[A-Za-z\s.-]{2,50}$/,
      zipCode: /^[0-9]{5}(?:-[0-9]{4})?$/,
      country: /^[A-Za-z\s.-]{2,50}$/,
      phoneNumber:
        /^(\+\d{1,3}[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/,
    };

    if (!value.trim()) return 'This field is required';

    if (!validations[name].test(value)) {
      return `Invalid ${name.replace(/([A-Z])/g, ' $1').toLowerCase()}`;
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    navigate('/orders');
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='relative h-[40vh] bg-gradient-to-r from-red-900 to-red-700'>
        <div className='absolute inset-0 bg-black/40' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-center text-white space-y-4'>
            <h1 className='text-4xl md:text-6xl font-bold'>Checkout</h1>
            <p className='text-lg md:text-xl'>
              Complete your order with confidence
            </p>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-4 pb-20'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col lg:flex-row gap-8'>
          {/* Left Side - Delivery Information */}
          <section className='flex-1'>
            <div className='bg-white rounded-lg shadow-md p-6 mb-8'>
              <div className='mb-6 text-2xl md:text-3xl'>
                <Title titleOne='DELIVERY' titleTwo='INFORMATION' />
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <input
                    type='text'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder='First Name'
                    className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors'
                  />
                  {errors.firstName && (
                    <p className='text-red-500 text-xs mt-1'>
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type='text'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder='Last Name'
                    className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors'
                  />
                  {errors.lastName && (
                    <p className='text-red-500 text-xs mt-1'>
                      {errors.lastName}
                    </p>
                  )}
                </div>
                <div className='md:col-span-2'>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Email'
                    className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors'
                  />
                  {errors.email && (
                    <p className='text-red-500 text-xs mt-1'>{errors.email}</p>
                  )}
                </div>
                <div className='md:col-span-2'>
                  <input
                    type='text'
                    name='streetAddress'
                    value={formData.streetAddress}
                    onChange={handleChange}
                    placeholder='Street Address'
                    className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors'
                  />
                  {errors.streetAddress && (
                    <p className='text-red-500 text-xs mt-1'>
                      {errors.streetAddress}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type='text'
                    name='city'
                    value={formData.city}
                    onChange={handleChange}
                    placeholder='City'
                    className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors'
                  />
                  {errors.city && (
                    <p className='text-red-500 text-xs mt-1'>{errors.city}</p>
                  )}
                </div>
                <div>
                  <input
                    type='text'
                    name='state'
                    value={formData.state}
                    onChange={handleChange}
                    placeholder='State'
                    className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors'
                  />
                  {errors.state && (
                    <p className='text-red-500 text-xs mt-1'>{errors.state}</p>
                  )}
                </div>
                <div>
                  <input
                    type='text'
                    name='zipCode'
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder='Zip Code'
                    className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors'
                  />
                  {errors.zipCode && (
                    <p className='text-red-500 text-xs mt-1'>
                      {errors.zipCode}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type='text'
                    name='country'
                    value={formData.country}
                    onChange={handleChange}
                    placeholder='Country'
                    className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors'
                  />
                  {errors.country && (
                    <p className='text-red-500 text-xs mt-1'>
                      {errors.country}
                    </p>
                  )}
                </div>
                <div className='md:col-span-2'>
                  <input
                    type='tel'
                    name='phoneNumber'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder='Phone Number'
                    className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors'
                  />
                  {errors.phoneNumber && (
                    <p className='text-red-500 text-xs mt-1'>
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Right Side - Payment & Total */}
          <section className='lg:w-[400px]'>
            <div className='bg-white rounded-lg shadow-md p-6 mb-6'>
              <CartTotal />
            </div>

            <div className='bg-white rounded-lg shadow-md p-6'>
              <div className='text-2xl md:text-3xl mb-3'>
                <Title titleOne='PAYMENT' titleTwo='METHOD' />
              </div>
              <div className='space-y-4 mt-6'>
                <div
                  onClick={() => setPaymentMethod(method.stripe)}
                  className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                    paymentMethod === method.stripe
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-500'
                  }`}>
                  <div
                    className={`w-4 h-4 rounded-full border-2 mr-4 ${
                      paymentMethod === method.stripe
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}
                  />
                  <FaStripe className='text-[40px] text-blue-700' />
                </div>
                <div
                  onClick={() => setPaymentMethod(method.paypal)}
                  className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                    paymentMethod === method.paypal
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-500'
                  }`}>
                  <div
                    className={`w-4 h-4 rounded-full border-2 mr-4 ${
                      paymentMethod === method.paypal
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}
                  />
                  <FaCcPaypal className='text-[40px] text-blue-700' />
                </div>
                <div
                  onClick={() => setPaymentMethod(method.cashOnDelivery)}
                  className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                    paymentMethod === method.cashOnDelivery
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-500'
                  }`}>
                  <div
                    className={`w-4 h-4 rounded-full border-2 mr-4 ${
                      paymentMethod === method.cashOnDelivery
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}
                  />
                  <p className='text-gray-700 font-medium'>Cash On Delivery</p>
                </div>
              </div>

              <button
                type='submit'
                className='w-full mt-6 bg-red-900 hover:bg-red-800 text-white py-4 rounded-lg font-medium transition-colors focus:ring-2 focus:ring-red-500 focus:ring-opacity-50'>
                PLACE ORDER
              </button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;
