import useTitle from '../customHooks/useTitle';
import { assets } from '../assets/assets';
import { toast } from 'react-toastify';
import NewsLetterBox from '../components/NewsLetterBox';

const Contact = () => {
  useTitle('Contact | Xumia');

  function handleClick(event) {
    event.preventDefault();
    toast.info('This feature will be enabled soon. stay tuned 😊!');
  }
  return (
    <section className='min-h-screen'>
      {/* Hero Section */}
      <div className='relative h-[40vh] bg-gradient-to-r from-red-900 to-red-700'>
        <div className='absolute inset-0 bg-black/40' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-center text-white space-y-4'>
            <h1 className='text-4xl md:text-6xl font-bold'>Contact Us</h1>
            <p className='text-lg md:text-xl'>
              We&apos;d love to hear from you
            </p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className='container mx-auto px-4 py-16'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* Contact Image */}
          <div className='relative group'>
            <img
              src={assets.contact_img}
              alt='Contact Image'
              className='w-full rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-red-900/10 rounded-lg transition-opacity group-hover:opacity-0' />
          </div>

          {/* Contact Information */}
          <div className='space-y-8'>
            <div className='bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
              <h2 className='font-bold text-2xl text-red-900 mb-6'>
                Our Store
              </h2>
              <address className='not-italic text-gray-600 space-y-2'>
                <p>123 Herbert Macaulay Way</p>
                <p>Yaba, Lagos</p>
                <p>Nigeria</p>
                <div className='pt-4 space-y-2'>
                  <a
                    href='tel:+1234567890'
                    className='block hover:text-red-900 transition-colors'>
                    <span className='font-medium'>Phone:</span> +1 (234) 567-890
                  </a>
                  <a
                    href='mailto:info@example.com'
                    className='block hover:text-red-900 transition-colors'>
                    <span className='font-medium'>Email:</span> info@xumia.com
                  </a>
                </div>
              </address>
            </div>

            <div className='bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
              <h2 className='font-bold text-2xl text-red-900 mb-4'>
                Careers at Xumia
              </h2>
              <p className='text-gray-600 mb-6'>
                Join our team and be part of something extraordinary. Learn more
                about our teams and exciting job openings.
              </p>
              <button
                className='bg-red-900 text-white rounded-md hover:bg-red-700 
                transition-all text-sm px-8 py-3 w-full md:w-auto 
                hover:shadow-lg active:transform active:scale-95'
                onClick={handleClick}>
                Explore Jobs
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-16'>
        <NewsLetterBox />
      </div>
    </section>
  );
};

export default Contact;
