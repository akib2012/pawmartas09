import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./Route/Router.jsx";
import { RouterProvider } from "react-router";
import Authprovider from "./ContextAuth/Authprovider.jsx";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router}></RouterProvider>
       <ToastContainer />
       <Toaster />
    </Authprovider>

  </StrictMode>
);
