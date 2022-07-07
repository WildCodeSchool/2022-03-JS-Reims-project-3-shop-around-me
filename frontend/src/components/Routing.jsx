import { useEffect } from "react";
import { useParams } from "react-router-dom";
import L from "leaflet";
import propTypes from "prop-types";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
});

export default function Routing({ geolocation }) {
  const map = useMap();
  const { x, y } = useParams();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(geolocation[0], geolocation[1]), L.latLng(y, x)],
      routeWhileDragging: true,
    }).addTo(map);

    // eslint-disable-next-line consistent-return
    return () => map.removeControl(routingControl);
  }, [map]);

  return null;
}

Routing.propTypes = {
  geolocation: propTypes.arrayOf(propTypes.number).isRequired,
};
