import Navbar from "../../../component/navbar";
import Footer from "../../../component/footer";
import { useState } from "react";

export default function Research() {
  const [showView1, setShowView1] = useState(false);
  const [showView2, setShowView2] = useState(false);
  const [showView3, setShowView3] = useState(false);
  const [showView4, setShowView4] = useState(false);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-gray-100 to-gray-50 h-screen md:h-full">
        <div className="container mx-auto max-w-5xl py-[100px] md:py-[150px] px-10 sm:px-20 md:px-0  ">
          <div className="text-2xl md:text-3xl font-[900] mb-8 text-gray-600">
            การกำหนดตำแหน่งนักวิจัย
          </div>
          {/* content section */}

          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-start md:items-center hover:no-underline active:no-underline">
              <div className="flex items-center gap-4">
                <div className="hidden md:flex">
                  <i className="fa fa-file-word text-5xl text-blue-700"></i>
                </div>
                <div className="flex flex-col">
                  <div className="font-[700] text-gray-500">
                    แบบตรวจเอกสารประกอบการขอตำแหน่งฯ ของนักวิจัย
                  </div>
                  <div className="text-blue-600 font-[600]">Word</div>
                </div>
              </div>

              <input
                onChange={(e) => setShowView1(e.target.checked)}
                id="default-checkbox1"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                hidden
              />
              <label
                htmlFor="default-checkbox1"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
              >
                {showView1 ? (
                  <div className="bg-red-600  text-white px-2 py-1 rounded-lg">
                    Close
                  </div>
                ) : (
                  <div className="bg-blue-700 text-white px-2 py-1 rounded-lg">
                    Open
                  </div>
                )}
              </label>
            </div>
            <div className="shadow-md mt-5 mb-5">
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  showView1 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <iframe
                  src="https://o365cmu-my.sharepoint.com/personal/sophon_m_cmu_ac_th/_layouts/15/Doc.aspx?sourcedoc={3073d489-2bfe-4233-8ab0-3cffb2a18f61}&action=embedview"
                  className="w-full h-[500px] md:h-[400px]"
                  title="Embedded Document"
                >
                  
                </iframe>
              </div>
            </div>

            <div className="flex justify-between items-start md:items-center hover:no-underline active:no-underline">
              <div className="flex items-center gap-4">
                <div className="hidden md:flex">
                  <i className="fa fa-file-word text-5xl text-blue-700"></i>
                </div>
                <div className="flex flex-col">
                  <div className="font-[700] text-gray-500">
                    แบบแสดงหลักฐานการมีส่วนร่วมในผลงานทางวิชาการ
                  </div>
                  <div className="text-blue-600 font-[600]">Word</div>
                </div>
              </div>

              <input
                onChange={(e) => setShowView2(e.target.checked)}
                id="default-checkbox2"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                hidden
              />
              <label
                htmlFor="default-checkbox2"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
              >
                {showView2 ? (
                  <div className="bg-red-600  text-white px-2 py-1 rounded-lg">
                    Close
                  </div>
                ) : (
                  <div className="bg-blue-700 text-white px-2 py-1 rounded-lg">
                    Open
                  </div>
                )}
              </label>
            </div>
            <div className="shadow-md mb-5 mt-5">
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  showView2 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <iframe
                  src="https://o365cmu-my.sharepoint.com/personal/sophon_m_cmu_ac_th/_layouts/15/Doc.aspx?sourcedoc={c9564660-8f10-4e3e-80aa-f65d3a36762a}&amp;action=embedview"
                  className="w-full h-[500px] md:h-[400px]"
                  frameborder="0"
                  title="Document Preview"
                >
                 
                </iframe>
              </div>
            </div>

            <div className="flex justify-between items-start md:items-center hover:no-underline active:no-underline">
              <div className="flex items-center gap-4">
                <div className="hidden md:flex">
                  <i className="fa fa-file-word text-5xl text-blue-700"></i>
                </div>
                <div className="flex flex-col">
                  <div className="font-[700] text-gray-500">
                    แบบคําขอรับการพิจารณากําหนดตําแหน่งทางวิชาการตำแหน่ง
                    นักวิจัยเชี่ยวชาญพิเศษ (แบบวิจัย 02)
                  </div>
                  <div className="text-blue-600 font-[600]">Word</div>
                </div>
              </div>

              <input
                onChange={(e) => setShowView3(e.target.checked)}
                id="default-checkbox3"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                hidden
              />
              <label
                htmlFor="default-checkbox3"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
              >
                {showView3 ? (
                  <div className="bg-red-600  text-white px-2 py-1 rounded-lg">
                    Close
                  </div>
                ) : (
                  <div className="bg-blue-700 text-white px-2 py-1 rounded-lg">
                    Open
                  </div>
                )}
              </label>
            </div>
            <div className="shadow-md mt-5 mb-5">
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  showView3 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <iframe
                  src="https://o365cmu-my.sharepoint.com/personal/sophon_m_cmu_ac_th/_layouts/15/Doc.aspx?sourcedoc={e66ab298-1b2b-4fd5-ba01-30a21cad7d93}&amp;action=embedview"
                  className="w-full h-[500px] md:h-[400px]"
                  frameborder="0"
                  title="Document Preview"
                >
                 
                </iframe>
              </div>
            </div>

            <div className="flex justify-between items-start md:items-center hover:no-underline active:no-underline">
              <div className="flex items-center gap-4">
                <div className="hidden md:flex">
                  <i className="fa fa-file-word text-5xl text-blue-700"></i>
                </div>
                <div className="flex flex-col">
                  <div className="font-[700] text-gray-500">
                    แบบคําขอรับการพิจารณากําหนดตําแหน่งทางวิชาการตำแหน่งนักวิจัยชำนาญการ
                    นักวิจัยชำนาญการพิเศษ และนักวิจัยเชี่ยวชาญ (แบบวิจัย 01)
                  </div>
                  <div className="text-blue-600 font-[600]">Word</div>
                </div>
              </div>

              <input
                onChange={(e) => setShowView4(e.target.checked)}
                id="default-checkbox4"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                hidden
              />
              <label
                htmlFor="default-checkbox4"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
              >
                {showView4 ? (
                  <div className="bg-red-600  text-white px-2 py-1 rounded-lg">
                    Close
                  </div>
                ) : (
                  <div className="bg-blue-700 text-white px-2 py-1 rounded-lg">
                    Open
                  </div>
                )}
              </label>
            </div>
            <div className="shadow-md mt-5 mb-5">
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  showView4 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <iframe
                  src="https://o365cmu-my.sharepoint.com/personal/sophon_m_cmu_ac_th/_layouts/15/Doc.aspx?sourcedoc={2509249b-a28f-4bcc-a7ab-0c5b6de9bf57}&amp;action=embedview"
                  className="w-full h-[500px] md:h-[400px]"
                  frameborder="0"
                  title="Document Preview"
                >
                </iframe>
              </div>
            </div>
          </div>

          {/* content section */}
        </div>
      </div>

      <Footer />
    </>
  );
}
