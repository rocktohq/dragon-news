import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'

const PrivateRoute = ({ children }) => {

  const { user, loading } = useContext(AuthContext);
  // If Loading
  if (loading) return;

  // If User is LoggedIn
  if (user) return children;

  // Otherwise
  return <Navigate to="/"></Navigate>
}

export default PrivateRoute

PrivateRoute.propTypes = {
  children: PropTypes.node
}