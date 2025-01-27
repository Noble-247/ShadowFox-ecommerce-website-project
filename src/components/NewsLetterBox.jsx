import { motion } from "framer-motion";
import { toast } from "react-toastify";

function handleSubmit(event) {
  event.preventDefault();
  toast.info("This feature will be enabled soon. stay tuned 😊!");
}

const NewsLetterBox = () => {
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
          className='w-full md:w-[65%] flex items-center gap-3 mx-auto my-6 border pl-3'
        >
          <input
            type='email'
            placeholder='Enter your email address'
            className='w-full sm:flex-1 outline-none'
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
            required
          />
          <button className='bg-red-900 text-white rounded-sm hover:text-gray-100 hover:bg-red-700 transition-all text-sm px-8 py-3'>
            SUBSCRIBE!
          </button>
        </form>
      </section>
    </motion.div>
  );
};

export default NewsLetterBox;
