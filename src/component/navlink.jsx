import { Link, useLocation } from "react-router-dom";

export default function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname.includes(to);

  return (
    <Link
      to={to}
      className={`block py-2 px-3 transition-colors duration-200 text-xl text-gray-800 
          ${
            isActive
              ? "text-gray-500 md:text-gray-500"
              : "hover:no-underline hover:text-gray-500"
          }
          bg-white rounded md:bg-transparent md:p-0`}
    >
      {children}
    </Link>
  );
}
