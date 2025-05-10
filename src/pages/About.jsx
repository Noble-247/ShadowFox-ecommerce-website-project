import useTitle from '../customHooks/useTitle';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';
import { motion } from 'framer-motion';

const About = () => {
  useTitle('About | Xumia');

  return (
    <section className='min-h-screen'>
      {/* Hero Section */}
      <div className='relative h-[40vh] bg-gradient-to-r from-red-900 to-red-700'>
        <div className='absolute inset-0 bg-black/40' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-center text-white space-y-4'>
            <h1 className='text-4xl md:text-6xl font-bold'>About us</h1>
            <p className='text-lg md:text-xl'>
              Discover the essence of Xumia E-commerce
            </p>
          </div>
        </div>
      </div>

      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className='container mx-auto px-4 py-16'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'tween' }}
            src={assets.about_img}
            alt='About Image'
            className='w-full rounded-lg shadow-xl'
          />
          <div className='space-y-8'>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className='space-y-6'>
              <p className='text-lg leading-relaxed text-gray-600'>
                Welcome to Xumia E-commerce, where passion meets innovation in
                the digital marketplace. We&apos;ve dedicated ourselves to
                creating an exceptional online shopping experience that combines
                cutting-edge technology with personalized service. Our
                commitment to excellence drives us to constantly evolve and
                adapt to the ever-changing needs of our valued customers.
              </p>
              <p className='text-lg leading-relaxed text-gray-600'>
                Building on years of expertise in e-commerce solutions, we take
                pride in offering a carefully curated selection of products that
                meet the highest standards of quality. Our team works tirelessly
                to ensure seamless transactions, reliable delivery, and
                outstanding customer support, making your shopping journey with
                us both enjoyable and trustworthy.
              </p>
              <h2 className='text-2xl font-bold text-gray-800'>Our Mission</h2>
              <p className='text-lg leading-relaxed text-gray-600'>
                Our mission at Xumia is to empower consumers by providing a
                seamless, secure, and sustainable shopping platform that
                connects quality products with discerning buyers. We strive to
                revolutionize the e-commerce landscape through innovative
                technology, exceptional service, and a commitment to
                environmental responsibility, while fostering a community of
                satisfied customers and trusted sellers.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.article>

      <section className='bg-gray-50 py-16'>
        <div className='container mx-auto px-4'>
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-12'>
            <div className='text-2xl md:text-3xl '>
              <Title titleOne={'WHY'} titleTwo={'CHOOSE US'} />
            </div>
          </motion.header>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              { title: 'Quality Assurance', icon: '🎯' },
              { title: 'Convenience', icon: '⚡' },
              { title: 'Exceptional Customer Service', icon: '💫' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className='bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
                <div className='text-4xl mb-4'>{item.icon}</div>
                <h2 className='text-xl font-bold mb-4'>{item.title}</h2>
                <p className='text-gray-600 leading-relaxed'>
                  {item.title === 'Quality Assurance' && (
                    <>
                      We maintain rigorous quality control standards for all
                      products in our marketplace. Every item undergoes thorough
                      inspection and verification before being listed, ensuring
                      that you receive only authentic, high-quality merchandise
                      that meets or exceeds industry standards. Our dedicated
                      quality assurance team works tirelessly to uphold these
                      standards, giving you peace of mind with every purchase.
                    </>
                  )}
                  {item.title === 'Convenience' && (
                    <>
                      Experience shopping at your fingertips with our intuitive
                      platform designed for maximum convenience. Our
                      user-friendly interface, smart search functionality, and
                      streamlined checkout process make finding and purchasing
                      products effortless. We offer flexible payment options,
                      real-time order tracking, and personalized recommendations
                      to save you time and enhance your shopping experience.
                      With 24/7 accessibility from any device, shopping has
                      never been more convenient.
                    </>
                  )}
                  {item.title === 'Exceptional Customer Service' && (
                    <>
                      Our dedicated support team is available around the clock
                      to assist you with any questions or concerns. We pride
                      ourselves on prompt, personalized responses and proactive
                      problem-solving. From pre-purchase inquiries to post-sale
                      support, we ensure every interaction reflects our
                      commitment to your satisfaction. Our multilingual customer
                      service representatives are trained to handle diverse
                      needs, making sure you feel valued and supported
                      throughout your shopping journey.
                    </>
                  )}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className='bg-gradient-to-b from-white to-gray-50'>
        <NewsLetterBox />
      </div>
    </section>
  );
};

export default About;
