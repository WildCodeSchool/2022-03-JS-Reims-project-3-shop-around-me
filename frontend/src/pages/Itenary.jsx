import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useGeolocationContext } from "../contexts/GeolocationContext";
import Routing from "../components/Routing";

export default function Itenary() {
  const { userGeolocation } = useGeolocationContext();

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
