import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  if (!currentUser) {
    return <Route {...rest}>{(props) => <Component {...props} />}</Route>;
  } else {
    return <Redirect to="/" />;
  }
}
