import React, { useState } from 'react';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState({});

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
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
    if (!fullName.trim()) {
      errors.fullName = 'Full name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    }
    if (!gender.trim()) {
      errors.gender = 'Gender is required';
    }
    if (!address.trim()) {
      errors.address = 'Address is required';
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
      // Place your form submission logic here
      console.log('Form submitted:', { fullName, email, phoneNumber, gender, address, password });
    }
  };

  return (
    <div className="bg-green-300 border-red-500 max-w-md mx-auto">
      <div className="mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-lg">
          <p className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl mt-8"></p>

          <form onSubmit={handleSubmit} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-yellow-200">
            <p className="text-center text-lg font-medium text-red-400">Sign Up</p>

            {/* Full Name input */}
            <div>
              <label htmlFor="fullName" className="sr-only text-pink-500">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={handleFullNameChange}
                className={`w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm bg-pink-200 ${errors.fullName ? 'border-red-500' : ''}`}
                placeholder="Full Name"
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

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

            {/* Phone Number input */}
            <div>
              <label htmlFor="phoneNumber" className="sr-only text-pink-500">Phone Number</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className={`w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm bg-pink-200 ${errors.phoneNumber ? 'border-red-500' : ''}`}
                placeholder="Phone Number"
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
            </div>

            {/* Gender input */}
            <div>
              <label htmlFor="gender" className="sr-only text-pink-500">Gender</label>
              <select
                value={gender}
                onChange={handleGenderChange}
                className={`w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm bg-pink-200 ${errors.gender ? 'border-red-500' : ''}`}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
            </div>

            {/* Address input */}
            <div>
              <label htmlFor="address" className="sr-only text-pink-500">Address</label>
              <textarea
                value={address}
                onChange={handleAddressChange}
                className={`w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm bg-pink-200 ${errors.address ? 'border-red-500' : ''}`}
                placeholder="Address"
              ></textarea>
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
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
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
