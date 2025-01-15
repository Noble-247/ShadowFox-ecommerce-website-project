const NewsLetterBox = () => {
  return (
    <section className='text-center my-20'>
      <p className='text-2xl font-medium text-gray-800'>
        Subscribe now and get 20% off your first purchase
      </p>
      <p className='text-gray-400 mt-3'>
        Stay up to date on exclusive offers and new arrivals when you sign up
        for our newsletter today!
      </p>
      <form
        action='post'
        className='w-full md:w-[65%] flex items-center gap-3 mx-auto my-6 border pl-3'
      >
        <input
          type='email'
          placeholder='Enter your email address'
          className='w-full sm:flex-1 outline-none'
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
          required
        />
        <button className='bg-gray-800 text-white rounded-md hover:text-gray-800 hover:bg-white hover:border border-gray-800 transition-all text-sm px-8 py-3'>
          SUBSCRIBE!
        </button>
      </form>
    </section>
  );
};

export default NewsLetterBox;
