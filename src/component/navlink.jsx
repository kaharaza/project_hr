import { Link, useLocation } from "react-router-dom";

export default function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname.includes(to);

  console.log(isActive);
  console.log(to);

  return (
    <>
      <Link
        to={to}
        className={`block py-2 px-3 transition-colors duration-200 text-md text-white 
    ${
      isActive
        ? "text-gray-300 md:text-white border-b-4 border-[#5eafd2] transition-all duration-500 ease-in hover:no-underline hover:text-gray-50 active:text-gray-300"
        : "hover:no-underline hover:text-gray-300"
    }
    rounded md:bg-transparent md:p-0`}
      >
        <span>{children}</span>
      </Link>
    </>
  );
}
