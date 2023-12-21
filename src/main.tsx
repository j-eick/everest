import React from "react";
import ReactDOM from "react-dom/client";
import "../src/globalStyles/global.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Limbus from "./pages/Limbus.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/limbus",
    element: <Limbus />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
