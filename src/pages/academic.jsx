import { React, useState } from "react";
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import { Calendar, Badge } from "rsuite";
import { Link } from "react-router-dom";

export default function Academic() {
  const [selectedDate, setSelectedDate] = useState(null);

  const bookings = [
    // { date: new Date(2024, 10, 5), name: "Alice" },
    // { date: new Date(2024, 10, 15), name: "Bob" },
    // { date: new Date(2024, 10, 20), name: "Charlie" },
    // { date: new Date(2024, 10, 20), name: "Phop" },
    // { date: new Date(2024, 10, 20), name: "Mooraphun" },
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // เปลี่ยนให้คืนค่ารายการทั้งหมดที่ตรงกับวันที่นั้น
  const getBookingsForDate = (date) => {
    return bookings.filter(
      (booking) =>
        booking.date.getFullYear() === date.getFullYear() &&
        booking.date.getMonth() === date.getMonth() &&
        booking.date.getDate() === date.getDate()
    );
  };
  return (
    <>
      <Navbar />
      <div className="relative">
        <div className=" bg-gradient-to-b from-gray-100 to-gray-50 h-full">
          <div className="container mx-auto max-w-5xl py-[100px] md:py-[150px] px-10 sm:px-20 md:px-0  ">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              <Link
                to="/pages/academic/1"
                className=" hover:scale-105 rounded-lg hover:shadow-sm hover:border flex items-center 
            justify-center cursor-pointer text-center text-gray-600 font-[500] duration-500 transition ease-in-out 
            hover:bg-gradient-to-t from-slate-400 to-slate-300 hover:text-white"
              >
                <div className="flex flex-col items-center justify-center gap-1">
                  <img
                    className="object-cover "
                    src="https://img.icons8.com/?size=100&id=jZYLtbMSsRTi&format=png&color=000000"
                    alt="not img"
                  />
                  <div className="p-2 ">
                    <div>ขั้นตอน</div>
                    <div className="text-sm">การเสนอขอตำแหน่งทางวิชาการ</div>
                  </div>
                </div>
              </Link>
              <Link
                to={"https://hr.oop.cmu.ac.th/academic/01.php"}
                target="_blank"
                className=" hover:scale-105 rounded-lg hover:shadow-sm hover:border flex items-center 
            justify-center cursor-pointer text-center text-gray-600 font-[500] duration-500 transition ease-in-out 
            hover:bg-gradient-to-t from-slate-400 to-slate-300 hover:text-white"
              >
                <div className="flex flex-col items-center justify-center gap-1">
                  <img
                    src="https://img.icons8.com/?size=100&id=11908&format=png&color=000000"
                    alt="not img"
                  />
                  <div className="p-2 text-sm">
                    <div>ประกาศ/ข้อบังคับ/หลักเกณฑ์</div>
                    <div className="text-sm">การเสนอขอตำแหน่งทางวิชาการ</div>
                  </div>
                </div>
              </Link>
              <Link
                to={"/pages/academic/q&a"}
                className="hover:scale-105 rounded-lg hover:shadow-sm hover:border flex items-center 
            justify-center cursor-pointer text-center text-gray-600 text-[30px] font-[600] duration-500 transition ease-in-out 
            hover:bg-gradient-to-t from-slate-400 to-slate-300 hover:text-white"
              >
                <div className="flex flex-col items-center justify-center ">
                  <img
                    src="https://img.icons8.com/?size=100&id=bltoLactaWyM&format=png&color=000000"
                    alt="not img"
                  />
                </div>
              </Link>
              <Link
                to={"/pages/academic/2"}
                className="hover:scale-105 rounded-lg hover:shadow-sm hover:border flex items-center 
            justify-center cursor-pointer text-center text-gray-600 font-[500] duration-500 transition ease-in-out 
            hover:bg-gradient-to-t from-slate-400 to-slate-300 hover:text-white"
              >
                <div className="flex flex-col items-center justify-center gap-1">
                  <img
                    src="https://img.icons8.com/?size=100&id=4VdgitiyspJ9&format=png&color=000000"
                    alt="not img"
                  />
                  <div className="p-2">
                    <div>ผลงานทางวิชาการประกอบ</div>
                    <div className="text-sm">การเสนอขอตำแหน่งทางวิชาการ</div>
                  </div>
                </div>
                <span className="border-r-2 text-gray-600"></span>
              </Link>

              <Link
                to={"/pages/academic/checklist"}
                className="hover:scale-105 rounded-lg hover:shadow-sm hover:border flex items-center 
            justify-center cursor-pointer text-center text-gray-600 font-[500] duration-500 transition ease-in-out 
            hover:bg-gradient-to-t from-slate-400 to-slate-300 hover:text-white"
              >
                <div className="flex flex-col items-center justify-center gap-1">
                  <img
                    src="https://img.icons8.com/?size=100&id=DVzc1vi8FDJt&format=png&color=000000"
                    alt="not img"
                  />
                  <div className="p-2">
                    <div>การเตรียมเอกสารประกอบ</div>
                    <div className="text-sm">การเสนอขอตำแหน่งทางวิชาการ</div>
                  </div>
                </div>
              </Link>
            </div>
            {/* banner section */}
            <div className="my-5 shadow-md rounded-lg overflow-hidden">
              <div className="bg-fixed sm:bg-local overflow-y-auto h-[300px] md:h-[500px] w-full">
                <img
                  className="object-cover "
                  src="https://w1.med.cmu.ac.th/personnel/files/2022/03/Academic-Clinic.png"
                  alt="not img"
                />
                <img
                  className="object-cover "
                  src="https://w1.med.cmu.ac.th/personnel/files/2022/03/Academic-Clinic.png"
                  alt="not img"
                />
              </div>
            </div>
            {/* banner section */}

            {/* Calendar section */}
            <div className="mt-5 bg-white border shadow-sm rounded-lg p-2">
              <h3>ตารางการจองคิว</h3>
              <Calendar
                onSelect={handleDateChange}
                renderCell={(date) => {
                  const bookingsForDate = getBookingsForDate(date);
                  return bookingsForDate.length > 0 ? (
                    <div className="flex flex-col items-center">
                      {bookingsForDate.map((booking, index) => (
                        <Badge
                          key={index}
                          content={booking.name}
                          style={{
                            backgroundColor: "#ffce45",
                            color: "#000",
                            margin: "2px",
                          }}
                        />
                      ))}
                    </div>
                  ) : null;
                }}
              />
              {selectedDate && (
                <p>Selected Date: {selectedDate.toDateString()}</p>
              )}
            </div>
            {/* End of Calendar section */}
          </div>
        </div>

        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-10 border-b-4 border-gray-700 hover:border-gray-500 
  rounded fixed left-1/2 bottom-[70px] md:bottom-[85px] transform -translate-x-1/2 z-10 -hue-rotate-90 w-full md:w-auto text-xl "
        >
          <div className="flex items-center gap-3">
            <i className="fa fa-list"></i>
            <div>จองคิวการใช้บริการการขอตำแหน่งทางวิชาการ</div>
          </div>
        </button>
      </div>
      <Footer />
    </>
  );
}
