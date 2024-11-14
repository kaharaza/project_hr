import React, { useState, useEffect } from "react";
import Navbar from "./component/navbar";
import Footer from "./component/footer";

export default function App() {
  // Database
  const BannerImg = [
    {
      id: 1,
      img: "https://vmcmu.vet.cmu.ac.th/assets/images-head/banner0abcd.jpg",
    },
    {
      id: 2,
      img: "https://vmcmu.vet.cmu.ac.th/assets/images-head/vetCMU2024-2.png",
    },
    {
      id: 3,
      img: "https://vmcmu.vet.cmu.ac.th/assets/images-head/banner0abb.jpg",
    },
  ];

  // Database
  const Phone_number = [
    { id: 1, name: "หน่วย1", phone: "โทร. 0-2922-3000" },
    { id: 2, name: "หน่วย1", phone: "โทร. 0-2922-3000" },
    { id: 3, name: "หน่วย2", phone: "โทร. 0-2922-3000" },
    { id: 4, name: "หน่วย1", phone: "โทร. 0-2922-3000" },
    { id: 5, name: "หน่วย1", phone: "โทร. 0-2922-3000" },
    { id: 6, name: "หน่วย1", phone: "โทร. 0-2922-3000" },
    { id: 7, name: "หน่วย1", phone: "โทร. 0-2922-3000" },
    { id: 8, name: "หน่วย1", phone: "โทร. 0-2922-3000" },
    { id: 9, name: "หน่วย1", phone: "โทร. 0-2922-3000" },
    { id: 10, name: "หน่วย1", phone: "โทร. 0-2922-3000" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // เปลี่ยนภาพอัตโนมัติทุก ๆ 5 วินาที
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === BannerImg.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // เปลี่ยนภาพทุก ๆ 5 วินาที
    return () => clearInterval(interval);
  }, [BannerImg.length]);

  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? BannerImg.length - 1 : currentIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % BannerImg.length);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setIsVisible(e.target.value.length > 0); // แสดงผลเมื่อมีการพิมพ์
  };

  return (
    <>
      <Navbar />
      {/* Main section */}
      <div className="w-full">
        {/* Banner section */}
        <div className="relative mx-auto overflow-hidden">
          {/* ภาพในคารูเซล */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {BannerImg.map((banner) => (
              <img
                key={banner.id}
                src={banner.img}
                alt={`Banner ${banner.id}`}
                className="w-full object-cover"
              />
            ))}
          </div>
          {/* ปุ่มนำทาง */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2  hover:bg-white px-4 py-3 rounded-full shadow-lg text-gray-100/0 hover:text-black "
          >
            <i className="fa fa-chevron-left "></i>
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 hover:bg-white px-4 py-3 rounded-full shadow-lg text-gray-100/0 hover:text-black"
          >
            <i className="fa fa-chevron-right"></i>
          </button>
          {/* ตัวชี้สถานะ */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {BannerImg.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-gray-800" : "bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
        {/* Banner section */}
      </div>
      {/* content section */}
      <div className="px-5 py-3 max-w-7xl mx-auto h-screen">
        <div className=" h-10 flex items-center overflow-hidden text-gray-600 border-b border-[#9e76b460]">
          <div
            className={`flex gap-20 whitespace-nowrap cursor-pointer ${
              isHovered ? "animate-marquee-paused" : "animate-marquee"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span>
              <i className="fa fa-bullhorn text-[#9e76b4] mr-1"></i>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati
            </span>
            <span>
              <i className="fa fa-bullhorn text-[#9e76b4] mr-1"></i>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati
            </span>
            <span>
              <i className="fa fa-bullhorn text-[#9e76b4] mr-1"></i>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati
            </span>
            <span>
              <i className="fa fa-bullhorn text-[#9e76b4] mr-1"></i>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati
            </span>
            <span>
              <i className="fa fa-bullhorn text-[#9e76b4] mr-1"></i>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati
            </span>
            <span>
              <i className="fa fa-bullhorn text-[#9e76b4] mr-1"></i>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati
            </span>
          </div>
        </div>
        <div
          className="md:flex md:justify-center md:items-start md:gap-10
        grid grid-cols-1 gap-5 mt-5
        "
        >
          {/* Row1 */}
          <div className="flex flex-col w-full md:w-[120%]">
            {/* search */}
            <div className="relative mb-3">
              <div className="flex items-center justify-between">
                <input
                  type="search"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="ค้นหาเบอร์โทรภายในหน่วยงาน...."
                  className="bg-[#9e76b433] border border-[#9e76b4] text-gray-800 px-3 py-3 rounded-md w-full focus:outline-none focus:border-[#9e76b4] focus:border-2 placeholder:text-gray-400"
                />
                <div
                  className={`absolute right-2 ${
                    isVisible ? "hidden" : "block"
                  }`}
                >
                  <button className="bg-[#9e76b4] text-white px-2 py-1 rounded-full">
                    <i className="fa fa-search text-white"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Search results */}
            <div className="relative">
              <div
                className={`absolute -top-3 left-0 right-0 bg-white border border-gray-300 rounded-md shadow-md z-10 p-3 transition-all duration-300 ease-in-out transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-5"
                }`}
              >
                <div className="overflow-y-scroll h-[100px]">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50  border-b">
                      <tr>
                        <th scope="col" className="px-2 py-2 bg-gray-50">
                          หน่วยงาน
                        </th>
                        <th scope="col" className="px-2 py-2 ">
                          เบอร์ติดต่อ
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Phone_number.map((item) => (
                        <tr className="border-b border-gray-200">
                          <th
                            scope="row"
                            className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                          >
                            {item.name}
                          </th>
                          <td class="px-2 py-2">{item.phone}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Search results */}

            {/* End search */}
            {/* select button*/}
            <div className="flex flex-col gap-3">
              <h2 className="text-[#9e76b4]">เลือกหน่วยงาน</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                <button className="bg-gradient-to-r from-[#9e76b4] to-[#5eafd2] text-white px-2 py-1 md:h-14 font-[500] md:text-2xl rounded-md shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-[#5eafd2] hover:to-[#9e76b4]">
                  <p>สารบรรณและเลขานุการ</p>
                </button>
                <button className="bg-gradient-to-r from-[#9e76b4] to-[#5eafd2] text-white px-2 py-1 md:h-14 font-[500] md:text-2xl rounded-md shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-[#5eafd2] hover:to-[#9e76b4]">
                  <p>ทรัพยากรบุคคล</p>
                </button>

                <button className="bg-gradient-to-r from-[#9e76b4] to-[#5eafd2] text-white px-2 py-1 md:h-14 font-[500] md:text-2xl rounded-md shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-[#5eafd2] hover:to-[#9e76b4]">
                  <p>อาคารและยานพาหนะ</p>
                </button>

                <button className="bg-gradient-to-r from-[#9e76b4] to-[#5eafd2] text-white px-2 py-1 md:h-14 font-[500] md:text-2xl rounded-md shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-[#5eafd2] hover:to-[#9e76b4]">
                  <p>เทคโนโลยีสารสนเทศ</p>
                </button>
              </div>
            </div>
            {/* End select button*/}

            {/* Calendar */}
            <div className="flex flex-col mt-3 gap-3">
              <h2 className="text-[#9e76b4]">Calendar Event</h2>
              <div className="shadow-md rounded-lg overflow-hidden">
                <iframe
                  src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FBangkok&src=YTVmOTc5OTJiODFhMTFlY2NjMDEyZDgzYzMxMTcxY2YzNmNhYWFhYWNmZDhjNTdkNGFkOWFiZmEzYTRiZDAzY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%233F51B5"
                  className="w-full h-[400px]"
                  frameborder="0"
                  scrolling="no"
                ></iframe>
              </div>
            </div>
            {/* End Calendar */}
          </div>
          {/* End Row1 */}

          {/* Row2 */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-5 bg-slate-300 px-5 py-2 rounded-lg shadow-md h-[300px] mb-36 md:h-[720px] overflow-y-scroll custom-scrollbar">
              <div className="flex flex-col mr-auto  gap-2  w-full">
                {/* สารบรรณและเลขานุการ */}
                <h4 className="text-[#9e76b4] font-[600]">
                  สารบรรณและเลขานุการ
                </h4>
                <button className="text-start bg-white text-[#9e76b4] transition-all duration-300 hover:bg-[#9e76b4] hover:text-white border border-gray-300 px-3 py-2 rounded-md w-full">
                  คำสั่ง/ประกาศ
                </button>
                <button className="text-start bg-white text-[#9e76b4] transition-all duration-300 hover:bg-[#9e76b4] hover:text-white border border-gray-300 px-3 py-2 rounded-md w-full">
                  มติที่ประชุม
                </button>
                <button className="text-start bg-white text-[#9e76b4] transition-all duration-300 hover:bg-[#9e76b4] hover:text-white border border-gray-300 px-3 py-2 rounded-md w-full">
                  Knowledge Management
                </button>
                {/* สารบรรณและเลขานุการ */}

                {/* ทรัพยากรบุคคล */}
                <h4 className="text-[#9e76b4] font-[600]">ทรัพยากรบุคคล</h4>
                <button className="text-start bg-white text-[#9e76b4] transition-all duration-300 hover:bg-[#9e76b4] hover:text-white border border-gray-300 px-3 py-2 rounded-md w-full">
                  CMU MIS
                </button>
                <button className="text-start bg-white text-[#9e76b4] transition-all duration-300 hover:bg-[#9e76b4] hover:text-white border border-gray-300 px-3 py-2 rounded-md w-full">
                  HR Portal
                </button>
                <button className="text-start bg-white text-[#9e76b4] transition-all duration-300 hover:bg-[#9e76b4] hover:text-white border border-gray-300 px-3 py-2 rounded-md w-full">
                  การขอตำแหน่งทางวิชาการ
                </button>
                {/* ทรัพยากรบุคคล */}

                {/* อาคารและยานพาหนะ */}
                <h4 className="text-[#9e76b4] font-[600]">อาคารและยานพาหนะ</h4>
                <button className="text-start bg-white text-[#9e76b4] transition-all duration-300 hover:bg-[#9e76b4] hover:text-white border border-gray-300 px-3 py-2 rounded-md w-full">
                  ประกาศจากหน่วยอาคาร
                </button>
                <button className="text-start bg-white text-[#9e76b4] transition-all duration-300 hover:bg-[#9e76b4] hover:text-white border border-gray-300 px-3 py-2 rounded-md w-full">
                  ระเบียบการใช้รถ
                </button>
                <button className="text-start bg-white text-[#9e76b4] transition-all duration-300 hover:bg-[#9e76b4] hover:text-white border border-gray-300 px-3 py-2 rounded-md w-full">
                  คู่มือการจอดรถ
                </button>
                {/* อาคารและยานพาหนะ */}

                {/* เทคโนโลยีสารสนเทศ */}
                <h4 className="text-[#9e76b4] font-[600]">เทคโนโลยีสารสนเทศ</h4>
                <button className="text-start bg-white text-[#9e76b4] transition-all duration-300 hover:bg-[#9e76b4] hover:text-white border border-gray-300 px-3 py-2 rounded-md w-full">
                  ประกาศจากหน่วยเทคโนโลยี
                </button>
                <button className="text-start bg-white text-[#9e76b4] transition-all duration-300 hover:bg-[#9e76b4] hover:text-white border border-gray-300 px-3 py-2 rounded-md w-full">
                  ระเบียบการใช้ห้องประชุม
                </button>

                {/* เทคโนโลยีสารสนเทศ */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content section */}

      {/* Main section */}

      <Footer />
    </>
  );
}
