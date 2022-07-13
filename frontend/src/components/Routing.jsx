import { useEffect } from "react";
import { useParams } from "react-router-dom";
import propTypes from "prop-types";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import "lrm-graphhopper";
import { useMap } from "react-leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl:
    "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E5%8D%B1|EDB02B|EDB02B",
});

export default function Routing({ geolocation }) {
  const map = useMap();
  const { x, y } = useParams();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(geolocation[0], geolocation[1]), L.latLng(y, x)],
      routeWhileDragging: true,
      router: new L.Routing.GraphHopper("03c941ab-b75d-42ef-8621-ff99d86c0abb"),
    }).addTo(map);

    // eslint-disable-next-line consistent-return
    return () => map.removeControl(routingControl);
  }, [map]);

  return null;
}

Routing.propTypes = {
  geolocation: propTypes.arrayOf(propTypes.number).isRequired,
};
