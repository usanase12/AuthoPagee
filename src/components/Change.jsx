import React, { useState } from 'react';

function Change() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
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
    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (!confirmPassword.trim()) {
      errors.confirmPassword = 'Confirm password is required';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    setErrors(errors);
    // Submit form if no errors
    if (Object.keys(errors).length === 0) {
      // Place your password change logic here
      console.log('Form submitted:', { email, password });
    }
  };

  const handleForgotPassword = () => {
    // Handle forgot password functionality (e.g., send reset password link via email)
    console.log('Forgot Password clicked');
  };

  return (

      <div className="mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-md"> {/* Adjusted max-w-lg to max-w-md */}
          <form onSubmit={handleSubmit} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-yellow-200">
            <p className="text-center text-lg font-medium text-red-400">Change Password</p>

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

            {/* Password input */}
            <div>
              <label htmlFor="password" className="sr-only text-pink-500">Password</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className={`w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm bg-pink-200 ${errors.password ? 'border-red-500' : ''}`}
                placeholder="Password"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password input */}
            <div>
              <label htmlFor="confirmPassword" className="sr-only text-pink-500">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className={`w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm bg-pink-200 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-blue-300 px-5 py-3 text-sm font-medium text-blue-600"
            >
              Change Password
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              don't need to change the passoword? <a className="text-red-400" href="#">Sign In</a>
            </p>
          </form>
        </div>
      </div>
    
  );
}

export default Change;
