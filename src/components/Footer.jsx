import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer>
      <section className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-20 mt-40 text-sm'>
        <article>
          <img src={assets.logo} alt='Website Logo' className='mb-5 w-32' />
          <p className='w-full md:w-2/3 text-gray-600'>
            Welcome to our e-commerce website. We offer a wide range of products
            to cater to all your needs. Our mission is to provide quality
            products at affordable prices. Thank you for shopping with us!
          </p>
        </article>

        <article>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About Us</Link>
            </li>
            <li>
              <Link to={"/delivery"}>Delivery</Link>
            </li>
            <li>
              <Link to={"/privacy-policy"}>Privacy Policy</Link>
            </li>
          </ul>
        </article>
        <article>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>
              <a href='mailto:info@example.com'>info@example.com</a>
            </li>
            <li>
              <a href='tel:+1234567890'>+1 (234) 567-890</a>
            </li>
          </ul>
        </article>
      </section>
      <hr />
      <div className='py-5 text-sm text-center'>
        <p> &copy; {new Date().getFullYear()} Xumia. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
