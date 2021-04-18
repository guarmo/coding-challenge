import React from "react";

const Input = () => {
  return (
    <form className="flex items-center w-full">
      <input
        type="text"
        placeholder="Insert geolocation box coordinates..."
        className="w-full h-10 rounded p-2"
      />
      <button className="ml-2 w-1/3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Search
      </button>
    </form>
  );
};

export default Input;
