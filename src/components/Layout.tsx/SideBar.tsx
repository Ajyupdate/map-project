"use client";
import { useState } from "react";
import "../../utils/flowbite-client";

import Image from "next/image";
import Link from "next/link";
import { PiSignOutBold } from "react-icons/pi";
import Navbar from "./Navbar";

const SidebarContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isFinanceOpen, setIsFinanceOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

        <button
          type="button"
          className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-1 focus:ring-inset focus:ring-ajo_offWhite"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={() => setDropdownMenuIsOpen(!DropdownMenuIsOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {DropdownMenuIsOpen === false ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div> */}
      <div className="">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-controls="separator-sidebar"
          type="button"
          className="md:hidden inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:block hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      </div>

      <aside
        id="separator-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden top-4 right-4 p-2 text-gray-500 bg-gray-200 rounded-full hover:bg-gray-300  focus:outline-none"
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10 8.586L15.657 3l1.414 1.414L11.414 10l5.657 5.657-1.414 1.414L10 11.414l-5.657 5.657-1.414-1.414L8.586 10 3 4.343 4.414 3 10 8.586z"
              ></path>
            </svg>
          </button>
          <ul className="space-y-2 font-medium">
            <li className="mb-6">
              <Link
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
              >
                <Image width={100} height={100} src={`/Group.png`} alt="Logo" />
                <span className="ms-3 text-xs font-semibold text-[#141460]">
                  Medical Advanced Platform
                </span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
              >
                <Image
                  width={20}
                  height={20}
                  src={"/dashboard-icon.png"}
                  alt="dashboard"
                />
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <Image
                  width={20}
                  height={20}
                  src={"/box.png"}
                  alt="Inventory"
                />
                <span className="flex-1 ms-3 whitespace-nowrap">Inventory</span>
                {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span> */}
              </a>
            </li>

            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 "
                onClick={() => setIsOpen(!isOpen)} // Toggle the dropdown
              >
                <Image
                  width={20}
                  height={20}
                  src={"/cart.png"}
                  alt="e-commerce"
                />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  E-commerce
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="dropdown-example"
                className={`${isOpen ? "block" : "hidden"} py-2 space-y-2`}
              >
                <li>
                  <Link
                    href="/"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                  >
                    Quotes
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 "
                  >
                    Order
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 "
                onClick={() => setIsFinanceOpen(!isFinanceOpen)} // Toggle the dropdown
              >
                <Image
                  width={20}
                  height={20}
                  src={"/money-1.png"}
                  alt="finance"
                />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Finance
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>

            <li>
              <a
                href="#"
                className=" flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group"
              >
                <Image
                  width={20}
                  height={20}
                  src={"/chats.png"}
                  alt="communication"
                />
                <span className="flex-1 ms-3  whitespace-nowrap">
                  Communication
                </span>
                <span className="inline-flex items-center justify-center w-3 h-3 py-3 px-5 ms-3 text-sm font-medium text-white bg-blue-500 rounded-full">
                  10
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className=" flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group"
              >
                <Image
                  width={20}
                  height={20}
                  src={"/icon.png"}
                  alt="calender"
                />
                <span className="flex-1 ms-3  whitespace-nowrap">Calender</span>
                <span className="inline-flex items-center justify-center w-3 h-3 py-3 px-5 ms-3 text-sm font-medium text-white bg-blue-500 rounded-full">
                  10
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <img
                  width={20}
                  height={20}
                  src={"/Subtract.png"}
                  alt="contracts"
                />
                <span className="flex-1 ms-3 whitespace-nowrap">Contracts</span>
              </a>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium ">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100"
              >
                <Image
                  width={20}
                  height={20}
                  src={"/question-circle.png"}
                  alt="icon"
                />
                <span className="ms-3">Support</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 "
              >
                <Image
                  width={20}
                  height={20}
                  src={"/settings.png"}
                  alt="icon"
                />
                <span className="ms-3">Settings</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100  group"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  alt="Rounded avatar"
                />
                <div>
                  <h3 className="ms-3 font-bold text-small">Mark Benson</h3>
                  <span className="ms-3 text-sm font-thin text-gray-500">
                    markbenson@core...
                  </span>
                </div>

                <span>
                  <PiSignOutBold size={24} />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="sm:ml-64 ">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default SidebarContent;
