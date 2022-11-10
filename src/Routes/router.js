import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AddService from "../Pages/AddService/AddService";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Review from "../Pages/Review/Review";
import Service from "../Pages/Service/Service";
import Services from "../Pages/Services/Services";
import ProtectedRoute from "./ProtectedRoute";

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
        loader: () => fetch("https://touristics-server.vercel.app/allServices"),
        element: <Services />,
      },
      {
        path: "/service/:id",
        loader: ({ params }) =>
          fetch(`https://touristics-server.vercel.app/service/${params.id}`),
        element: <Service />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/review/:id",
        loader: ({ params }) =>
          fetch(`https://touristics-server.vercel.app/service/${params.id}`),
        element: <Review />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/myreviews",
        element: (
          <ProtectedRoute>
            <MyReviews />
          </ProtectedRoute>
        ),
      },
      {
        path: "/addservice",
        element: (
          <ProtectedRoute>
            <AddService />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
