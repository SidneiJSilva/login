// src/router/index.tsx
import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "@/components/pages/Login";
import Error from "@/components/pages/Error";
import RequiredParams from "./guard/required-params";

const ProtectedLayout = () => {
	return (
		<RequiredParams>
			<Outlet />
		</RequiredParams>
	);
};

const AppRoutes = createBrowserRouter([
	{
		path: "/",
		element: <ProtectedLayout />,
		children: [
			{
				path: "/login",
				element: <Login />,
			},
		],
	},
	{
		path: "/error",
		element: <Error />,
	},
]);

export default AppRoutes;
