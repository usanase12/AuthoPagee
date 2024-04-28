import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ConfirmationPage() {
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  // Function to handle OTP verification
  const handleVerifyOTP = () => {
    // Here you would implement the logic to verify the OTP entered by the user
    // For this example, let's just log the OTP to the console
    console.log('Entered OTP:', otp);
  };

  // Function to handle OTP resend
  const handleResendOTP = () => {
    // Here you would implement the logic to resend the OTP
    // For this example, let's just simulate OTP resend
    console.log('Resending OTP...');
    setOtpSent(true);
  };

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="mx-auto max-w-lg mt-10 mb-11">
        <h1 className="text-center text-2xl text-blue-400 sm:text-2xl mt-8">LOGO HERE</h1>

        <form onSubmit={handleVerifyOTP} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-yellow-200">
          <p className="text-center text-lg font-medium text-red-400">Confirmation Page</p>

          {otpSent ? (
            <div className="mb-4">
              <label htmlFor="otp" className="sr-only text-pink-500">Enter OTP</label>
              <div className="relative">
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className={`w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm bg-pink-200 ${otpSent && 'border-red-500'}`}
                  placeholder="Enter OTP"
                />
                {otpSent && <p className="text-red-500 text-sm mt-1">OTP is required</p>}
              </div>
            </div>
          ) : (
            <div className="mb-4">
              <button
                type="button"
                onClick={handleResendOTP}
                className="text-blue-500 hover:text-blue-700"
              >
                Resend OTP
              </button>
            </div>
          )}

          <button
            type="submit"
            className="block w-full rounded-lg bg-blue-300 px-5 py-3 text-sm font-medium text-blue-600"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
}

export default ConfirmationPage;
