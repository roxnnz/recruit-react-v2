import React from "react";
import { createRoot } from "react-dom/client";
import { RegisterCardPage } from "./page/cardRegister/RegisterCardPage";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/styles.scss";
import { ProfilePage } from "./page/profile/ProfilePage";
import { CardsPage } from "./page/cards/CardsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProfilePage />,
  },
  {
    path: "/new-card",
    element: <RegisterCardPage />,
  },
  {
    path: "/cards",
    element: <CardsPage />,
  },
]);
const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
