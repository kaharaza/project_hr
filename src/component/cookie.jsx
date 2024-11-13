import React, { useState, useEffect } from "react";

export default function Cookie() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    localStorage.setItem("cookiesAccepted", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 w-full p-4 h-28 bg-white border-t border-gray-200 sm:flex sm:p-6 dark:bg-gray-800 dark:border-gray-600">
      <div className="flex items-center justify-between w-full">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This website uses cookies to enhance the user experience. By
          continuing to browse the site, you are agreeing to our use of cookies.
        </p>
        <button
          onClick={handleAccept}
          type="button"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          I Accept
        </button>
      </div>
    </div>
  );
}
