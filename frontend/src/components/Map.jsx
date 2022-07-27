import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import propTypes from "prop-types";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import { Link } from "react-router-dom";

function Map({ searchValue, results }) {
  const shopPosition = [];
  results.forEach((result) => shopPosition.push([result.y, result.x]));

  const LeafIcon = L.Icon.extend({
    options: {},
  });

  const userGeolocation = [49.255, 4.03];

  const orangeIcon = new LeafIcon({
    iconUrl:
      "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E5%8D%B1|EDB02B|EDB02B",
  });

  const greenIcon = new LeafIcon({
    iconUrl:
      "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E5%8D%B1|CBC37B|CBC37B",
  });

  return (
    <section className="flex flex-col items-center">
      <p className="m-2 general-text">Votre résultat pour: {searchValue}</p>
      <MapContainer
        zoom={14}
        center={userGeolocation}
        scrollWheelZoom={false}
        style={{ height: "600px", width: "800px" }}
        className="rounded-xl border-solid border border-gray-200 max-w-[90vw] max-h-[45vh]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {results.map((result, index) => (
          <Marker
            key={result.id}
            position={shopPosition[index]}
            icon={orangeIcon}
          >
            <Popup>
              <Link to={`/shops/${result.id}`}>
                {result.name} :<br />
                {result.address}
              </Link>
            </Popup>
          </Marker>
        ))}

        <Marker position={userGeolocation} icon={greenIcon}>
          <Popup>Votre position.</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}

Map.propTypes = {
  searchValue: propTypes.string.isRequired,
  results: propTypes.arrayOf(
    propTypes.shape({
      address: propTypes.string,
      brand: propTypes.string,
      email: propTypes.string,
      fb_page: propTypes.string,
      id: propTypes.number,
      insta_page: propTypes.string,
      name: propTypes.string,
      opening_hours: propTypes.shape({
        dimanche: propTypes.string,
        jeudi: propTypes.string,
        lundi: propTypes.string,
        mardi: propTypes.string,
        mercredi: propTypes.string,
        samedi: propTypes.string,
        vendredi: propTypes.string,
      }),

      phone: propTypes.string,
      type: propTypes.string,
      website: propTypes.string,
      x: propTypes.number,
      y: propTypes.number,
    })
  ).isRequired,
  userGeolocation: propTypes.shape({
    accuracy: propTypes.number,
    altitude: propTypes.number,
    altitudeAccuracy: propTypes.number,
    heading: propTypes.number,
    latitude: propTypes.number,
    longitude: propTypes.number,
    speed: propTypes.number,
    timestamp: propTypes.number,
    error: propTypes.string,
  }).isRequired,
};

export default Map;
