import React from "react";
import { RouterProvider } from "react-router-dom";
import useRoutes from "../hooks/useRoutes";
function RootRoute() {
  const router = useRoutes()
  return (
    <RouterProvider router={router} />
  )

}
export default RootRoute
