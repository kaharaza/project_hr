import React, { useState } from "react";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import { Link } from "react-router-dom";
import { textTypeT4 } from "../../inc/ArrayText";

export default function Academic2() {
  const [openGeneral, setOpenGeneral] = useState(false);
  const [openAcademic, setOpenAcademic] = useState(false);

  const [showView1, setShowView1] = useState(false);

  const clickOpenShowView1 = (checked) => {
    setShowView1(checked);
  };

  const clickOpenGeneral = (checked) => {
    setOpenGeneral(checked);
    setOpenAcademic(false);
    setShowView1(false);
  };

  const clickOpenAcademic = (checked) => {
    setOpenAcademic(checked);
    setOpenGeneral(false);
    setShowView1(false);
  };

  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="bg-gradient-to-b from-gray-100 to-gray-50 h-full w-full md:h-screen lg:h-screen">
          <div className="container mx-auto max-w-5xl py-[100px] md:py-[150px] px-10 sm:px-20 md:px-0">
            <div className="text-2xl md:text-3xl font-[600] mb-8 text-gray-600">
              การกำหนดตำแหน่งที่สูงขึ้น
            </div>
            <div className="flex justify-center items-center h-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <label
                  htmlFor="openGeneral"
                  className={`flex flex-col items-center justify-center gap-5 h-48 max-h-48 border ${
                    openGeneral ? "bg-teal-900 text-white" : null
                  } border-teal-600 rounded-lg shadow-sm shadow-teal-400 px-4
                  hover:no-underline text-teal-800 transition duration-200 ease-in-out hover:bg-teal-900 hover:text-white cursor-pointer w-full sm:w-full md:w-[500px]`}
                >
                  <i
                    className="fa fa-users text-5xl px-4"
                    hidden={openGeneral}
                  ></i>
                  <input
                    id="openGeneral"
                    type="checkbox"
                    checked={openGeneral}
                    onChange={(e) => clickOpenGeneral(e.target.checked)}
                    hidden
                  />
                  <span className="text-2xl font-[500]">
                    การเสนอขอตำแหน่งทางวิชาการ(ทั่วไป)
                  </span>

                  {/* DropDown Icon Arrow */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      openGeneral ? "max-h-[500px] " : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex justify-center my-3">
                      <i className="fa fa-arrow-down text-5xl font-[600] text-white"></i>
                    </div>
                  </div>
                </label>

                <label
                  htmlFor="openAcademic"
                  className={`flex flex-col items-center justify-center gap-5 h-48 max-h-48  border ${
                    openAcademic ? "bg-teal-900 text-white" : null
                  } border-teal-600 rounded-lg shadow-sm shadow-teal-400 px-4
                  hover:no-underline text-teal-800 transition duration-200 ease-in-out hover:bg-teal-900 hover:text-white cursor-pointer w-full sm:w-full md:w-[500px]`}
                >
                  <i
                    className="fa fa-bar-chart text-5xl px-4"
                    hidden={openAcademic}
                  ></i>
                  <input
                    id="openAcademic"
                    type="checkbox"
                    checked={openAcademic}
                    onChange={(e) => clickOpenAcademic(e.target.checked)}
                    hidden
                  />
                  <span className="text-2xl font-[500]">
                    การเสนอขอตำแหน่งทางวิชาการ(เฉพาะด้าน)
                  </span>
                  {/* DropDown Icon Arrow */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      openAcademic ? "max-h-[500px] " : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex justify-center my-3">
                      <i className="fa fa-arrow-down text-5xl font-[600] text-white"></i>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* DropDown General */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden  ${
                openGeneral
                  ? "max-h-[500px] opacity-100  mt-10"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
                <label
                  htmlFor="openShowView1"
                  className={`flex flex-col text-blue-950 border-2 border-blue-950 transition-all duration-500 ease-in-out
                   hover:bg-blue-950 hover:text-white hover:no-underline cursor-pointer 
                   rounded-md items-center gap-5 px-4 py-5 font-[500] text-[28px] ${
                     showView1 ? "bg-blue-950 text-white" : null
                   }`}
                >
                  <span>
                    ขั้นตอนการเสนอขอตำแหน่งทางวิชาการ ผศ./รศ./ศ. (คณาจารย์ประจำ)
                  </span>
                  <input
                    id="openShowView1"
                    type="checkbox"
                    checked={showView1}
                    onChange={(e) => clickOpenShowView1(e.target.checked)}
                    hidden
                  />
                  {/* DropDown Icon Arrow */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      showView1 ? "max-h-[500px] " : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex justify-center my-3">
                      <i className="fa fa-arrow-down text-5xl font-[600] text-white"></i>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* DropDown Academic */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openAcademic
                  ? "max-h-[1000px] opacity-100 border border-teal-300 shadow-[1px_1px_10px_5px_#ccfbf1] mt-10 p-5 rounded-lg"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                {/* grid 1 */}
                <div className=" overflow-y-scroll w-full h-[400px] shadow-lg p-5">
                  <div className="text-xl font-[500]">
                    <div className="bg-gray-300 p-2 border rounded-md text-center">
                      <p className="">การขอตำแหน่งทางวิชาการเฉพาะด้าน</p>
                    </div>
                  </div>
                  <div className="text-lg font-[500] text-gray-500 py-5">
                    <p>
                      <i className="fa fa-book mr-3"></i>
                      คู่มือการเสนอขอตำแหน่งเฉพาะด้าน
                    </p>
                  </div>
                  <div>
                    {textTypeT4.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="flex justify-between items-start md:items-center hover:no-underline active:no-underline mb-4"
                        >
                          <div className="flex items-center gap-4">
                            <div className="hidden md:flex">
                              <i className="fa fa-file-pdf text-5xl text-red-700"></i>
                            </div>
                            <div className="flex flex-col">
                              <div className="font-[700] text-gray-500">
                                {item.title}
                              </div>
                              <div className="text-red-600 font-[600]">PDF</div>
                            </div>
                          </div>
                          <Link
                            to={item.linkDownload}
                            target="_blank"
                            download
                            className="bg-red-600 hover:bg-red-700 hover:text-white hover:no-underline active:no-underline text-white px-2 py-1 rounded-lg"
                          >
                            <i className="fa fa-download"></i>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* grid 2 */}

                <div className="w-full h-full p-10 ">
                  <img
                    className="rounded-lg overflow-hidden object-cover"
                    src="https://w1.med.cmu.ac.th/personnel/files/2023/12/6-1024x576.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* DropDown showView1 */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden  ${
                showView1
                  ? "max-h-[500px] opacity-100  mt-10"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col h-full w-full">
                <img
                  src="https://w1.med.cmu.ac.th/personnel/files/2023/12/%E0%B8%9C%E0%B8%A8-2048x1152.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
