import React from "react";

const NoData = () => {
  return (
    <div className="overflow-hidden w-screen h-full flex flex-col items-center justify-center">
      <p className="w-1/3 text-center text-white">
        Nothing found. Try choosing a smaller region.
      </p>
    </div>
  );
};

export default NoData;
