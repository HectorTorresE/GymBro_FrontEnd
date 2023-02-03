import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "./authSlice";

const RequireAuth = () => {
  const location = useLocation();
  const token = useSelector(selectToken);

  return token ? (
    <Outlet />
  ) : (
    <Navigate
      to={{
        pathname: "/login",
        state: { from: location },
      }}
    />
  );
}

export default RequireAuth;