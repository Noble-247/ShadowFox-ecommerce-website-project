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
          className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center'>
          <div className='bg-white p-6 rounded-lg shadow-xl w-[80%] max-w-md'>
            <h2 className='text-xl font-bold mb-4'>Under Construction</h2>
            <p className='mb-6'>
              This website is currently under construction and will be fully
              ready for use soon. Thank you for your patience!
            </p>
            <button
              onClick={handleCloseModal}
              className='bg-red-900 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors'>
              Close
            </button>
          </div>
        </div>
      )}
      <main>
        <Hero />
        <LatestCollection />
        <BestSeller />
        <OurPolicy />
        <NewsLetterBox />
      </main>
    </>
  );
};

export default Home;
