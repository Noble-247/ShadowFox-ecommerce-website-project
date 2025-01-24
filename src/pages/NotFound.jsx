import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className='flex items-center justify-center h-screen bg-white'>
      <div className='text-center'>
        <h1 className='text-9xl font-bold text-red-900'>404</h1>
        <p className='text-2xl font-semibold text-black mt-4'>Page Not Found</p>
        <p className='text-lg text-gray-700 mt-2'>
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to='/'
          className='mt-6 inline-block px-6 py-3 bg-red-900 text-white font-semibold rounded-md hover:bg-red-700'
        >
          Go to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
