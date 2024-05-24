import React from "react";

const Navbar = () => {
  return (
    <div className="shadow bg-gray-100">
      <nav className="bg-white shadow p-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-semibold ml-2">Dashboard</span>
          <div className="flex items-center space-x-1">
            <i className="fas fa-plus bg-slate-200 p-2 rounded-full"></i>
            <span className="text-gray-600 text-sm">Create Course</span>
          </div>
          <div className="flex items-center space-x-1">
            <i className="fas fa-eye bg-slate-200 p-2.5 rounded-full"></i>
            <span className="text-gray-600 text-sm">Preview Home Page</span>
          </div>
          <div className="flex items-center space-x-1">
            <i className="fas fa-eye bg-slate-200 p-2.5 rounded-full"></i>
            <span className="text-gray-600 text-sm">
              Preview after login page
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <i className="fa-solid fa-power-off bg-gray-200 p-2.5 rounded-full"></i>
            <span className="text-gray-600 text-sm">View Welcome screen</span>
          </div>
        </div>
        <div className="flex items-center space-x-1 mr-3">
          <i className="fa-solid fa-question bg-red-400 p-3 rounded-full"></i>
          <span className="text-gray-600 text-sm">Help</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
