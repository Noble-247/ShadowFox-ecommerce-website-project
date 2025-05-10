import { useEffect, useState } from 'react';
import useTitle from '../customHooks/useTitle';
import BestSeller from '../components/BestSeller';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import OurPolicy from '../components/OurPolicy';
import NewsLetterBox from '../components/NewsLetterBox';

const Home = () => {
  useTitle('Home | Xumia');

  const [showModal, setShowModal] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  const handleOutsideModalClick = (event) => {
    if (event.target.classList.contains('fixed')) {
      setShowModal(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  useEffect(() => {
    if (pageLoaded) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 2000); // Shows modal after 2 seconds

      return () => clearTimeout(timer);
    }
  }, [pageLoaded]);

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : 'auto'; // Disable scrolling when modal is open
    return () => {
      document.body.style.overflow = 'auto'; // Enable scrolling when modal is closed or component is unmounted
    };
  }, [showModal]);

  return (
    <>
      {showModal && (
        <div
          onClick={handleOutsideModalClick}
          className='fixed inset-0 bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-sm z-50 flex items-center justify-center transition-all duration-300 ease-in-out'>
          <div className='bg-white p-8 rounded-xl shadow-2xl w-[90%] max-w-md transform scale-100 transition-transform duration-300 ease-out'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800 border-b pb-2'>
              Under Construction
            </h2>
            <p className='mb-6 text-gray-600 leading-relaxed'>
              This website is currently under construction and will be fully
              ready for use soon. Thank you for your patience!
            </p>
            <button
              onClick={handleCloseModal}
              className='w-full bg-red-900 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 font-medium'>
              Close
            </button>
          </div>
        </div>
      )}
      <main className='min-h-screen'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <Hero />
          <div className='space-y-16 py-12'>
            <LatestCollection />
            <BestSeller />
            <OurPolicy />
            <NewsLetterBox />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
