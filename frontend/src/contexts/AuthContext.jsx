import { createContext, useState, useContext, useMemo } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [loginData, setLoginData] = useState([]);

  // For demo purpose, we increase the fund every time the user clicks on the button
  const refresh = async () => {
    try {
      await axios.put(
        `/api/users/${loginData.user.id}/savings`,
        { id: loginData.user.id, savings: loginData.user.savings + 495 },
        { withCredentials: true }
      );
      setLoginData({
        ...loginData,
        user: {
          ...loginData.user,
          savings: loginData.user.savings + 495,
        },
      });
    } catch (err) {
      console.warn(err);
    }
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
