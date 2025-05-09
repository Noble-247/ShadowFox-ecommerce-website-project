import { BiSupport } from 'react-icons/bi';
import { AiOutlineTransaction } from 'react-icons/ai';
import { PiSealCheckBold } from 'react-icons/pi';
import { motion } from 'framer-motion';

const OurPolicy = () => {
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
      <section className='grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12 lg:px-20 py-16 bg-gray-50 rounded-lg shadow-lg'>
        <article className='flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
          <AiOutlineTransaction className='text-6xl mb-4 text-red-700 hover:text-red-500 transition-colors duration-300' />
          <p className='font-bold text-lg mb-2'>Easy Exchange Policy</p>
          <span className='text-gray-600 text-center'>
            We offer a hassle-free exchange policy within 30 days of purchase.
          </span>
        </article>
        <article className='flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
          <PiSealCheckBold className='text-6xl mb-4 text-red-700 hover:text-red-500 transition-colors duration-300' />
          <p className='font-bold text-lg mb-2'>7 Days Return Policy</p>
          <span className='text-gray-600 text-center'>
            We offer a 7-day return policy for items that are damaged or not as
            described.
          </span>
        </article>
        <article className='flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
          <BiSupport className='text-6xl mb-4 text-red-700 hover:text-red-500 transition-colors duration-300' />
          <p className='font-bold text-lg mb-2'>Best Customer Support</p>
          <span className='text-gray-600 text-center'>
            Our customer support team is available 24/7 to help you with any
            queries.
          </span>
        </article>
      </section>
    </motion.div>
  );
};

export default OurPolicy;
