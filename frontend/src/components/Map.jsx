import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import useGeolocation from "react-hook-geolocation";
import "leaflet/dist/leaflet.css";

const position = [49.258329, 4.031696];
const geoposition = [49.26839, 4.0512];

function Map() {
  const geolocation = useGeolocation();

  geoposition[0] = geolocation.latitude ?? geoposition[0];
  geoposition[1] = geolocation.longitude ?? geoposition[1];

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "300px", width: "80%" }}
      className="rounded-xl border-solid border border-gray-200"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>The shop</Popup>
      </Marker>
      <Marker position={geoposition}>
        <Popup>Your position.</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
