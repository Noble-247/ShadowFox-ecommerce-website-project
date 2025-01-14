import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <section className='flex flex-col md:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <article>
        <img
          src={assets.exchange_icon}
          alt='Exchange Icon'
          className='w-12 m-auto mb-5'
        />
        <p className='font-semibold'> Easy Exchange Policy </p>
        <small className='text-gray-400'>
          We offer a hassle-free exchange policy within 30 days of purchase.{" "}
          <br />
          Items must be in original condition with tags attached.
        </small>
      </article>
      <article>
        <img
          src={assets.quality_icon}
          alt='Quality Icon'
          className='w-12 m-auto mb-5'
        />
        <p className='font-semibold'>7 Days Return Policy </p>
        <small className='text-gray-400'>
          We offer a 7-day return policy for items that are damaged or not as
          described.
        </small>
      </article>
      <article>
        <img
          src={assets.support_img}
          alt='Support Icon'
          className='w-12 m-auto mb-5'
        />
        <p className='font-semibold'>Best Customer Support</p>
        <small className='text-gray-400'>
          Our customer support team is available 24/7 to help you with any
          queries.
        </small>
      </article>
    </section>
  );
};

export default OurPolicy;
