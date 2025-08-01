// src/router/index.tsx
import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "@/components/pages/Login";
import Error from "@/components/pages/Error";
import RequiredParams from "./guard/required-params";
import CheckLogin from "./guard/check-login";

const ProtectedLayout = () => {
	return (
		<RequiredParams>
			<CheckLogin>
				<Outlet />
			</CheckLogin>
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
