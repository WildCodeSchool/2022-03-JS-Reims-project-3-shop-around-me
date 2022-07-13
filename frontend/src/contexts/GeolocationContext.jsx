import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import useGeolocation from "react-hook-geolocation";

const GeolocationContext = createContext();

export default GeolocationContext;

export function GeolocationContextProvider({ children }) {
  const position = (geolocation) => {
    if (geolocation.error || !geolocation.latitude || !geolocation.longitude) {
      return null;
    }

    return [geolocation.latitude, geolocation.longitude];
  };

  const userGeolocation = position(useGeolocation());

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <GeolocationContext.Provider value={{ userGeolocation }}>
      {children}
    </GeolocationContext.Provider>
  );
}

GeolocationContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useGeolocationContext = () => useContext(GeolocationContext);
