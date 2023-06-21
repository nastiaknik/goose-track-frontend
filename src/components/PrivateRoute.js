import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsRefreshing, selectIsLoggedIn } from "../redux/auth/selectrors";

export const PrivateRoute = ({
  component: Component,
  redirectTo = "/login",
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
