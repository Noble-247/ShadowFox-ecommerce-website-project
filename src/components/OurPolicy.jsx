import { BiSupport } from "react-icons/bi";
import { AiOutlineTransaction } from "react-icons/ai";
import { PiSealCheckBold } from "react-icons/pi";

const OurPolicy = () => {
  return (
    <section className='flex flex-col md:flex-row justify-around gap-12 sm:gap-2 text-center my-20 py-10 text-sm md:text-base text-gray-700'>
      <article>
        <AiOutlineTransaction className='text-5xl m-auto mb-5 text-red-900 hover:text-red-700 font-extrabold' />
        <p className='font-semibold'> Easy Exchange Policy </p>
        <small className='text-gray-500'>
          We offer a hassle-free exchange policy within 30 days of purchase.
        </small>
      </article>
      <article>
        <PiSealCheckBold className='text-5xl m-auto mb-5 text-red-900 hover:text-red-700 font-extrabold' />
        <p className='font-semibold'>7 Days Return Policy </p>
        <small className='text-gray-500'>
          We offer a 7-day return policy for items that are damaged or not as
          described.
        </small>
      </article>
      <article>
        <BiSupport className='text-5xl m-auto mb-5 text-red-900 hover:text-red-700 font-extrabold' />
        <p className='font-semibold'>Best Customer Support</p>
        <small className='text-gray-500'>
          Our customer support team is available 24/7 to help you with any
          queries.
        </small>
      </article>
    </section>
  );
};

export default OurPolicy;
