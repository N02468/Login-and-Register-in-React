import React from 'react';

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"> 
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="button"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Register
        </button>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:underline">
              Login
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

export default Register;
