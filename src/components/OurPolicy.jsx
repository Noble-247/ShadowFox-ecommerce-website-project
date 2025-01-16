import { BiSupport } from "react-icons/bi";
import { AiOutlineTransaction } from "react-icons/ai";
import { PiSealCheckBold } from "react-icons/pi";
import { motion } from "framer-motion";

const OurPolicy = () => {
  return (
    <motion.div
      initial='hidden'
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <section className='flex flex-col md:flex-row justify-around gap-12 sm:gap-2 text-center my-20 py-10 text-sm md:text-base text-gray-700'>
        <article>
          <AiOutlineTransaction className='text-5xl m-auto mb-5 text-red-900 hover:text-red-700 font-extrabold' />
          <p className='font-semibold'> Easy Exchange Policy </p>
          <span className='text-gray-500'>
            We offer a hassle-free exchange policy within 30 days of purchase.
          </span>
        </article>
        <article>
          <PiSealCheckBold className='text-5xl m-auto mb-5 text-red-900 hover:text-red-700 font-extrabold' />
          <p className='font-semibold'>7 Days Return Policy </p>
          <span className='text-gray-500'>
            We offer a 7-day return policy for items that are damaged or not as
            described.
          </span>
        </article>
        <article>
          <BiSupport className='text-5xl m-auto mb-5 text-red-900 hover:text-red-700 font-extrabold' />
          <p className='font-semibold'>Best Customer Support</p>
          <span className='text-gray-500'>
            Our customer support team is available 24/7 to help you with any
            queries.
          </span>
        </article>
      </section>
    </motion.div>
  );
};

export default OurPolicy;
