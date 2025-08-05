// loginApp/src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "@/components/pages/Login";
import Error from "@/components/pages/Error";
import RequiredParams from "./router/guard/required-params";
import CheckLogin from "./router/guard/check-login";
import { Outlet } from "react-router-dom";

const ProtectedLayout = () => {
	return (
		<RequiredParams>
			<CheckLogin>
				<Outlet />
			</CheckLogin>
		</RequiredParams>
	);
};

const LoginRoutes = () => {
	return (
		<div className="login-app-wrapper">
			<Routes>
				<Route element={<ProtectedLayout />}>
					<Route path="/" element={<Login />} />
				</Route>
				<Route path="/error" element={<Error />} />
			</Routes>
		</div>
	);
};

export default LoginRoutes;
