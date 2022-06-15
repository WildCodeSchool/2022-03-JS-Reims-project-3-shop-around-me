import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import useGeolocation from "react-hook-geolocation";
import "leaflet/dist/leaflet.css";

const shopPosition = [49.258329, 4.031696];

function Map() {
  const userGeolocation = useGeolocation();
  const userPosition = [userGeolocation.latitude, userGeolocation.longitude];

  return (
    <div className="flex flex-col text-center">
      <h1>Résultats :</h1>
      {!userGeolocation.error && userGeolocation.latitude && (
        <MapContainer
          zoom={13}
          center={userPosition}
          scrollWheelZoom={false}
          style={{ height: "300px", width: "800px" }}
          className="rounded-xl border-solid border border-gray-200"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={shopPosition}>
            <Popup>The shop</Popup>
          </Marker>

          <Marker position={userPosition}>
            <Popup>Your position.</Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
}

export default Map;
