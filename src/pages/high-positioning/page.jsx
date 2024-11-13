import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import Modal from "../../component/modal";
import { useState } from "react";
import { textTypeT1, textTypeT2, textTypeT3 } from "../../inc/ArrayText";

export default function HighPositioning() {
  const [titleModal, setTitleModal] = useState("");
  const [linkDownload, setLinkDownload] = useState("");
  const [preViewUrl, setPreViewUrl] = useState("");
  const [showModal, setShowModal] = useState(false);

  const showModalPreview = (data) => {
    setTitleModal(data.title);
    setLinkDownload(data.linkDownload);
    setPreViewUrl(data.preViewUrl);
    setShowModal(true); // Show modal
  };

  const closeModal = () => setShowModal(false); // Close modal

  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="bg-gradient-to-b from-gray-100 to-gray-50 h-full">
          <div className="container mx-auto max-w-5xl py-[100px] md:py-[150px] px-10 sm:px-20 md:px-0">
            <h2 className="text-3xl font-semibold mb-4 text-gray-600">
              การกำหนดตำแหน่งที่สูงขึ้น
            </h2>
            <p className="text-xl font-semibold mb-6 text-blue-900">
              เอกสารประกอบการอบรมเชิงปฏิบัติการการเขียนประเมินค่างานเพื่อกำหนดกรอบตำแหน่ง
            </p>
            <div className="my-5 px-3 py-3 border-double border-4 border-indigo-600 shadow-md overflow-auto h-[600px]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[textTypeT1, textTypeT2, textTypeT3].map((textType, index) => (
                  <div key={index} className="flex flex-col">
                    <h3 className="border-dotted border-2 border-indigo-600 px-3 py-2 mb-3 h-[70px] text-lg font-semibold">
                      <i className="fa fa-file mr-2 text-3xl text-indigo-600"></i>
                      {index === 0
                        ? "แบบฟอร์มประเมินค่างาน"
                        : index === 1
                        ? "คู่มือการเขียน"
                        : "เอกสารประกอบอื่น ๆ"}
                    </h3>
                    <div className="border-dotted border-2 border-indigo-600 shadow-md px-3 py-3 rounded-lg flex flex-col gap-3 h-full">
                      {textType.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => showModalPreview(item)}
                          className="text-start bg-gradient-to-tr from-gray-400 to-blue-500 transition duration-300 hover:bg-gradient-to-tl hover:from-blue-500 hover:to-teal-400 hover:scale-105 px-3 py-2 text-white font-semibold rounded-md"
                        >
                          {item.title}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-1 border-b-4 border-gray-700 hover:border-gray-500 
  rounded fixed left-1/2 bottom-[70px] md:bottom-[85px] transform -translate-x-1/2 z-10 -hue-rotate-90 w-full md:w-auto text-xl md:text-3xl"
        >
          <div className="flex items-center gap-3 px-4">
            <i className="fa fa-list"></i>
            <div>แบบสำรวจความประสงค์ในการขอกำหนดตำแหน่งที่สูงขึ้น</div>
          </div>
        </button>
      </div>
      <Footer />
      <Modal
        id="default-modal"
        title={titleModal}
        size="max-w-4xl"
        linkDownload={linkDownload}
        show={showModal}
        onClose={closeModal} // Pass onClose handler to close the modal
      >
        <iframe
          src={preViewUrl}
          className="w-full h-[500px]"
          allowFullScreen
          title="Preview"
        ></iframe>
      </Modal>
    </>
  );
}
