import { createContext, useState, useContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const AddressContext = createContext();

export default AddressContext;

export function AddressContextProvider({ children }) {
  const [results, setResults] = useState([]);
  const [shop, setShop] = useState();

  const addressesConversion = () => {
    Promise.all(
      results.map((result) =>
        // is the address completed in this shop table element ?
        result.address
          ? // if so, we return an object with the shop's address in the same format as the api-adresse.data.gouv address object
            {
              data: {
                features: [{ properties: { label: result.address } }],
              },
            }
          : // if not, we return an object with the shop's address thanks to api-adresse.data.gouv address object
            axios.get(
              `${
                import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
              }/address/reverse/?lon=${result.x}&lat=${result.y}`
            )
      )
    ).then((responses) => {
      setResults(
        results.map((result, index) => ({
          // we return an object with the shop's information, plus the address that we got from the api-adresse.data.gouv format object
          ...result,
          address: responses[index].data.features[0].properties.label,
        }))
      );
    });
  };

  return (
    <AddressContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        shop,
        setShop,
        results,
        setResults,
        addressesConversion,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}

export const useAddress = () => useContext(AddressContext);

AddressContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
