// src/router/index.tsx
import { createBrowserRouter } from "react-router-dom";
import Login from "@/components/pages/Login";

const AppRoutes = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
]);

export default AppRoutes;
