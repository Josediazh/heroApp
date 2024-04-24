import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { MarvelPage } from "../heroes/pages/MarvelPage";
import { DcPages } from "../heroes/pages/DcPages";
import { LoginPages } from "../auth/pages/LoginPages";
import { SearchPages } from "../heroes/pages/SearchPages";
import { HeroPage } from "../heroes/pages/HeroPage";
import {AuthProvider} from "../auth/context/AuthProvider"
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={'/marvel'} />,
    },
    {
      path: "/dc",
      element: <PrivateRouter><DcPages /></PrivateRouter>,
    },
    {
      path: "/marvel",
      element: <PrivateRouter><MarvelPage /></PrivateRouter>,
    },
    {
      path: "/search",
      element: <PrivateRouter><SearchPages /></PrivateRouter>,
    },
    {
      path: "/hero/:id",
      element: <PrivateRouter><HeroPage /></PrivateRouter>,
    },
    {
      path: "/login",
      element: <PublicRouter><LoginPages /></PublicRouter>,
    },
  ]);

export const AppRouter = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}