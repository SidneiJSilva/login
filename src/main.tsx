// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import AppRoutes from "@/components/router";

createRoot(document.getElementById("root") as HTMLElement).render(
	// <StrictMode>
	<RouterProvider router={AppRoutes}></RouterProvider>
	// </StrictMode>
);
