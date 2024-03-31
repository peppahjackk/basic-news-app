import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./features/Home/Home";
import { NewsItemDetail } from "./features/News/NewsItemDetail/NewsItemDetail";
import { NavbarWrapper } from "./features/Global/NavbarWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/news/:articleId",
        element: <NewsItemDetail />,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
