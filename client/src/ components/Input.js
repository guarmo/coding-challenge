import React, { useState } from "react";
import setLoadingAndFetch from "../utils/setLoadingAndFetch";

const Input = () => {
  const [coords, setCoords] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await setLoadingAndFetch(coords);
        setCoords("");
      }}
      className="flex items-center w-full"
    >
      <input
        type="text"
        placeholder="Insert comma separated box coordinates..."
        className="w-full h-10 rounded p-2"
        value={coords}
        onChange={(e) => setCoords(e.target.value)}
        pattern="^(\s*-?\d+(\.\d+)?)(\s*,\s*-?\d+(\.\d+)?)*$"
        required
      />
      <button className="ml-2 w-1/3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Search
      </button>
    </form>
  );
};

export default Input;
