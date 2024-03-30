import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./features/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
