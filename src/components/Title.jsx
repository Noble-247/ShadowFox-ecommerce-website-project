import PropTypes from 'prop-types';

const Title = ({ titleOne, titleTwo, className = '' }) => {
  return (
    <div className={`group inline-flex items-center gap-3 mb-3 ${className}`}>
      <div className='relative'>
        <p className='text-gray-500 text-lg sm:text-xl md:text-2xl transition-all duration-300 group-hover:text-gray-700'>
          {titleOne}{' '}
          <span className='text-gray-800 font-semibold relative after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[3px] after:bg-gray-800 after:transition-all after:duration-300 group-hover:after:w-full'>
            {titleTwo}
          </span>
        </p>
      </div>
      <div className='flex items-center gap-2'>
        <span className='w-4 h-[3px] bg-gray-700 transform origin-left transition-all duration-300 group-hover:scale-x-150'></span>
        <span className='w-12 sm:w-16 h-[3px] bg-gray-700 transform origin-left transition-all duration-300 group-hover:scale-x-110'></span>
      </div>
    </div>
  );
};

Title.propTypes = {
  titleOne: PropTypes.string.isRequired,
  titleTwo: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Title;
