import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validation
    const errors = {};
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
    setErrors(errors);
    // Submit form if no errors
    if (Object.keys(errors).length === 0) {
      // Place your form submission logic here
      console.log('Form submitted:', { email, password });
    }
  };

  return (
    
      <div className="mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-lg mt-10 mb-11">
         
        <h1 className="text-center text-2xl text-blue-400 sm:text-2xl mt-8">LOGO HERE</h1>

          <form onSubmit={handleSubmit} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-yellow-200">
            <p className="text-center text-lg font-medium text-red-400">Sign In </p>

            <div>
              <label htmlFor="email" className="sr-only text-pink-500">Email</label>

              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  className={`w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm bg-pink-200 ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="Email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only text-pink-500">Password</label>

              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className={`w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm bg-pink-200 ${errors.password ? 'border-red-500' : ''}`}
                  placeholder="Password"
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-blue-300 px-5 py-3 text-sm font-medium text-blue-600"
            >
              Sign in
            </button>
        
            <p className="text-center text-sm text-gray-500 ">
              No account?
              <Link className="text-red-400" to="/signup" >SingUp</Link>
            </p>
            <p className="text-center text-sm text-gray-500">
            forgot password?
              <Link to="/reset"className="text-red-400">Reset</Link>
            </p>
            <p className="text-center text-sm text-gray-500">
              change password
              <Link to ="/Change"className="text-red-400">Change</Link>
            </p>
          </form>
        </div>
      </div>
    
  );
}

export default Login;
