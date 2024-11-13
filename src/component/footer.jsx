import React from "react";
import { Link } from "react-router-dom";
import NavLink from "./navlink";

export default function Footer() {
  return (
    <>
      <footer className="bg-white shadow fixed bottom-0 w-full z-10">
        <div className="flex items-center justify-between p-6 container mx-auto max-w-7xl">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a
              href="https://vmcmu.vet.cmu.ac.th/index_page?lang=th"
              className="hover:underline text-gray-500"
            >
              VMCMU
            </a>
            . All Rights Reserved.
          </span>
          <ul className=" flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 gap-4 hidden md:flex">
            {/* <li>
              <NavLink to={""}>งานบุคคล</NavLink>
            </li> */}
            <li>
              <NavLink to={"/pages/academic"}>งานบุคคล</NavLink>
            </li>
            {/* <li>
              <Link to="" className="hover:underline text-gray-500">
                งานอาคารและยานพาหนะ
              </Link>
            </li> */}
            {/* <li>
              <Link to="" className="hover:underline text-gray-500">
                งานเทคโนโลยีสารสนเทศ
              </Link>
            </li> */}
            <li>
              <NavLink to="#">
                ติดต่อสอบถาม
              </NavLink>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
