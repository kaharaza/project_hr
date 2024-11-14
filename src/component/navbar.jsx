import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavLink from "./navlink";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // เปลี่ยนเลขนี้ตามจุดที่ต้องการให้ Navbar ติดบนสุด
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`${
          isScrolled ? "fixed top-0 left-0 w-full z-10" : ""
        } top-0 md:px-0 px-5 w-full bg-gradient-to-r from-[#5eafd2] to-[#9e76b4] shadow-lg transition-all duration-300 ease-in-out`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-1 pb-1 gap-10">
          <Link
            to="/"
            className="flex items-center space-x-4  py-4 rounded-lg  text-gray-800 hover:no-underline hover:text-purple-950"
          >
            <div className="flex items-center gap-3">
              <img
                src="https://vmcmu.vet.cmu.ac.th/assets/download-Logo/logo30Y/03/[TH-%E0%B8%82%E0%B8%B2%E0%B8%A7]%20LOGO%2030%20%E0%B8%9B%E0%B8%B5%20VMCMU_0.png"
                className="w-12 h-12 rounded-full border border-gray-300 shadow-md bg-[#5eafd2] "
                alt="Flowbite Logo"
              />
              <div className="flex flex-col">
                <span className="text-lg font-medium">งานบริหารงานทั่วไป</span>
                <span className="text-sm text-gray-100">
                  คณะสัตวแพทยศาสตร์ มหาวิทยาลัยเชียงใหม่
                </span>
              </div>
            </div>
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
            } w-full  lg:block md:w-auto`}
            id="navbar-default"
          >
            <div className="flex flex-col pt-3 ">
              <ul
                className="font-medium flex items-center justify-center space-x-2 mx-auto 
              md:mx-0 md:ml-auto  md:p-0   md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0
               md:border-0 "
              >
                <li>
                  <div className="  rounded-lg text-white flex justify-center items-center gap-2">
                    <div className="flex justify-center items-center">
                      <i className="fa fa-eye"></i>
                    </div>
                    <p> 9999 </p>
                  </div>
                </li>
                <li>
                  <div className="bg-green-500 px-2 py-1 rounded-lg text-white flex justify-center items-center gap-2">
                    <p> Online </p>
                  </div>
                </li>
                <li className="text-white">Phop mooraphun</li>
                <li>
                  <div className="w-8 h-8 flex items-center justify-center border border-gray-300 bg-white rounded-full overflow-hidden">
                    <i className="fa fa-user"></i>
                  </div>
                </li>
              </ul>
              <div className="border-b md:border-b border-gray-300 mb-2"></div>
              <ul className="font-medium flex flex-col md:p-0   md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0">
                <li>
                  <NavLink to="/home">หน้าแรก</NavLink>
                </li>
                <li>
                  <NavLink to="#!">สารบรรณและเลขา</NavLink>
                </li>
                <li>
                  <NavLink to="/pages/academic">ทรัพยากรบุคคล</NavLink>
                </li>
                <li>
                  <NavLink to="#!">อาคารและยานพาหนะ</NavLink>
                </li>
                <li>
                  <NavLink to="#!">เทคโนโลยีสารสนเทศ</NavLink>
                </li>
                <li>
                  <NavLink to="#!">ติดต่อสอบถาม</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
