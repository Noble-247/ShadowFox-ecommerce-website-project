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
    // Regular expressions for validating each field
    const validations = {
      // Allow 2-30 letters and spaces for names
      firstName: /^[A-Za-z\s]{2,30}$/,
      lastName: /^[A-Za-z\s]{2,30}$/,
      // Standard email format: username@domain.tld
      email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      // Allow letters, numbers, spaces, and special characters (#,-,.) for addresses
      streetAddress: /^[A-Za-z0-9\s,.#-]{5,100}$/,
      // Allow letters, spaces, dots, and hyphens for cities and states
      city: /^[A-Za-z\s.-]{2,50}$/,
      state: /^[A-Za-z\s.-]{2,50}$/,
      // Accept both 5-digit and 9-digit (ZIP+4) formats
      zipCode: /^[0-9]{5}(?:-[0-9]{4})?$/,
      country: /^[A-Za-z\s.-]{2,50}$/,
      // Accept various phone formats including international:
      // +1-234-567-8900
      // (234) 567-8900
      // 234-567-8900
      phoneNumber:
        /^(\+\d{1,3}[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/,
    };

    // First check if field is empty
    if (!value.trim()) return 'This field is required';

    // Test value against its corresponding regex pattern
    if (!validations[name].test(value)) {
      // Convert camelCase to space-separated words for error message
      // e.g., 'firstName' becomes 'first name'
      return `Invalid ${name.replace(/([A-Z])/g, ' $1').toLowerCase()}`;
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update form data while preserving other fields
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate field on every change for immediate feedback
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    // If there are any errors, update error state and prevent submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If validation passes, proceed with navigation
    navigate('/orders');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Left Side */}
      <section className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title titleOne='DELIVERY' titleTwo='INFORMATION' />
        </div>

        <div className='flex gap-3'>
          <div className='w-full'>
            <input
              type='text'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              placeholder='Your first name'
              className={`border ${
                errors.firstName ? 'border-red-500' : 'border-gray-300'
              } rounded-md py-1.5 px-3.5 w-full`}
            />
            {errors.firstName && (
              <p className='text-red-500 text-xs mt-1'>{errors.firstName}</p>
            )}
          </div>
          <div className='w-full'>
            <input
              type='text'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              placeholder='Your last name'
              className={`border ${
                errors.lastName ? 'border-red-500' : 'border-gray-300'
              } rounded-md py-1.5 px-3.5 w-full`}
            />
            {errors.lastName && (
              <p className='text-red-500 text-xs mt-1'>{errors.lastName}</p>
            )}
          </div>
        </div>
        <div className='w-full'>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Your email'
            className={`border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } rounded-md py-1.5 px-3.5 w-full`}
          />
          {errors.email && (
            <p className='text-red-500 text-xs mt-1'>{errors.email}</p>
          )}
        </div>
        <div className='w-full'>
          <input
            type='text'
            name='streetAddress'
            value={formData.streetAddress}
            onChange={handleChange}
            placeholder='Your street address'
            className={`border ${
              errors.streetAddress ? 'border-red-500' : 'border-gray-300'
            } rounded-md py-1.5 px-3.5 w-full`}
          />
          {errors.streetAddress && (
            <p className='text-red-500 text-xs mt-1'>{errors.streetAddress}</p>
          )}
        </div>
        <div className='flex gap-3'>
          <div className='w-full'>
            <input
              type='text'
              name='city'
              value={formData.city}
              onChange={handleChange}
              placeholder='City'
              className={`border ${
                errors.city ? 'border-red-500' : 'border-gray-300'
              } rounded-md py-1.5 px-3.5 w-full`}
            />
            {errors.city && (
              <p className='text-red-500 text-xs mt-1'>{errors.city}</p>
            )}
          </div>
          <div className='w-full'>
            <input
              type='text'
              name='state'
              value={formData.state}
              onChange={handleChange}
              placeholder='State'
              className={`border ${
                errors.state ? 'border-red-500' : 'border-gray-300'
              } rounded-md py-1.5 px-3.5 w-full`}
            />
            {errors.state && (
              <p className='text-red-500 text-xs mt-1'>{errors.state}</p>
            )}
          </div>
        </div>
        <div className='flex gap-3'>
          <div className='w-full'>
            <input
              type='text'
              name='zipCode'
              value={formData.zipCode}
              onChange={handleChange}
              placeholder='Zip Code'
              className={`border ${
                errors.zipCode ? 'border-red-500' : 'border-gray-300'
              } rounded-md py-1.5 px-3.5 w-full`}
            />
            {errors.zipCode && (
              <p className='text-red-500 text-xs mt-1'>{errors.zipCode}</p>
            )}
          </div>
          <div className='w-full'>
            <input
              type='text'
              name='country'
              value={formData.country}
              onChange={handleChange}
              placeholder='Country'
              className={`border ${
                errors.country ? 'border-red-500' : 'border-gray-300'
              } rounded-md py-1.5 px-3.5 w-full`}
            />
            {errors.country && (
              <p className='text-red-500 text-xs mt-1'>{errors.country}</p>
            )}
          </div>
        </div>
        <div className='w-full'>
          <input
            type='tel'
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder='Your phone number'
            className={`border ${
              errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
            } rounded-md py-1.5 px-3.5 w-full`}
          />
          {errors.phoneNumber && (
            <p className='text-red-500 text-xs mt-1'>{errors.phoneNumber}</p>
          )}
        </div>
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
              className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  paymentMethod === method.stripe ? 'bg-green-500' : ''
                }`}></p>
              <FaStripe className='text-[55px] text-blue-700' />
            </div>
            <div
              onClick={() => setPaymentMethod(method.paypal)}
              className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  paymentMethod === method.paypal ? 'bg-green-500' : ''
                }`}></p>
              <FaCcPaypal className='text-[55px] text-blue-700' />
            </div>
            <div
              onClick={() => setPaymentMethod(method.cashOnDelivery)}
              className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  paymentMethod === method.cashOnDelivery ? 'bg-green-500' : ''
                }`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>
                CASH ON DELIVERY
              </p>
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button
              type='submit'
              className='bg-red-900 hover:bg-red-700 text-gray-50 px-16 py-3 text-sm'>
              PLACE ORDER
            </button>
          </div>
        </div>
      </section>
    </form>
  );
};

export default PlaceOrder;
