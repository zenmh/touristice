import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import Home from "../Pages/Home/Home/Home";
import Service from "../Pages/Service/Service";
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
      {
        path: "/service/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
        element: <Service />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
