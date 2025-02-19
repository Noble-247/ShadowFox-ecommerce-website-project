import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import BackToTop from "./BackToTop";

const Footer = () => {
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
      <footer>
        <section className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-20 mt-40 text-base'>
          <article>
            <img src={assets.logo1} alt='Website Logo' className='mb-5 w-32' />
            <p className='w-full md:w-2/3 text-gray-600'>
              Welcome to our e-commerce website. We offer a wide range of
              products to cater to all your needs. Our mission is to provide
              quality products at affordable prices. Thank you for shopping with
              us!
            </p>
          </article>

          <article>
            <p className='text-xl font-bold mb-5 text-red-900'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
              <li>
                <Link to={"/"} className='hover:underline hover:text-red-900'>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className='hover:underline hover:text-red-900'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={"/delivery"}
                  className='hover:underline hover:text-red-900'
                >
                  Delivery
                </Link>
              </li>
              <li>
                <Link
                  to={"/privacy-policy"}
                  className='hover:underline hover:text-red-900'
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </article>
          <article>
            <p className='text-xl font-bold mb-5 text-red-900'>CONTACT</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
              <li>
                <a
                  href='mailto:info@example.com'
                  className='hover:underline hover:text-red-900'
                >
                  info@xumia.com
                </a>
              </li>
              <li>
                <a
                  href='tel:+1234567890'
                  className='hover:underline hover:text-red-900'
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </article>
        </section>
        <hr />
        <div className='py-5 text-sm text-center'>
          <p> &copy; {new Date().getFullYear()} Xumia. All rights reserved.</p>
        </div>
        <BackToTop />
      </footer>
    </motion.div>
  );
};

export default Footer;
