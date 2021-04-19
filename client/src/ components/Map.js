import React, { useState } from "react";
import { connect } from "react-redux";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
  Polyline,
} from "react-leaflet";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import Spinner from "./Spinner";
import NoData from "./NoData";

const Map = ({ data: { geoJson, loading, center, error } }) => {
  const [showPoints, setShowPoints] = useState(true);
  const [showPolygons, setShowPolygons] = useState(true);
  const [showLines, setShowLines] = useState(true);

  return (
    <>
      {!geoJson || geoJson.features === [] ? (
        loading ? (
          <Spinner />
        ) : (
          <NoData error={error} />
        )
      ) : (
        <>
          <div className="mt-10">
            <button
              onClick={() => setShowPoints(!showPoints)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {showPoints ? "Hide Points" : "Show Points"}
            </button>
            <button
              onClick={() => setShowPolygons(!showPolygons)}
              className="mx-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              {showPolygons ? "Hide Polygons" : "Show Polygons"}
            </button>
            <button
              onClick={() => setShowLines(!showLines)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              {showLines ? "Hide Lines" : "Show Lines"}
            </button>
          </div>
          <MapContainer
            className="w-full h-full my-5"
            center={center}
            zoom={14}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Points */}
            {showPoints &&
              geoJson.features.map(
                (feature) =>
                  feature.geometry.type === "Point" && (
                    <Marker
                      key={uuidv4()}
                      position={feature.geometry.coordinates}
                    >
                      <Popup>
                        {Object.entries(feature.properties).map(
                          (key, value) => (
                            <h1 key={uuidv4()}>{`${key}: ${value}`}</h1>
                          )
                        )}
                      </Popup>
                    </Marker>
                  )
              )}

            {/* Polygons */}
            {showPolygons &&
              geoJson.features.map(
                (feature) =>
                  feature.geometry.type === "Polygon" && (
                    <Polygon
                      key={uuidv4()}
                      pathOptions={{ color: "purple" }}
                      positions={[feature.geometry.coordinates]}
                    >
                      <Popup>
                        {Object.entries(feature.properties).map(
                          (key, value) => (
                            <h1 key={uuidv4()}>{`${key}: ${value}`}</h1>
                          )
                        )}
                      </Popup>
                    </Polygon>
                  )
              )}

            {/* Lines */}
            {showLines &&
              geoJson.features.map(
                (feature) =>
                  feature.geometry.type === "LineString" && (
                    <Polyline
                      key={uuidv4()}
                      pathOptions={{ color: "green" }}
                      positions={[feature.geometry.coordinates]}
                    >
                      <Popup>
                        {Object.entries(feature.properties).map(
                          (key, value) => (
                            <h1 key={uuidv4()}>{`${key}: ${value}`}</h1>
                          )
                        )}
                      </Popup>
                    </Polyline>
                  )
              )}
          </MapContainer>
        </>
      )}
    </>
  );
};

Map.propTypes = {
  data: PropTypes.object,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(Map);
