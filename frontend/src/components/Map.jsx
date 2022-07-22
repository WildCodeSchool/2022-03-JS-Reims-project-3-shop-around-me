import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import propTypes from "prop-types";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import { useEffect } from "react";
import { useGeolocationContext } from "../contexts/GeolocationContext";

function Map({ searchValue, results }) {
  const { userGeolocation } = useGeolocationContext();
  const shopPosition = [];
  results.forEach((result) => shopPosition.push([result.y, result.x]));

  const LeafIcon = L.Icon.extend({
    options: {},
  });

  const orangeIcon = new LeafIcon({
    iconUrl:
      "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E5%8D%B1|EDB02B|EDB02B",
  });

  const greenIcon = new LeafIcon({
    iconUrl:
      "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E5%8D%B1|CBC37B|CBC37B",
  });

  useEffect(() => {}, [userGeolocation]);

  return (
    <section className="flex flex-col items-center">
      <p className="m-2 general-text">Votre résultat pour: {searchValue}</p>
      {userGeolocation ? (
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
                {result.name} :<br />
                {result.address}
              </Popup>
            </Marker>
          ))}
          {userGeolocation && (
            <Marker position={userGeolocation} icon={greenIcon}>
              <Popup>Votre position.</Popup>
            </Marker>
          )}
        </MapContainer>
      ) : (
        <section className="flex justify-center">
          <svg
            role="status"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 text-center"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </section>
      )}
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
