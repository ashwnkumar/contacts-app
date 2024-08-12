import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";
import ViewContacts from "./components/ViewContacts.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Contacts />,
    errorElement: <ErrorPage />,
  },
  {
    path: "add",
    element: <AddContact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "view",
    element: <ViewContacts />,
    errorElement: <ErrorPage />,
  },
  {
    path: "view/:index",
    element: <ViewContacts />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
