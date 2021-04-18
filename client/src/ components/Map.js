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

import Spinner from "./Spinner";
import NoData from "./NoData";

const Map = ({ data: { geoJson, loading, center } }) => {
  const [showPoints, setShowPoints] = useState(true);
  const [showPolygons, setShowPolygons] = useState(true);
  const [showLines, setShowLines] = useState(true);

  return (
    <>
      {!geoJson || geoJson.features === [] ? (
        loading ? (
          <Spinner />
        ) : (
          <NoData />
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
            className="w-full h-full mt-10"
            center={center}
            zoom={10}
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
                    <Marker position={feature.geometry.coordinates}>
                      <Popup>
                        {Object.entries(feature.properties).map(
                          (key, value) => (
                            <h1>{`${key}: ${value}`}</h1>
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
                      pathOptions={{ color: "purple" }}
                      positions={[feature.geometry.coordinates]}
                    >
                      <Popup>
                        {Object.entries(feature.properties).map(
                          (key, value) => (
                            <h1>{`${key}: ${value}`}</h1>
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
                      pathOptions={{ color: "green" }}
                      positions={[feature.geometry.coordinates]}
                    >
                      <Popup>
                        {Object.entries(feature.properties).map(
                          (key, value) => (
                            <h1>{`${key}: ${value}`}</h1>
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

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(Map);
