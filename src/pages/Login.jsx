import { useState } from 'react';
import { toast } from 'react-toastify';
import useTitle from '../customHooks/useTitle';

const Login = () => {
  useTitle('Login or Signup | Xumia');

  const [currentState, setCurrentState] = useState('Create Account'); // Sign In or Create Account

  function handleSubmit(event) {
    event.preventDefault();
    toast.info('This feature will be enabled soon. stay tuned 😊!');
  }

  function handleClick() {
    toast.info('This feature will be enabled soon. stay tuned 😊!');
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-red-500 via-red-700 to-red-900 text-gray-50'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center w-[90%] sm:max-w-md bg-white text-gray-800 rounded-lg shadow-lg p-6 sm:p-8'>
        <div className='inline-flex items-center gap-2 mb-4 mt-6'>
          <p className='prata-regular text-3xl font-semibold text-gray-900'>
            {currentState}
          </p>
          <hr className='border-none h-[2px] w-10 bg-gray-900' />
        </div>
        {currentState === 'Sign In' ? (
          ''
        ) : (
          <input
            type='text'
            name='name'
            placeholder='Your name'
            pattern='[A-Za-z]{2,}'
            required
            className='border border-gray-300 rounded-md py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-red-500 transition-all'
          />
        )}
        <input
          type='email'
          name='email'
          placeholder='Your email'
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
          required
          className='border border-gray-300 rounded-md py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-red-500 transition-all mt-4'
        />
        <input
          type='password'
          name='password'
          placeholder='Your password'
          required
          className='border border-gray-300 rounded-md py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-red-500 transition-all mt-4'
        />
        <div className='w-full flex justify-between text-sm mt-2 text-gray-600'>
          <p onClick={handleClick} className='cursor-pointer hover:underline'>
            Forgot your password?
          </p>
          {currentState === 'Sign In' ? (
            <p
              onClick={() => setCurrentState('Create Account')}
              className='cursor-pointer hover:underline'>
              Create Account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState('Sign In')}
              className='cursor-pointer hover:underline'>
              Sign In Here
            </p>
          )}
        </div>
        <button
          type='submit'
          className='bg-red-700 hover:bg-red-600 text-white rounded-md font-medium px-8 py-3 mt-6 w-full transition-all'>
          {currentState === 'Sign In' ? 'Sign In' : 'Create Account'}
        </button>
      </form>
    </div>
  );
};

export default Login;
