import React, { useState } from "react";
import setLoadingAndFetch from "../utils/setLoadingAndFetch";
import { clearData, clearError } from "../actions/data";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Form = ({ clearData, clearError }) => {
  const [coords, setCoords] = useState("");

  return (
    <>
      <div className="w-full max-w-screen-xl">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            clearError();
            await clearData();
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
            pattern="^(-?\d*\.?\d*)(,-?\d*\.?\d*)*$"
            required
          />
          <button
            data-testid="search-button"
            className="ml-2 w-1/3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};

Form.propTypes = {
  clearData: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
};

export default connect(null, { clearData, clearError })(Form);
