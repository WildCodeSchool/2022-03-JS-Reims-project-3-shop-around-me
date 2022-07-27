import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Routing from "../components/Routing";

export default function Itinerary() {
  const userGeolocation = [49.255, 4.03];

  return (
    userGeolocation && (
      <MapContainer
        center={userGeolocation}
        zoom={13}
        style={{ height: "92vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Routing geolocation={userGeolocation} />
      </MapContainer>
    )
  );
}
