import Title from "../components/Title";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";
import NewsLetterBox from "../components/NewsLetterBox";

function handleClick(event) {
  event.preventDefault();
  toast.info("This feature will be enabled soon. stay tuned 😊!");
}

const Contact = () => {
  return (
    <section>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title titleOne={"CONTACT"} titleTwo={"US"} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img
          src={assets.contact_img}
          alt='Contact Image'
          className='w-full md:max-w-[480px]'
        />
        <article className='flex flex-col justify-center items-start gap-6'>
          <h2 className='font-semibold text-xl text-gray-600'>Our Store</h2>
          <address className='not-italic text-gray-600'>
            123 Herbert Macaulay Way
            <br />
            Yaba, Lagos
            <br />
            Nigeria
            <br />
            <br />
            <a
              href='tel:+1234567890'
              className='hover:underline hover:text-red-900'
            >
              +1 (234) 567-890
            </a>
            <br />
            <a
              href='mailto:info@example.com'
              className='hover:underline hover:text-red-900'
            >
              info@xumia.com
            </a>
          </address>
          <h2 className='font-semibold text-xl text-gray-600'>
            Careers at Xumia
          </h2>
          <p className='text-gray-500'>
            Learn more about our teams and job openings
          </p>
          <button
            className='bg-red-900 text-white rounded-sm hover:text-gray-100 hover:bg-red-700 transition-all text-sm px-8 py-3'
            onClick={handleClick}
          >
            Explore Jobs
          </button>
        </article>
      </div>
      <NewsLetterBox />
    </section>
  );
};

export default Contact;
