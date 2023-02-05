import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { useAuthContext } from "../contexts/AuthContext";

export default function PrivateRoute({ component: Component, ...props }) {
  const { setLoginData } = useAuthContext();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.post(
          "/api/refresh",
          {},
          { withCredentials: true }
        );

        if (res.status === 200) {
          res.data.user.fund = 1.93;
          setLoginData({ ...res.data });
        }
      } catch (e) {
        console.error(e);

        if (e) useNavigate("/", { replace: true });
      }
    };

    checkAuth();
  }, []);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...props} />;
}

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};
