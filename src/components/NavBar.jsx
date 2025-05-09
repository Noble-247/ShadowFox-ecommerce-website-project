import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import BackToTop from './BackToTop';
import { useState } from 'react';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <motion.div
      initial='hidden'
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}>
      <footer className='relative mt-20'>
        {/* Gradient border top */}
        <div className='h-1 bg-gradient-to-r from-red-900 via-red-700 to-red-900'></div>

        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 px-6 py-20'>
          {/* Company Info */}
          <article className='lg:col-span-2'>
            <div className='flex items-center gap-2 mb-5'>
              <img src={assets.logo1} alt='Website Logo' className='w-[65px]' />
              <span className='hidden sm:block text-2xl font-bold text-red-900'>
                Xumia
              </span>
            </div>
            <p className='text-gray-600 mb-6'>
              Welcome to our e-commerce website. We offer a wide range of
              products to cater to all your needs. Our mission is to provide
              quality products at affordable prices. Thank you for shopping with
              us!
            </p>
            {/* Social Media Links */}
            <div className='flex gap-4'>
              <a
                href='#'
                className='text-gray-600 hover:text-red-900 transition-colors duration-300'>
                <FaFacebook size={24} />
              </a>
              <a
                href='#'
                className='text-gray-600 hover:text-red-900 transition-colors duration-300'>
                <FaTwitter size={24} />
              </a>
              <a
                href='#'
                className='text-gray-600 hover:text-red-900 transition-colors duration-300'>
                <FaInstagram size={24} />
              </a>
              <a
                href='#'
                className='text-gray-600 hover:text-red-900 transition-colors duration-300'>
                <FaLinkedin size={24} />
              </a>
            </div>
          </article>

          {/* Company Links */}
          <article>
            <h3 className='text-xl font-bold mb-6 text-red-900 relative inline-block'>
              COMPANY
              <span className='absolute bottom-0 left-0 w-1/2 h-0.5 bg-red-900'></span>
            </h3>
            <ul className='flex flex-col gap-3 text-gray-600'>
              <li>
                <Link to={'/'} className='hover:underline hover:text-red-900'>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={'/about'}
                  className='hover:underline hover:text-red-900'>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={'/delivery'}
                  className='hover:underline hover:text-red-900'>
                  Delivery
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setIsPrivacyModalOpen(true)}
                  className='hover:underline hover:text-red-900'>
                  Privacy Policy
                </button>
              </li>
            </ul>
          </article>

          {/* Contact Info */}
          <article>
            <h3 className='text-xl font-bold mb-6 text-red-900 relative inline-block'>
              CONTACT
              <span className='absolute bottom-0 left-0 w-1/2 h-0.5 bg-red-900'></span>
            </h3>
            <ul className='flex flex-col gap-3 text-gray-600'>
              <li>
                <a
                  href='mailto:info@example.com'
                  className='hover:underline hover:text-red-900'>
                  info@xumia.com
                </a>
              </li>
              <li>
                <a
                  href='tel:+1234567890'
                  className='hover:underline hover:text-red-900'>
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </article>
        </section>

        {/* Copyright */}
        <div className='py-6 text-sm text-center border-t border-gray-200 bg-gray-50'>
          <p className='text-gray-600'>
            &copy; {new Date().getFullYear()} Xumia. All rights reserved.
          </p>
        </div>
        <BackToTop />
      </footer>
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </motion.div>
  );
};

export default Footer;
