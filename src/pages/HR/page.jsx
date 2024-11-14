import React from "react";

import Footer from "../../component/footer";
import { Link } from "react-router-dom";
import Cookie from "../../component/cookie";
import Navbar from "../../component/navbar";

export default function PageHR() {
  return (
    <>
      <Navbar />
      <div className="w-full h-full mb-32">
        <div className="container mx-auto max-w-5xl px-10 sm:px-20 md:px-0  ">
          <div className="text-3xl font-[600] py-10  text-[#9E76B4] text-center">
            การขอตำแหน่งทางวิชาการ/การกำหนดตำแหน่งที่สูงขึ้น
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-col-1 gap-4 w-full md:w-5/6">
              <Link
                to="/pages/academic/page"
                className="rounded-lg shadow h-full w-full flex flex-col md:flex-row items-center justify-between 
          px-10 py-8 bg-gradient-to-b md:bg-gradient-to-r from-gray-300 to-gray-300 text-gray-500 transition duration-500 ease-in-out cursor-pointer transform hover:scale-105 hover:text-amber-200
          hover:bg-gradient-to-b md:hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-800 hover:no-underline 
          "
              >
                <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                  <img
                    className="object-cover border-[10px] border-white bg-gradient-to-b from-blue-300 to-blue-800 shadow-[2px_2px_10px_2px_rgba(0,0,0,0.5] shadow-gray-500 p-4 mt-3 rounded-full  w-[100px] h-[100px]"
                    src="https://img.icons8.com/?size=100&id=qiN50t8sHZsy&format=png&color=000000"
                    alt=""
                  />
                  <div className="text-xl md:text-3xl font-[600]">
                    การขอตำแหน่งทางวิชาการ
                  </div>
                </div>
                <div className="text-xl md:text-3xl font-[600] ">Read more</div>
              </Link>

              <Link
                to={"/pages/academic/research"}
                className="rounded-lg shadow h-full w-full flex flex-col md:flex-row items-center justify-between 
          px-10 py-8 bg-gradient-to-b md:bg-gradient-to-r from-gray-300 to-gray-300 text-gray-500 transition duration-500 ease-in-out cursor-pointer transform hover:scale-105 hover:text-amber-200
          hover:bg-gradient-to-b md:hover:bg-gradient-to-r hover:from-sky-300 hover:to-sky-800 hover:no-underline
          "
              >
                <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                  <img
                    className="object-cover border-[10px] border-white bg-gradient-to-b from-sky-300 to-sky-800 shadow-[2px_2px_10px_2px_rgba(0,0,0,0.5] shadow-gray-500 p-4 mt-3 rounded-full  w-[100px] h-[100px]"
                    src="https://img.icons8.com/?size=100&id=12150&format=png&color=000000"
                    alt=""
                  />
                  <div className="text-xl md:text-3xl font-[600]">
                    การกำหนดตำแหน่งนักวิจัย
                  </div>
                </div>
                <div className="text-xl md:text-3xl font-[600] ">Read more</div>
              </Link>

              <Link
                to="/pages/academic/high-positioning"
                className="rounded-lg shadow h-full w-full flex flex-col md:flex-row items-center justify-between 
          px-10 py-8 bg-gradient-to-b md:bg-gradient-to-r from-gray-300 to-gray-300 text-gray-500 transition duration-300 ease-in-out cursor-pointer transform hover:scale-105 hover:text-amber-200
          hover:bg-gradient-to-b md:hover:bg-gradient-to-r hover:from-cyan-300 hover:to-cyan-800 hover:no-underline
          "
              >
                <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                  <img
                    className="object-cover border-[10px] border-white bg-gradient-to-b from-cyan-300 to-cyan-800 shadow-[2px_2px_10px_2px_rgba(0,0,0,0.5]  p-4 mt-3 rounded-full  w-[100px] h-[100px]"
                    src="https://img.icons8.com/?size=100&id=102554&format=png&color=000000"
                    alt=""
                  />
                  <div className="text-xl md:text-3xl font-[600]">
                    การกำหนดตำแหน่งที่สูงขึ้น
                  </div>
                </div>
                <div className="text-xl md:text-3xl font-[600] ">Read more</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Cookie />
      <Footer />
    </>
  );
}
