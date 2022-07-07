import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import useGeolocation from "react-hook-geolocation";
import Routing from "../components/Routing";

const pos = (geolocation) => {
  if (geolocation.error || !geolocation.latitude || !geolocation.longitude) {
    return null;
  }

  return [geolocation.latitude, geolocation.longitude];
};

export default function App() {
  const position = [51.505, -0.09];
  const userGeolocation = pos(useGeolocation());

  return (
    userGeolocation && (
      <MapContainer center={position} zoom={13} style={{ height: "92vh" }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Routing geolocation={userGeolocation} />
      </MapContainer>
    )
  );
}
