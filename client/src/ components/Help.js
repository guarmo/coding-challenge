import React from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";

const Help = () => {
  return (
    <div className="mb-2 text-white has-tooltip self-start">
      <BsFillQuestionCircleFill />
      <span className="tooltip rounded shadow-lg p-1 bg-gray-100 text-gray-600 -mt-8'">
        Use comma separated coordinates: left, bottom, right top <br />
        <span className="font-bold">Left</span> is the westernmost side. <br />
        <span className="font-bold">Bottom</span> is the southernmost side.{" "}
        <br />
        <span className="font-bold">Right</span> is the easternmost side. <br />
        <span className="font-bold">Top</span> is the northernmost side. <br />
        Find bounding boxes at{" "}
        <a
          className="underline"
          href="http://bboxfinder.com/"
          rel="noreferrer"
          target="_blank"
        >
          bbox finder
        </a>
      </span>
    </div>
  );
};

export default Help;
