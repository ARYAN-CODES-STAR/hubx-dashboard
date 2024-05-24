import React from "react";
import Graph from "./Graph";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        {/* Left Side */}
        <div className="flex items-center space-x-2">
          <i className="fa-solid fa-calendar bg-red-500 text-white p-2 rounded-full"></i>
          <span className="text-xl font-semibold text-gray-500">
            Your School
          </span>
        </div>

        {/* Center Side */}
        <div className="flex items-center space-x-6 mr-24">
          <div className="flex items-center space-x-2">
            <div>
              <span className="font-bold">New Signups</span>
              <hr className="border-b-2 border-red-500 mt-2" />
            </div>
          </div>

          <span className="text-gray-500">Revenue</span>
          <span className="text-gray-500">Product Sales</span>
          <span className="text-gray-500">Active Learners</span>
          <div className="flex items-center space-x-2 bg-slate-200 p-3 rounded-full">
            <span className="text-gray-500">Last 7 days</span>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4"></div>
      </nav>

      <div className="flex">
        {/* Graph Section */}
        <div className="w-2/3 p-4">
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-semibold mb-4">Graph</h2>
            <div className="h-96 bg-gray-200 p-4 rounded-lg">
              <Graph
                className="bg-red-500 -mt-3 "
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
        </div>

        <div className="w-1/3 p-4 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* First Box */}
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <i className="fa-solid fa-user text-red-500 mb-2 text-4xl"></i>
              <div className="text-gray-700 text-sm">All users</div>
              <div className="text-gray-500 text-xl font-bold">1</div>
            </div>

            {/* Second Box */}
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <i className="fa-solid fa-envelope text-red-500 mb-2 text-4xl"></i>
              <div className="text-gray-700 text-sm">Conversions</div>
              <div className="text-gray-500 text-xl font-bold">0%</div>
            </div>

            {/* Third Box */}
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <i className="fa-solid fa-bell text-red-500 mb-2 text-4xl"></i>
              <div className="text-gray-700 text-sm">30 days sales</div>
              <div className="text-gray-500 text-xl font-bold">0</div>
            </div>

            {/* Fourth Box */}
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <i className="fa-solid fa-cog text-red-500 mb-2 text-4xl"></i>
              <div className="text-gray-700 text-sm">Avg time</div>
              <div className="text-gray-500 text-xl font-bold">0</div>
            </div>

            {/* Fifth Box */}
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <i className="fa-solid fa-chart-line text-red-500 mb-2 text-4xl"></i>
              <div className="text-gray-700 text-sm">Courses</div>
              <div className="text-gray-500 text-xl font-bold">0</div>
            </div>

            {/* Sixth Box */}
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <i className="fa-solid fa-sign-out-alt text-red-500 mb-2 text-4xl"></i>
              <div className="flex flex-col">
                <div className="text-gray-700 text-sm">Course categories</div>
                <div className="text-gray-500 text-xl font-bold">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
