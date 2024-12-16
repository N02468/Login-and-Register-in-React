import React from 'react';

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="form2Example1" className="block text-sm font-medium text-gray-700 mb-2">
            Email address
          </label>
          <input
            type="email"
            id="form2Example1"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="form2Example2" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            id="form2Example2"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="form2Example31"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="form2Example31" className="ml-2 text-sm text-gray-600">
              Remember me
            </label>
          </div>
          <a href="#!" className="text-sm text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>

        <button
          type="button"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Sign in
        </button>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Not a member?{' '}
            <a href="/register" className="text-blue-600 hover:underline">
              Register
            </a>
          </p>
          <p className="text-sm text-gray-600 mt-2">or sign up with:</p>
          <div className="flex justify-center space-x-3 mt-2">
            <button
              type="button"
              className="text-blue-600 hover:text-blue-700 focus:outline-none"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </button>
            <button
              type="button"
              className="text-blue-600 hover:text-blue-700 focus:outline-none"
            >
              <ion-icon name="logo-google"></ion-icon>
            </button>
            <button
              type="button"
              className="text-blue-600 hover:text-blue-700 focus:outline-none"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </button>
            <button
              type="button"
              className="text-blue-600 hover:text-blue-700 focus:outline-none"
            >
              <ion-icon name="logo-github"></ion-icon>
            </button>
            
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
