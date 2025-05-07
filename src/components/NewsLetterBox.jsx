import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { useState } from 'react';

const NewsLetterBox = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const regex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|mil|biz|info|io|co|uk|us|ca|de|jp|fr|au|ru|ch|it|nl|se|no|es|me)$/;
    return regex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      toast.error('Please enter a valid email address');
      return;
    }
    setError('');
    toast.info('This feature will be enabled soon. stay tuned 😊!');
  };

  return (
    <motion.div
      initial='hidden'
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}>
      <section className='text-center my-20 py-10'>
        <p className='text-2xl font-medium text-gray-800'>
          Subscribe now and get 20% off your first purchase
        </p>
        <p className='text-gray-500 mt-3'>
          Stay up to date on exclusive offers and new arrivals when you sign up
          for our newsletter today!
        </p>
        <form
          onSubmit={handleSubmit}
          className='w-full md:w-[65%] flex flex-col items-center gap-3 mx-auto my-6'>
          <div className='w-full flex items-center border pl-3'>
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email address'
              className='w-full sm:flex-1 outline-none'
            />
            <button className='bg-red-900 text-white rounded-sm hover:text-gray-100 hover:bg-red-700 transition-all text-sm px-8 py-3'>
              SUBSCRIBE!
            </button>
          </div>
          {error && <span className='text-red-500 text-sm'>{error}</span>}
        </form>
      </section>
    </motion.div>
  );
};

export default NewsLetterBox;
