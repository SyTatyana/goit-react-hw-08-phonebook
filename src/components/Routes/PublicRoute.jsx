import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import authSelectors from 'Redux/auth/authSelectors';
import PropTypes from 'prop-types';

function PublicRoute({ restricted = false, redirectTo }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shoudRedirect = isLoggedIn && restricted;
  return shoudRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
}
export default PublicRoute;

PublicRoute.propTypes = {
  restricted: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string.isRequired,
};