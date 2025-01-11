import PropTypes from "prop-types";

const Title = ({ titleOne, titleTwo }) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      <p className='text-gray-500'>
        {titleOne} <span className='text-gray-700 font-medium'>{titleTwo}</span>
      </p>
      <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
    </div>
  );
};

Title.propTypes = {
  titleOne: PropTypes.string.isRequired,
  titleTwo: PropTypes.string.isRequired,
};

export default Title;
