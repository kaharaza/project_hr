import Navbar from "../../../component/navbar";
import Footer from "../../../component/footer";
import { Link } from "react-router-dom";

export default function QA() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <div className=" bg-gradient-to-b from-gray-100 to-gray-50 h-screen md:h-full">
          <div className="container mx-auto max-w-5xl py-[100px] md:py-[150px] px-10 sm:px-20 md:px-0">
            <div className="text-2xl md:text-3xl font-[600] mb-8 text-gray-600">
              คำถามที่พบบ่อย ??
            </div>
            {/* banner section */}
            <div className="my-5 shadow-md rounded-lg overflow-hidden">
              <div className="bg-fixed sm:bg-local overflow-y-auto h-full md:h-[600px] w-full">
                <img
                  className="object-cover w-full "
                  src="https://w1.med.cmu.ac.th/personnel/files/2022/03/QA-Academic-729x1024.png"
                  alt="not img"
                />
              </div>
            </div>
            {/* banner section */}
            <div className="pt-5">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-2xl md:text-3xl font-[600] text-gray-600">
                  การยื่นเสนอขอตำแหน่งผ่านระบบ Online
                </div>
                <Link
                  to={
                    "https://o365cmu-my.sharepoint.com/:b:/g/personal/sophon_m_cmu_ac_th/Ef1A28kYVN9Asgt1_lp-XxkBf86L4d44aC9GmsbP-yo9-A?e=a6MPEU"
                  }
                  download
                  className="text-white font-[600] bg-red-400 p-2 mx-3 w-full md:w-1/6 hover:no-underline hover:bg-gray-300 hover:text-red-400 rounded-sm"
                >
                  Download PDF
                </Link>
              </div>
              <div className="my-5 shadow-md  overflow-hidden">
                <iframe
                  src="https://o365cmu-my.sharepoint.com/personal/sophon_m_cmu_ac_th/_layouts/15/embed.aspx?UniqueId=c9db40fd-5418-40df-b20b-75fe5a7e5f19"
                  className="h-[500px] md:h-[600px] w-full"
                  frameborder="0"
                  scrolling="no"
                  allowfullscreen
                  title="QA"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
