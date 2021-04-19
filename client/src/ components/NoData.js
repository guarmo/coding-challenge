import React from "react";

const NoData = ({ error }) => {
  return (
    <div className="overflow-hidden w-screen h-full flex flex-col items-center justify-center">
      {error ? (
        <p className="w-1/3 text-center text-white">{error}</p>
      ) : (
        <p className="w-1/3 text-center text-white">Nothing found.</p>
      )}
    </div>
  );
};

export default NoData;
