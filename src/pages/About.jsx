import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <section>
      <header className='text-2xl text-center pt-16 border-t'>
        <Title titleOne={"ABOUT"} titleTwo={"US"} />
      </header>

      <article className='my-10 flex flex-col md:flex-row gap-16'>
        <img
          src={assets.about_img}
          alt='About Image'
          className='w-full md:max-w-[450px]'
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Welcome to Xumia E-commerce, where passion meets innovation in the
            digital marketplace. We&apos;ve dedicated ourselves to creating an
            exceptional online shopping experience that combines cutting-edge
            technology with personalized service. Our commitment to excellence
            drives us to constantly evolve and adapt to the ever-changing needs
            of our valued customers.
          </p>

          <p>
            Building on years of expertise in e-commerce solutions, we take
            pride in offering a carefully curated selection of products that
            meet the highest standards of quality. Our team works tirelessly to
            ensure seamless transactions, reliable delivery, and outstanding
            customer support, making your shopping journey with us both
            enjoyable and trustworthy.
          </p>
          <h2 className='text-gray-800'>
            <strong>Our Mission</strong>
          </h2>
          <p>
            Our mission at Xumia is to empower consumers by providing a
            seamless, secure, and sustainable shopping platform that connects
            quality products with discerning buyers. We strive to revolutionize
            the e-commerce landscape through innovative technology, exceptional
            service, and a commitment to environmental responsibility, while
            fostering a community of satisfied customers and trusted sellers.
          </p>
        </div>
      </article>

      <header className='text-2xl py-4'>
        <Title titleOne={"WHY"} titleTwo={"CHOOSE US"} />
      </header>

      <article className='flex flex-col md:flex-row text-sm mb-20 gap-2'>
        <div className='border px-8 md:px-10 py-4 sm:py-8 flex flex-col gap-5'>
          <h2>
            <strong>Quality Assurance:</strong>
          </h2>
          <p className='text-gray-600'>
            We maintain rigorous quality control standards for all products in
            our marketplace. Every item undergoes thorough inspection and
            verification before being listed, ensuring that you receive only
            authentic, high-quality merchandise that meets or exceeds industry
            standards. Our dedicated quality assurance team works tirelessly to
            uphold these standards, giving you peace of mind with every
            purchase.
          </p>
        </div>
        <div className='border px-8 md:px-10 py-4 sm:py-8 flex flex-col gap-5'>
          <h2>
            <strong>Convenience:</strong>
          </h2>
          <p className='text-gray-600'>
            Experience shopping at your fingertips with our intuitive platform
            designed for maximum convenience. Our user-friendly interface, smart
            search functionality, and streamlined checkout process make finding
            and purchasing products effortless. We offer flexible payment
            options, real-time order tracking, and personalized recommendations
            to save you time and enhance your shopping experience. With 24/7
            accessibility from any device, shopping has never been more
            convenient.
          </p>
        </div>
        <div className='border px-8 md:px-10 py-4 sm:py-8 flex flex-col gap-5'>
          <h2>
            <strong>Exceptional Customer Service:</strong>
          </h2>
          <p className='text-gray-600'>
            Our dedicated support team is available around the clock to assist
            you with any questions or concerns. We pride ourselves on prompt,
            personalized responses and proactive problem-solving. From
            pre-purchase inquiries to post-sale support, we ensure every
            interaction reflects our commitment to your satisfaction. Our
            multilingual customer service representatives are trained to handle
            diverse needs, making sure you feel valued and supported throughout
            your shopping journey.
          </p>
        </div>
      </article>

      <NewsLetterBox />
    </section>
  );
};

export default About;
