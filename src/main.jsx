import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { Router } from "./routers";
import { MainLayout } from "@/layouts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainLayout>
      <RouterProvider router={Router} />
    </MainLayout>
  </React.StrictMode>
);
