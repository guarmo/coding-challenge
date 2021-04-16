import React, { useState } from "react";
import { connect } from "react-redux";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  Popup,
  LayerGroup,
  LayersControl,
  Circle,
  Polygon,
  Polyline,
  CircleMarker,
  Rectangle,
} from "react-leaflet";

const Map = ({ data }) => {
  const [showPoints, setShowPoints] = useState(true);
  const [showPolygons, setShowPolygons] = useState(false);
  const [showLines, setShowLines] = useState(false);

  return (
    <>
      {!data.geoJson ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="mt-10">
            <button
              onClick={() => setShowPoints(!showPoints)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Show Points
            </button>
            <button
              onClick={() => setShowPolygons(!showPolygons)}
              className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Show Polygons
            </button>
            <button
              onClick={() => setShowLines(!showLines)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Show Lines
            </button>
          </div>
          <MapContainer
            className="w-full h-full mt-10"
            center={[48.1414957, 11.5476037]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Points */}
            {showPoints &&
              data.geoJson.features.map(
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
              data.geoJson.features.map(
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
              data.geoJson.features.map(
                (feature) =>
                  feature.geometry.type === "LineString" && (
                    <Polyline
                      pathOptions={{ color: "red" }}
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
