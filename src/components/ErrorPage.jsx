import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen border-4 border-red-500">
      <div className="flex flex-col gap-3 items-center justify-center border border-blue-500 h-screen w-2/6">
        <p className="text-7xl font-bold text-gray-700">404</p>
        <p className="text-3xl">Page Not Found</p>
        <Link to="/">
          <button className="border border-black px-5 py-2 hover:bg-black hover:text-white">
            Contacts Page
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
