import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "./navlink";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-gradient-to-b from-gray-100 to-gray-50 shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://www.vet.cmu.ac.th/webmed/adminvet/image/header2.png"
              className="h-auto w-[220px] md:h-auto md:w-[300px]"
              alt="Flowbite Logo"
            />
          </Link>

          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-3xl text-gray-300 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleMenu}
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full lg:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <NavLink to="/home">หน้าแรก</NavLink>
              </li>
              {/* <li>
                <NavLink to="#">งานสารบรรณ</NavLink>
              </li> */}
              <li>
                <NavLink to="/pages/academic">งานบุคคล</NavLink>
              </li>
              {/* <li>
                <NavLink to="#">งานอาคารและยานพาหนะ</NavLink>
              </li> */}
              {/* <li>
                <NavLink to="#">งานเทคโนโลยีสารสนเทศ</NavLink>
              </li> */}
              <li>
                <NavLink to="#">ติดต่อสอบถาม</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
