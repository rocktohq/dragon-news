import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'

const PrivateRoute = ({ children }) => {

  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // If Loading
  if (loading) return;

  // If User is LoggedIn
  if (user) return children;

  // Otherwise
  return <Navigate state={location.pathname} to="/login"></Navigate>
}

export default PrivateRoute

PrivateRoute.propTypes = {
  children: PropTypes.node
}