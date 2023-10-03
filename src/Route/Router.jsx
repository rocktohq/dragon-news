import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import ErrorPage from './../pages/ErrorPage/ErrorPage';
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/news.json")
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/career",
        element: <Career></Career>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ]
  }
])

export default router;
