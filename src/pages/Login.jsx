import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Create Account"); // Sign In or Create Account

  function handleSubmit(event) {
    event.preventDefault();
    toast.info("This feature will be enabled soon. stay tuned 😊!");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'
    >
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === "Sign In" ? (
        ""
      ) : (
        <input
          type='text'
          name='name'
          placeholder='Your name'
          pattern='[A-Za-z]{2,}'
          required
          className='border border-gray-800 rounded-md py-2 px-3.5 w-full'
        />
      )}
      <input
        type='email'
        name='email'
        placeholder='Your email'
        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
        required
        className='border border-gray-800 rounded-md py-2 px-3.5 w-full'
      />
      <input
        type='password'
        name='password'
        placeholder='Your password'
        required
        className='border border-gray-800 rounded-md py-2 px-3.5 w-full'
      />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your password?</p>
        {currentState === "Sign In" ? (
          <p
            onClick={() => setCurrentState("Create Account")}
            className='cursor-pointer'
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Sign In")}
            className='cursor-pointer'
          >
            Sign In Here
          </p>
        )}
      </div>
      <button
        type='submit'
        className='bg-red-900 hover:bg-red-700 text-gray-50 rounded-md font-light px-8 py-2 mt-4'
      >
        {currentState === "Sign In" ? "Sign In" : "Create Account"}
      </button>
    </form>
  );
};

export default Login;
