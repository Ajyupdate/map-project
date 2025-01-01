"use client";
import Image from "next/image";
import { useState } from "react";
import { BiBell } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="p-4 flex items-center justify-end">
      {/* Right Section */}
      <div className="flex items-center space-x-4 relative">
        {/* Search Bar */}

        <div>
          <form className="md:w-96 mx-auto mr-4">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <FiSearch />
              </div>
              <input
                type="text"
                id="email-address-icon"
                className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholder="Search here"
              />
            </div>
          </form>
        </div>

        {/* Notifications */}
        <button
          aria-label="Notifications"
          className="text-gray-500 hover:text-blue-500 focus:outline-none"
        >
          <BiBell size={28} />
        </button>

        <button
          aria-label="Notifications"
          className="text-gray-500 hover:text-blue-500 focus:outline-none"
        >
          <Image width={40} height={30} src={"/texts@2x.png"} alt="icon" />
        </button>
        {/* Avatar */}
        <div className="relative">
          <img
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-10 h-10 rounded-full cursor-pointer"
            src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
            alt="User dropdown"
          />

          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-30 z-10">
              <div className="px-4 py-3 text-sm text-gray-900">
                <div>Mark Benson</div>
                <div className="font-medium truncate">markbenson@gmail.com</div>
              </div>
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Settings
                  </a>
                </li>
              </ul>
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign out
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
