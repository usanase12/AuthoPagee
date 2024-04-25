import React, { useState } from 'react';

function Reset() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validation
    const errors = {};
    // Validate required fields
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    setErrors(errors);
    // Submit form if no errors
    if (Object.keys(errors).length === 0) {
      // Place your form submission logic here
      console.log('Form submitted:', { email });
    }
  };

  const handleForgotPassword = () => {
    // Handle forgot password functionality (e.g., send reset password link via email)
    console.log('Forgot Password clicked');
  };

  return (
    
      <div className="mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-lg">
          <form onSubmit={handleSubmit} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-yellow-200">
            <p className="text-center text-lg font-medium text-red-400">Forgot Password</p>

            {/* Email input */}
            <div>
              <label htmlFor="email" className="sr-only text-pink-500">Email</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className={`w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm bg-pink-200 ${errors.email ? 'border-red-500' : ''}`}
                placeholder="Email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-blue-300 px-5 py-3 text-sm font-medium text-blue-600"
            >
              Reset Password
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Remember your password? <a className="text-red-400" href="#">Sign In</a>
            </p>
          </form>
        </div>
      </div>
   
  );
}

export default Reset;
