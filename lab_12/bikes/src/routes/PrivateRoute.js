import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from '../redux/auth/authSelectors'

export const PrivateRoute = ({ component: Component, redirectTo = '/login' }) => {
  const token = useSelector(selectToken);
  console.log(token)
  return token ? Component : <Navigate to={redirectTo} /> ;
};