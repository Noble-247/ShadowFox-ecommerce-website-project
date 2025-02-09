import { useState } from "react";
import useTitle from "../customHooks/useTitle";
import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import OurPolicy from "../components/OurPolicy";
import NewsLetterBox from "../components/NewsLetterBox";

const Home = () => {
  useTitle("Home | Xumia");

  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (showModal === true) {
    return (
      <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center'>
        <div className='bg-white p-6 rounded-lg shadow-xl max-w-md'>
          <h2 className='text-xl font-bold mb-4'>Under Construction</h2>
          <p className='mb-6'>
            This website is currently under construction and will be fully ready
            for use soon. Thank you for your patience!
          </p>
          <button
            onClick={handleCloseModal}
            className='bg-red-900 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors'
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <main>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
    </main>
  );
};

export default Home;
