import React from "react";

const heatmap = () => {
  return (
    <div className="grid grid-cols-2 h-[100vh]">
      <div className=" bg-blue-400 grid grid-rows-2">
        <div className=" bg-red-500 grid grid-cols-2">
          <div className=" bg-blue-500 grid grid-rows-2">
            <div></div>
            <div className="grid grid-cols-2">
              <div></div>
              <div className=" bg-red-300 grid grid-cols-2 grid-rows-2">
                <div></div>
                <div></div>
                <div></div>
                <div className=" bg-blue-800"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2">
            <div></div>
            <div className=" bg-blue-500 grid grid-cols-2 grid-rows-2">
              <div></div>
              <div className=" bg-blue-800"></div>
              <div></div>
              <div></div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className=" bg-green-500 grid grid-cols-2">
          <div className=" bg-yellow-500 grid grid-cols-2 grid-rows-2">
            <div></div>
            <div></div>
            <div className=" bg-blue-500 grid grid-cols-2 grid-rows-2">
              <div></div>
              <div></div>
              <div className="bg-yellow-300 grid grid-cols-2 grid-rows-2">
                <div></div>
                <div></div>
                <div className="bg-green-500"></div>
                <div></div>
              </div>
              <div></div>
            </div>
            <div></div>
          </div>
          <div className=" grid grid-cols-2 grid-rows-2">
            <div></div>
            <div></div>
            <div></div>
            <div className="bg-blue-800 grid grid-cols-2 grid-rows-2">
              <div></div>
              <div></div>
              <div></div>
              <div className=" bg-yellow-300 grid grid-cols-2 grid-rows-2">
                <div></div>
                <div></div>
                <div></div>
                <div className=" bg-red-500 grid grid-cols-2 grid-rows-2">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div className="bg-purple-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-yellow-400 grid grid-rows-2">
        <div className="grid grid-cols-2">
          <div className="grid grid-cols-2 grid-rows-2">
            <div></div>
            <div></div>
            <div></div>
            <div className=" bg-blue-600 grid grid-cols-2 grid-rows-2">
              <div></div>
              <div></div>
              <div></div>
              <div className=" bg-red-600 grid grid-cols-2 grid-rows-2">
                <div></div>
                <div></div>
                <div></div>
                <div className=" bg-purple-600"></div>
              </div>
            </div>
          </div>
          <div className=" bg-green-500 grid grid-cols-2 grid-rows-2">
            <div></div>
            <div></div>
            <div></div>
            <div className=" bg-purple-600 grid grid-cols-2 grid-rows-2">
              <div></div>
              <div></div>
              <div></div>
              <div className=" bg-pink-600"></div>
            </div>
          </div>
        </div>
        <div className=" bg-blue-500 grid grid-cols-2">
          <div className="grid grid-cols-3 grid-rows-3">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div className="bg-black grid grid-cols-3 grid-rows-3">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div className=" bg-white"></div>
              <div></div>
            </div>
            <div></div>
          </div>
          <div className=" bg-red-500 grid grid-cols-2 grid-rows-2">
            <div></div>
            <div></div>
            <div className=" bg-yellow-200 grid grid-cols-2 grid-rows-2">
              <div></div>
              <div className=" bg-pink-600 grid grid-cols-2 grid-rows-2">
                <div></div>
                <div className=" bg-purple-600"></div>
                <div></div>
                <div></div>
              </div>
              <div></div>
              <div></div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default heatmap;
