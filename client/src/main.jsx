import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routes/index.jsx";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./utils/store.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
);
