import { createContext, useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [loginData, setLoginData] = useState([]);

  // For demo purpose, we increase the fund every time the user clicks on the button
  const refresh = () => {
    setLoginData({
      ...loginData,
      user: {
        ...loginData.user,
        fund: loginData.user.fund + 4.95,
      },
    });
  };

  const value = useMemo(
    () => ({ loginData, setLoginData, refresh }),
    [loginData, refresh]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuthContext = () => useContext(AuthContext);
