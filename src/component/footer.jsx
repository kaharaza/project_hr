import React from "react";
import { Link } from "react-router-dom";
import NavLink from "./navlink";

export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-r from-[#9e76b4] to-[#5eafd2]  shadow fixed bottom-0 w-full z-10">
        <div className="flex items-center justify-between p-6 container mx-auto max-w-7xl">
          <span className="text-sm text-gray-50 sm:text-center ">
            © 2024{" "}
            <a
              href="https://vmcmu.vet.cmu.ac.th/index_page?lang=th"
              className="hover:underline text-gray-50"
            >
              VMCMU
            </a>
            . All Rights Reserved.
          </span>
          <ul className=" flex-wrap items-center text-sm font-medium sm:mt-0 gap-4 hidden md:flex text-white">
            <div>นโยบายความเป็นส่วนตัว</div>
            <span>|</span>
            <div>สำหรับเจ้าหน้าที่</div>
            <span>|</span>
            <div>ติดต่องานบริหารงานทั่วไป</div>
          </ul>
        </div>
      </footer>
    </>
  );
}
