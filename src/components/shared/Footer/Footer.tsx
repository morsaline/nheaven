const Footer = () => {
  return (
    <footer className="bg-[#b9e85f] text-black py-10 px-6 md:px-16">
      <div className="flex max-w-[90rem] mx-auto flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
        {/* Left Column: Logo and Contact Information */}
        <div className="flex flex-col space-y-4 md:w-1/3">
          <div className="flex items-center space-x-2">
            <span className="font-extrabold text-2xl">RRC</span>
            <span className="text-lg">Raleigh Racquet Club</span>
          </div>
          <p className="text-sm">
            Address: 555 Falls of Neuse Rd. Raleigh, NC 27609
          </p>
          <p className="text-sm">Phone: (919) 370-5655</p>
          <p className="text-sm">Mail: (919) 379-9097</p>
          <div className="flex space-x-3 mt-4">
            <a href="#" className="text-white hover:text-gray-300">
              Instagram
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Facebook
            </a>
          </div>
        </div>

        {/* Center Column: Quick Links and About */}
        <div className="flex flex-col md:flex-row md:space-x-16 space-y-4 md:space-y-0 text-sm md:text-base md:w-1/3">
          <div className="space-y-2">
            <h3 className="font-semibold">Quick Links</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Junior Tennis
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Adult Tennis
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Indoor Tennis
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Pro Staff
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">About</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Out Staff
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Calendar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Member Button */}
        <div className="md:w-1/3 text-center md:text-right">
          <h3 className="text-xl font-semibold mb-4">Be a member today!</h3>
          <button className="px-6 py-3 bg-white text-[#b9e85f] rounded-full hover:bg-gray-200 transition">
            Join us
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-800">
        <p>© 2023 Raleigh Racquet Club | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
