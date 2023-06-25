import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Booking from "./Pages/Booking/Booking";
import Gallery from "./Pages/Gallery/Gallery";
import Menu from "./Pages/Menu/Menu";
import Feedback from "./Pages/Feedback/Feedback";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Order from "./Pages/Order/Order";
import Cart from "./Pages/Cart/Cart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/feedback",
    element: <Feedback />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },

]);

export const PublicRoutes = () => {
  return (
    <RouterProvider router={router} />
  );
};
