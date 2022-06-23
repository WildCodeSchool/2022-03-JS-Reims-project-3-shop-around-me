import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import propTypes from "prop-types";
import useGeolocation from "react-hook-geolocation";
import "leaflet/dist/leaflet.css";

const position = (geolocation) => {
  if (geolocation.error || !geolocation.latitude || !geolocation.longitude) {
    return null;
  }

  return [geolocation.latitude, geolocation.longitude];
};

function Map({ searchValue, results }) {
  const userGeolocation = useGeolocation();
  const userPosition = position(userGeolocation);
  const shopPosition = [];
  results.forEach((result) => shopPosition.push([result.y, result.x]));

  return (
    <div className="flex flex-col text-center">
      <h1>Votre résultat pour: {searchValue}</h1>
      <MapContainer
        zoom={25}
        center={userPosition ?? shopPosition[0]}
        scrollWheelZoom={false}
        style={{ height: "600px", width: "800px" }}
        className="rounded-xl border-solid border border-gray-200 max-w-[90vw] max-h-[20vh]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {results.map((result, index) => {
          return (
            <Marker key={result.id} position={shopPosition[index]}>
              <Popup>{result.name}</Popup>
            </Marker>
          );
        })}
        {userPosition && (
          <Marker position={userPosition}>
            <Popup>Your position.</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

Map.propTypes = {
  searchValue: propTypes.string.isRequired,
  results: propTypes.shape.isRequired,
};

export default Map;
