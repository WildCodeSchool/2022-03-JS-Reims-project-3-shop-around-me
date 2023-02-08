import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { useAuthContext } from "../contexts/AuthContext";

export default function PrivateRoute({ component: Component, ...props }) {
  const { setLoginData } = useAuthContext();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.post(
          "/api/refresh",
          {},
          { withCredentials: true }
        );

        if (res.status === 200) {
          setLoginData({ ...res.data });
          setLoading(false);
        }
      } catch (e) {
        console.error(e);
        navigate("/");
      }
    };

    checkAuth();
  }, []);

  if (!loading) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />;
  }
}

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};
