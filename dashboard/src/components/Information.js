import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import Modal from "./Modal";

const Information = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [invites, setInvites] = useState(10);
  const [duration, setDuration] = useState(1);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const calculatePrice = () => {
      // For calculation
      return invites * duration * 10;
    };

    const calculatePercentage = () => {
      const price = calculatePrice();
      return (price / 24000) * 100;
    };

    setPercentage(calculatePercentage());
  }, [invites, duration]);

  const color = "rgba(75, 192, 192, 0.6)";

  const data = {
    labels: ["Price", "remaining"],
    datasets: [
      {
        label: "Price",
        data: [percentage, 100 - percentage],
        backgroundColor: ["#FF6384", "#36A2EB"],
        borderColor: "#CCCCCC",
        borderWidth: 1,
        weight: 0.01,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-slate-100">
      {/* 1st Div */}

      <div className="bg-white p-4 rounded-lg shadow text-center">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center justify-center text-white rounded-full w-12 h-12">
              <i class="fa-solid fa-user-ninja text-red-500 mb-2 text-4xl"></i>
            </div>
            <div className="ml-2 font-bold text-gray-500">New users</div>
            <div className="ml-4 text-white bg-red-500 px-2 py-1 rounded-full">
              See all
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <i class="fa-regular fa-face-smile-beam text-red-500 mb-2 text-4xl p-3 bg-slate-200"></i>
            <div className="ml-2">
              <div className="text-gray-700">hub X</div>
              <div className="text-gray-500">24 minutes</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd Div  */}

      <div className="bg-white p-4 rounded-lg shadow text-center">
        <div className="flex items-center justify-center">
          <i className="fa-solid fa-book text-4xl text-gray-500"></i>
          <div className="ml-2 text-gray-700">How to sell courses blog</div>
          <div className="ml-2 text-white bg-red-500 px-2 py-1 rounded-full">
            See all
          </div>
        </div>
        <ul style={{ listStyleType: "square" }} className="text-left mt-4 ml-4">
          <li className="flex items-center justify-between">
            <span className="text-red-500 mt-3 mb-3">
              Blended Learning: What it is, Why?
            </span>
            <span></span>
            <span>2 days</span>
          </li>
          <li className="flex items-center justify-between">
            <span className=" text-red-500 mb-3">Join the course live</span>
            <span></span>
            <span>5 days</span>
          </li>
          <li className="flex items-center justify-between">
            <span className=" text-red-500 mb-3">
              12 steps in creating Awesome Live
            </span>
            <span></span>
            <span>12 days</span>
          </li>
          <li className="flex items-center justify-between">
            <span className=" text-red-500 mb-3">Guy Kawasaki story</span>
            <span></span>
            <span>15 days</span>
          </li>
        </ul>
      </div>

      {/* 3rd div */}

      <div className="bg-white h-40 p-4 rounded-lg shadow flex flex-col gap-4">
        <div className="flex gap-1 h-[20%] justify-start items-center">
          <div>
            <i className="fa-solid fa-chart-simple text-2xl text-gray-500"></i>
          </div>
          <div className="font-semibold">Events Log</div>
          <div className="text-white bg-red-500 px-2 py-1 rounded-full flex justify-center items-center h-fit">
            See all
          </div>
        </div>
        <div className="flex justify-between">
          <div className=" flex justify-start items-start gap-2">
            <div>
              <i class="fa-solid fa-key text-2xl text-gray-500"></i>
              {/* <i className="fa-solid fa-chart-simple"></i> */}
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-red-500">hubx</div>
              <div>Logged in</div>
              <div className="text-red-500">more info</div>
            </div>
          </div>
          <div className="font-semibold text-gray-600">22 minutes</div>
        </div>
      </div>

      {/* 4th div */}

      <div className="bg-white p-4 rounded-lg shadow flex flex-col justify-between h-52">
        <div className="h-[80%] w-full flex justify-between">
          <div className="flex flex-col">
            <div className="text-lg font-semibold">Trial period</div>
            <div className="flex flex-col border-2 bg-red-500 shadow-lg shadow border-white rounded-full h-24 w-24 justify-center items-center text-white">
              <div>30</div>
              <div>DAYS LEFT</div>
            </div>
          </div>
          <div>
            <i class="fa-regular fa-hourglass-half text-3xl"></i>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-pink-500 font-bold text-white rounded-full  px-3 py-1">
            Upgrade now!
          </div>
        </div>
      </div>

      {/* Your other divs */}
      <div className="col-span-4 mt-5 mb-5">
        <div className="bg-white p-4 rounded-lg shadow text-center w-fit mx-auto">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Invite People
          </button>
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div className="flex flex-row justify-between w-full">
              <div>
                <h2 className="text-2xl mb-4">Invite People to Event</h2>

                <div className="mb-4">
                  <label className="block mb-2">
                    Number of Invites: {invites}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={invites}
                    onChange={(e) => setInvites(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">
                    Duration of Event (hours): {duration}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="24"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="mb-4">
                <Doughnut data={data} />
              </div>
            </div>
            <button
              className="bg-green-500 text-white p-2 rounded"
              onClick={() => setIsOpen(false)}
            >
              Submit
            </button>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Information;
