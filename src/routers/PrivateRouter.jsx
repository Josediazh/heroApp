import { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRouter = ({children}) => {

  const { logged } = useContext(AuthContext);
  const {pathname,search} = useLocation();

  const lasPath = pathname+search;
  localStorage.setItem('lastpath',lasPath);

  return ( logged )
  ? children
  : <Navigate to={'/login'}/>

}