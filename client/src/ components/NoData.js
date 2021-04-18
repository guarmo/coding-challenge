import React from "react";

const NoData = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
      <p className="w-1/3 text-center text-white">No data found...</p>
    </div>
  );
};

export default NoData;
