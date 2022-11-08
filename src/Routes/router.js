import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Services from "../Pages/Services/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        loader: () => fetch("http://localhost:5000/allServices"),
        element: <Services />,
      },
    ],
  },
]);
