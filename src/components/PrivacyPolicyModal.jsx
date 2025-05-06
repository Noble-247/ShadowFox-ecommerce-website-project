import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4'>
      <div className='relative bg-white w-full max-w-4xl rounded-lg shadow-xl max-h-[90vh] overflow-y-auto'>
        {/* Hero Section */}
        <div className='bg-red-900 text-white p-8 relative'>
          <h1 className='text-4xl font-bold mb-4'>Privacy Policy</h1>
          <p className='text-lg'>Your privacy is important to us</p>
          <button
            onClick={onClose}
            className='absolute top-4 right-4 text-white hover:text-gray-200'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>

        <div className='p-8'>
          {/* Rest of the content from PrivatePolicy.jsx */}
          <div className='bg-gray-100 text-gray-800 p-8'>
            <div className='max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md'>
              <h1 className='text-3xl font-bold mb-4 text-red-900'>
                Privacy Policy
              </h1>
              <p className='mb-4'>
                Welcome to our Privacy Policy page! When you use our web site
                services, you trust us with your information. This Privacy
                Policy is meant to help you understand what data we collect, why
                we collect it, and what we do with it. This is important; we
                hope you will take time to read it carefully.
              </p>
              <h2 className='text-2xl font-semibold mb-2 text-red-900'>
                Information We Collect
              </h2>
              <p className='mb-4'>
                We collect information to provide better services to all our
                users. We collect information in the following ways:
              </p>
              <ul className='list-disc list-inside mb-4'>
                <li>
                  Information you give us. For example, our services require you
                  to sign up for an account. When you do, we’ll ask for personal
                  information, like your name, email address, telephone number
                  or credit card.
                </li>
                <li>
                  Information we get from your use of our services. We collect
                  information about the services that you use and how you use
                  them, like when you visit a website that uses our advertising
                  services or you view and interact with our ads and content.
                </li>
              </ul>
              <h2 className='text-2xl font-semibold mb-2 text-red-900'>
                How We Use Information We Collect
              </h2>
              <p className='mb-4'>
                We use the information we collect from all of our services to
                provide, maintain, protect and improve them, to develop new
                ones, and to protect our users. We also use this information to
                offer you tailored content – like giving you more relevant
                search results and ads.
              </p>
              <h2 className='text-2xl font-semibold mb-2 text-red-900'>
                Transparency and Choice
              </h2>
              <p className='mb-4'>
                People have different privacy concerns. Our goal is to be clear
                about what information we collect, so that you can make
                meaningful choices about how it is used.
              </p>
              <h2 className='text-2xl font-semibold mb-2 text-red-900'>
                Information You Share
              </h2>
              <p className='mb-4'>
                Many of our services let you share information with others.
                Remember that when you share information publicly, it may be
                indexable by search engines.
              </p>
              <h2 className='text-2xl font-semibold mb-2 text-red-900'>
                Accessing and Updating Your Personal Information
              </h2>
              <p className='mb-4'>
                Whenever you use our services, we aim to provide you with access
                to your personal information. If that information is wrong, we
                strive to give you ways to update it quickly or to delete it –
                unless we have to keep that information for legitimate business
                or legal purposes.
              </p>
              <h2 className='text-2xl font-semibold mb-2 text-red-900'>
                Information We Share
              </h2>
              <p className='mb-4'>
                We do not share personal information with companies,
                organizations and individuals outside of our company unless one
                of the following circumstances applies:
              </p>
              <ul className='list-disc list-inside mb-4'>
                <li>With your consent</li>
                <li>For external processing</li>
                <li>For legal reasons</li>
              </ul>
              <h2 className='text-2xl font-semibold mb-2 text-red-900'>
                Compliance and Cooperation with Regulatory Authorities
              </h2>
              <p className='mb-4'>
                We regularly review our compliance with our Privacy Policy. We
                also adhere to several self-regulatory frameworks.
              </p>
              <h2 className='text-2xl font-semibold mb-2 text-red-900'>
                Changes
              </h2>
              <p className='mb-4'>
                Our Privacy Policy may change from time to time. We will not
                reduce your rights under this Privacy Policy without your
                explicit consent. We will post any privacy policy changes on
                this page and, if the changes are significant, we will provide a
                more prominent notice.
              </p>
            </div>
          </div>
          {/* ...existing content from PrivatePolicy.jsx... */}
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicyModal;

PrivacyPolicyModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
