import Navbar from "../../../component/navbar";
import Footer from "../../../component/footer";
import Modal from "../../../component/modal";
import { useState } from "react";
import { textTypeT5 } from "../../../inc/ArrayText";
import { Link } from "react-router-dom";

export default function CheckList() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const showModalPreview = (data) => {
    setTitleModal(data);
    setShowModal(true); // Show modal
  };

  const closeModal = () => setShowModal(false); // Close modal

  const Button1 = () => {
    return textTypeT5.map((item) => (
      <>
        <div className="flex justify-between items-start md:items-center hover:no-underline active:no-underline mb-5">
          <div className="flex items-center gap-4">
            <div className="hidden md:flex">
              <i class="fa-solid fa-file-lines text-5xl text-blue-950"></i>
            </div>
            <div className="flex flex-col">
              <div className="font-[700] text-gray-500">{item.title}</div>
              <div className="text-blue-950 font-[600]">Docx</div>
            </div>
          </div>

          <Link
            to={item.linkDownload}
            className="bg-blue-700 text-white px-2 py-1 rounded-lg"
          >
            <i className="fa fa-download mr-2"></i>
            Download
          </Link>
        </div>
      </>
    ));
  };

  const Button2 = () => {
    return (
      <>
        <div className="flex flex-col gap-4">
          <div>
            <img
              src="https://w1.med.cmu.ac.th/personnel/files/2022/07/flow-1-1024x576.png"
              alt=""
            />
          </div>
          <div className="p-5">
            <button
              className="bg-gradient-to-b from-blue-700 to-blue-800  hover:bg-gradient-to-b hover:from-blue-800 hover:to-blue-700 
            text-white px-2 py-1 rounded-lg w-full  h-20 text-xl font-[500]"
            >
              รูปแบบการจัดทำเอกสารประกอบการสอน และเอกสารคำสอน
              ประกอบการขอตำแหน่งทางวิชาการ ตามประกาศคณะสัตวแพทย์
              มหาวิทยาลัยเชียงใหม่
            </button>
          </div>
          <div className="border border-gray-500 border-5"></div>
          <div>
            <img
              src="https://w1.med.cmu.ac.th/personnel/files/2022/07/7-1024x576.png"
              alt=""
            />
          </div>
          <div className="border border-gray-500 border-5"></div>
          <Link
            to="/checklist"
            className="p-10 no-underline text-white  cursor-pointer hover:no-underline 
            bg-gradient-to-b from-blue-800 to-blue-700 transition-all duration-500 ease-in-out hover:bg-gradient-to-b hover:from-blue-300 hover:to-blue-800 hover:text-white w-full h-60 rounded-lg shadow-md flex justify-center items-center gap-3 "
          >
            <div className="flex flex-col justify-center items-center ">
              <h1>แบบฟอร์มการส่ง VDO การสอน</h1>
              <div className="text-xl">
                เพื่อประกอบการนำเสนอขอตำแหน่งทางวิชาการ
              </div>
              <div className="text-sm font-[500]">
                คณะสัตวแพทยศาสตร์ มหาวิทยาลัยเชียงใหม่
              </div>
              <div className="flex gap-10 justify-center items-center mt-5">
                <div className="bg-gray-100  px-3 py-3 rounded-lg shadow-[1px_1px_10px_1px_#ffffff]">
                  <p className="text-3xl text-gray-600 font-bold">คลิกที่นี่</p>
                </div>
                <div>
                  <i class="fa-solid fa-video text-7xl text-gray-100"></i>
                </div>
              </div>
            </div>
          </Link>

          <div className="border border-gray-500 border-5"></div>

          <div className="flex justify-center items-center">
            <img
              className=""
              src="https://w1.med.cmu.ac.th/personnel/files/2022/01/Checklist-729x1024.png"
              alt=""
            />
          </div>
        </div>
      </>
    );
  };

  const Button3 = () => {
    return (
      <>
        <div>
          <iframe
            src="https://o365cmu-my.sharepoint.com/personal/chonnikarn_sa_cmu_ac_th1/_layouts/15/embed.aspx?UniqueId=48be14c5-a34f-447f-8c51-1f04eb3ee2e8"
            className="w-full h-screen"
            frameborder="0"
            allowfullscreen
            title="คู่มือการกรอกแบบตรวจสอบ (1)"
          ></iframe>
        </div>
      </>
    );
  };

  const Button4 = () => {
    return (
      <>
        <div>
          <img
            src="https://w1.med.cmu.ac.th/personnel/files/2023/10/%E0%B8%82%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%AA%E0%B8%99%E0%B8%AD%E0%B8%82%E0%B8%AD%E0%B8%95%E0%B8%B3%E0%B9%81%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3-1024x576.png"
            alt=""
          />
        </div>
      </>
    );
  };

  const Button5 = () => {
    return (
      <>
        <Link
          to={
            "https://w1.med.cmu.ac.th/personnel/files/2022/07/Peer-review-form.docx"
          }
          target="_blank"
        >
          <div className="relative">
            <img
              src="https://w1.med.cmu.ac.th/personnel/files/2022/07/flow-2-1024x576.png"
              alt=""
            />
          </div>
        </Link>
      </>
    );
  };

  const Button6 = () => {
    return (
      <>
        <div>
          <iframe
            src="https://o365cmu-my.sharepoint.com/personal/chonnikarn_sa_cmu_ac_th1/_layouts/15/embed.aspx?UniqueId=3ddfe86a-8cff-466b-aa5d-b0e1804d3f6a"
            className="w-full h-screen"
            frameborder="0"
            allowfullscreen
            title="คู่มือการกรอกแบบประวัติส่วนตัว (1)"
          ></iframe>
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div className="relative">
        <div className=" bg-gradient-to-b from-gray-100 to-gray-50 h-screen md:h-full">
          <div className="container mx-auto max-w-5xl py-[100px] md:py-[150px] px-10 sm:px-20 md:px-0  ">
            <div className="text-2xl md:text-3xl font-[900] mb-8 text-gray-600">
              การเตรียมเอกสารประกอบและ การบันทึก VDO
              ในการเสนอขอตำแหน่งทางวิชาการ
            </div>
            {/* Img Check List */}
            <div className="flex justify-center">
              <img
                className="rounded-lg"
                src="https://w1.med.cmu.ac.th/personnel/files/2022/10/checklist-2.png"
                alt=""
              />
            </div>
            {/* Img Check List */}

            {/* banner section */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-3 my-5">
              <h1 className="text-3xl text-gray-500">Menu</h1>
              <div className="bg-fixed overflow-y-scroll h-full md:h-[300px] w-full shadow-xl p-5">
                <div className="flex flex-col gap-3">
                  <div
                    onClick={() =>
                      showModalPreview({
                        title: "เอกสารประกอบการขอตำแหน่งทางวิชาการ",
                        type: "download",
                      })
                    }
                    className="flex flex-row justify-start items-center h-20 w-full gap-5 py-5 cursor-pointer transition-all duration-300 ease-in-out hover:scale-95 text-gray-500 hover:text-purple-950"
                  >
                    <div className="font-bold text-6xl text-purple-950  px-4 ">
                      <i class="fa-solid fa-clipboard-check"></i>
                    </div>
                    <div className="flex flex-col justify-start items-start w-full">
                      <p className="text-xl font-bold ">
                        <span className="text-orange-500 font-bold text-5xl mr-2">
                          Download
                        </span>{" "}
                        เอกสารประกอบ การขอตำแหน่งทางวิชาการ
                      </p>
                    </div>
                  </div>

                  <div
                    onClick={() =>
                      showModalPreview({
                        title: "เอกสารประกอบการสอน เอกสารคำสอน และ VDO การสอน",
                        type: "video",
                      })
                    }
                    className="flex flex-row justify-start items-center h-20 w-full gap-5 py-5 cursor-pointer transition-all duration-300 ease-in-out hover:scale-95 text-gray-500 hover:text-purple-950"
                  >
                    <div className="font-bold text-6xl text-purple-950  px-4 ">
                      <i class="fa-solid fa-file-video"></i>
                    </div>
                    <div className="flex flex-col justify-start items-start w-full">
                      <p className="text-xl font-bold ">
                        <span className="text-orange-500 font-bold text-5xl mr-2">
                          เอกสาร
                        </span>
                        ประกอบการสอน เอกสารคำสอน และ VDO การสอน
                      </p>
                    </div>
                  </div>

                  <div
                    onClick={() =>
                      showModalPreview({
                        title:
                          "คู่มือการกรอกแบบตรวจสอบเอกสารประกอบการขอตำแหน่งทางวิชาการ",
                        type: "manual_1",
                      })
                    }
                    className="flex flex-row justify-start items-center h-20 w-full gap-5 py-5 cursor-pointer transition-all duration-300 ease-in-out hover:scale-95 text-gray-500 hover:text-purple-950"
                  >
                    <div className="font-bold text-6xl text-purple-950  px-3 ">
                      <i class="fa-solid fa-book"></i>
                    </div>
                    <div className="flex flex-col justify-start items-start w-full">
                      <p className="text-xl font-bold ">
                        <span className="text-orange-500 font-bold text-5xl mr-1">
                          คู่มือ
                        </span>
                        การกรอกแบบตรวจสอบเอกสารประกอบการขอตำแหน่งทางวิชาการ
                      </p>
                    </div>
                  </div>

                  <div
                    onClick={() =>
                      showModalPreview({
                        title: "แนวทางการจัดเรียงผลงานวิจัย",
                        type: "research",
                      })
                    }
                    className="flex flex-row justify-start items-center h-20 w-full gap-5 py-5 cursor-pointer transition-all duration-300 ease-in-out hover:scale-95 text-gray-500 hover:text-purple-950"
                  >
                    <div className="font-bold text-6xl text-purple-950  px-3 ">
                      <i class="fa-solid fa-book-atlas"></i>
                    </div>
                    <div className="flex flex-col justify-start items-start w-full">
                      <p className="text-xl font-bold ">
                        <span className="text-orange-500 font-bold text-5xl mr-1">
                          แนวทาง
                        </span>
                        การจัดเรียงผลงานวิจัย
                      </p>
                    </div>
                  </div>

                  <div
                    onClick={() =>
                      showModalPreview({
                        title:
                          "แนวทางการประเมินเพื่อตรวจสอบและรับรอง การเผยแพร่คุณภาพผลงานทางวิชาการประเภทหนังสือ หรือตำรา",
                        type: "evaluate",
                      })
                    }
                    className="flex flex-row justify-start items-center h-20 w-full gap-5 py-5 cursor-pointer transition-all duration-300 ease-in-out hover:scale-95 text-gray-500 hover:text-purple-950"
                  >
                    <div className="font-bold text-6xl text-purple-950  px-3 ">
                      <i class="fa-solid fa-book-bookmark"></i>
                    </div>
                    <div className="flex flex-col justify-start items-start w-full">
                      <p className="text-xl font-bold ">
                        <span className="text-orange-500 font-bold text-5xl mr-1">
                          การเผยแพร่
                        </span>
                        การเผยแพร่คุณภาพผลงานประเภทหนังสือ หรือตำรา
                      </p>
                    </div>
                  </div>

                  <div
                    onClick={() =>
                      showModalPreview({
                        title: "คู่มือการกรอกแบบประวัติส่วนตัว (กพอ.03)",
                        type: "profile",
                      })
                    }
                    className="flex flex-row justify-start items-center h-20 w-full gap-5 py-5 cursor-pointer transition-all duration-300 ease-in-out hover:scale-95 text-gray-500 hover:text-purple-950"
                  >
                    <div className="font-bold text-6xl text-purple-950  px-2 ">
                      <i class="fa-solid fa-feather-pointed"></i>
                    </div>
                    <div className="flex flex-col justify-start items-start w-full">
                      <p className="text-xl font-bold ">
                        <span className="text-orange-500 font-bold text-5xl mr-1">
                          การกรอก
                        </span>
                        แบบประวัติส่วนตัว (กพอ.03)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="text-3xl text-gray-500 pt-3">การเตรียมเอกสาร</h1>
              <div className=" rounded-lg overflow-hidden shadow-md">
                <div className="bg-fixed sm:bg-local overflow-y-auto h-full md:h-[500px] w-full">
                  <img
                    className="object-cover "
                    src="https://w1.med.cmu.ac.th/personnel/files/2023/06/%E0%B8%82%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%AA%E0%B8%99%E0%B8%AD%E0%B8%82%E0%B8%AD%E0%B8%95%E0%B8%B3%E0%B9%81%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3-11-1024x576.png"
                    alt="not img"
                  />
                  <img
                    className="object-cover "
                    src="https://w1.med.cmu.ac.th/personnel/files/2023/05/4_1-1024x576.png"
                    alt="not img"
                  />
                </div>
              </div>
            </div>

            {/* banner section */}
          </div>
        </div>
      </div>
      <Modal
        id="default-modal"
        title={titleModal.title}
        size="max-w-4xl md:max-w-7xl"
        linkDownload={""}
        show={showModal}
        onClose={closeModal} // Pass onClose handler to close the modal
      >
        <div className="bg-fixed overflow-y-scroll h-[500px] w-full">
          {titleModal.type === "download" && <Button1 />}
          {titleModal.type === "video" && <Button2 />}
          {titleModal.type === "manual_1" && <Button3 />}
          {titleModal.type === "research" && <Button4 />}
          {titleModal.type === "evaluate" && <Button5 />}
          {titleModal.type === "profile" && <Button6 />}
        </div>
      </Modal>
      <Footer />
    </>
  );
}
