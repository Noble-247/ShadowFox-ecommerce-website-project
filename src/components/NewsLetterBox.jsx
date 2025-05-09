import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import PrivacyPolicyModal from './PrivacyPolicyModal';

const NewsLetterBox = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

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
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}>
      <section className='relative overflow-hidden bg-gradient-to-br from-red-50 to-white px-4 sm:px-6 lg:px-8 py-16 sm:py-24'>
        <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-900 via-red-700 to-red-900'></div>
        <motion.div
          className='max-w-3xl mx-auto text-center'
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}>
          <div className='inline-flex gap-2 items-center mb-3 text-2xl sm:text-3xl font-bold'>
            <p className='text-gray-500'>
              JOIN OUR{' '}
              <span className='text-gray-700 font-medium'>NEWSLETTER</span>
            </p>
            <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
          </div>
          {/* <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
            Join Our Newsletter
          </h2> */}

          <p className='text-lg sm:text-xl text-gray-600 mb-8'>
            Subscribe now and get{' '}
            <span className='text-red-900 font-semibold'>20% off</span> your
            first purchase! Stay updated with our latest offers.
          </p>
          <form onSubmit={handleSubmit} className='relative max-w-xl mx-auto'>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-0'>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email address'
                className='flex-1 px-6 py-4 rounded-full sm:rounded-r-none border-2 border-gray-200 focus:border-red-900 outline-none text-gray-700 text-lg transition-all duration-300'
              />
              <motion.button
                type='submit'
                className='bg-red-900 text-white px-8 py-4 rounded-full sm:rounded-l-none font-medium text-lg flex items-center justify-center gap-2 hover:bg-red-800 transition-colors duration-300'
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}>
                Subscribe
                <motion.span
                  animate={{
                    x: isHovered ? 5 : 0,
                    rotate: isHovered ? 45 : 0,
                  }}
                  transition={{ duration: 0.2 }}>
                  <FaPaperPlane />
                </motion.span>
              </motion.button>
            </div>
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='absolute -bottom-6 left-0 right-0 text-red-500 text-sm mt-2'>
                {error}
              </motion.p>
            )}
          </form>
          <p className='mt-12 text-sm text-gray-500'>
            By subscribing, you agree to our{' '}
            <button
              onClick={() => setIsPrivacyModalOpen(true)}
              className='text-red-900 hover:underline'>
              Privacy Policy
            </button>{' '}
            and consent to receive updates from us.
          </p>
        </motion.div>
      </section>
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </motion.div>
  );
};

export default NewsLetterBox;
