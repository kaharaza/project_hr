import Navbar from "../../../component/navbar";
import Footer from "../../../component/footer";

export default function Academic1() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <div className=" bg-gradient-to-b from-gray-100 to-gray-50 h-screen md:h-full">
          <div className="container mx-auto max-w-5xl py-[100px] md:py-[150px] px-10 sm:px-20 md:px-0  ">
            <div className="text-2xl md:text-3xl font-[900] mb-8 text-gray-600">
                ขั้นตอนการขอตำแหน่งทางวิชาการ
            </div>
            {/* banner section */}
            <div className="my-5 shadow-md rounded-lg overflow-hidden">
              <div className="bg-fixed sm:bg-local overflow-y-auto h-full md:h-[600px] w-full">
                <img
                  className="object-cover "
                  src="https://w1.med.cmu.ac.th/personnel/files/2023/12/SOP-%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%AA%E0%B8%99%E0%B8%AD%E0%B8%82%E0%B8%AD%E0%B8%95%E0%B8%B3%E0%B9%81%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3-1458x2048.jpg"
                  alt="not img"
                />
              </div>
            </div>
            {/* banner section */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
