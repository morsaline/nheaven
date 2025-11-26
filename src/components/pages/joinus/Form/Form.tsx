"use client";
import { useState } from "react";
// Import Next.js Image component

const FormPage = () => {
  // Declare generateCaptcha function before using it
  const generateCaptcha = (): number => {
    const code = Math.floor(1000 + Math.random() * 9000); // Generate 4-digit random code
    return code;
  };

  // Set captchaCode state initially using generateCaptcha
  const [captchaCode, setCaptchaCode] = useState(generateCaptcha());

  // Refresh the captcha code when button is clicked
  const refreshCaptcha = () => {
    setCaptchaCode(generateCaptcha());
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form className="bg-white p-8 rounded-lg  text-center space-y-3 w-full max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Interested in Joining?</h2>
        <p className="text-gray-600 text-sm mb-4">
          Are you ready to become a member, have more questions, or want to come
          check out our facility before you decide? Enter your information below
          and one of our staff will contact you!
        </p>

        <label className="block text-sm font-medium text-gray-700">
          First Name*
        </label>
        <input
          type="text"
          name="firstName"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          placeholder="Enter your first name here"
          required
        />

        <label className="block text-sm font-medium text-gray-700">
          Last Name*
        </label>
        <input
          type="text"
          name="lastName"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          placeholder="Enter your last name here"
          required
        />

        <label className="block text-sm font-medium text-gray-700">
          Email Address*
        </label>
        <input
          type="email"
          name="email"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          placeholder="Enter your email address"
          required
        />

        <label className="block text-sm font-medium text-gray-700">
          Phone Number*
        </label>
        <input
          type="tel"
          name="phone"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          placeholder="Enter your phone number"
          required
        />

        <label className="block text-sm font-medium text-gray-700">
          Birthday*
        </label>
        <input
          type="date"
          name="birthday"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          required
        />

        <label className="block text-sm font-medium text-gray-700">
          I am interested in*
        </label>
        <select
          name="membership"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        >
          <option value="adult">Adult Membership</option>
          <option value="child">Child Membership</option>
        </select>

        <label className="block text-sm font-medium text-gray-700">
          How&lsquo;d you hear about us?
        </label>
        <select
          name="referral"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        >
          <option value="member">Member Referral</option>
          <option value="advertisement">Advertisement</option>
          <option value="internet">Internet</option>
        </select>

        <label className="block text-sm font-medium text-gray-700">
          Questions or Comments?
        </label>
        <textarea
          name="comments"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          placeholder="Any questions? Let us know!"
        />

        <div className="flex justify-center gap-8 items-center mb-4">
          <div className="h-20 w-20 bg-gray-300 flex justify-center items-center">
            {/* Here you can use a real image or render captcha text dynamically */}
            <p className="text-sm font-semibold">{captchaCode}</p>
          </div>
          <button
            type="button"
            onClick={refreshCaptcha}
            className="text-blue-500 text-sm"
          >
            Refresh qapcha
          </button>
        </div>

        <label className="block text-sm font-medium text-gray-700">
          Enter Captcha*
        </label>
        <input
          type="text"
          name="captchaInput"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          required
        />
        {/* 
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="stayUpdated"
            id="stayUpdated"
            className="mr-2"
          />
          <label htmlFor="stayUpdated" className="text-sm text-gray-600">
            Stay updated
          </label>
        </div> */}

        <div className="flex items-start mb-4">
          <input type="checkbox" id="stayUpdated" className="mr-2 mt-1" />
          <label className="text-sm text-gray-600">
            <span className="font-semibold">Stay updated*</span>
            <br />
            By submitting this form, you are providing your express written
            consent to receive automatically dialed SMS text messages including
            marketing messages from Raleigh Racquet Club. You confirm that you
            are the subscriber or customary user of any phone number you submit.
            Consent is not a condition of purchasing any goods or services, and
            may be revoked at any time by responding STOP to any text message
            you receive. Message and data rates may apply. Message frequency
            varies. Additionally, you are consenting to location usage and
            information collection.
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-500 text-white p-2 rounded-md"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default FormPage;
