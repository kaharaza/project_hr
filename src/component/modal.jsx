import { Link } from "react-router-dom";

export default function Modal(props) {
  return (
    <div
      id={props.id}
      tabIndex="-1"
      aria-hidden={!props.show}
      data-modal-backdrop="static"
      className={`fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-[calc(100%-1rem)] max-h-full transition-opacity duration-300 ${
        props.show ? "flex" : "hidden"
      }`}
      onClick={props.onClose} // Close modal when clicking outside the modal content
    >
      <div className={`relative p-4 w-full ${props.size} max-h-full`} onClick={(e) => e.stopPropagation()}>
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold text-gray-900">{props.title}</h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              onClick={props.onClose} // Close on button click
            >
              <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">{props.children}</div>
          <div className="flex justify-end items-center p-4 md:p-5 border-t dark:border-gray-600">
            {props.linkDownload && (
              <Link
                to={props.linkDownload}
                target="_blank"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 rounded-sm"
              >
                ดาวน์โหลด
              </Link>
            )}
            <button
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 bg-white border border-gray-700 hover:bg-gray-100 hover:text-blue-700"
              onClick={props.onClose}
            >
              ยกเลิก
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
