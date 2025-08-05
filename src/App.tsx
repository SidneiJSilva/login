// loginApp/src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "@/components/pages/Login";
import Error from "@/components/pages/Error";
import RequiredParams from "./router/guard/required-params";
import CheckLogin from "./router/guard/check-login";
import { Outlet } from "react-router-dom";

// O seu ProtectedLayout pode manter-se igual.
const ProtectedLayout = () => {
	return (
		<RequiredParams>
			<CheckLogin>
				<Outlet />
			</CheckLogin>
		</RequiredParams>
	);
};

// A grande mudança está aqui. Em vez de exportar um <RouterProvider>,
// exportamos um componente que define as suas próprias rotas internas.
const LoginRoutes = () => {
	return (
		<div className="login-app-wrapper">
			<Routes>
				<Route element={<ProtectedLayout />}>
					{/* A rota agora é relativa. O container vai mapear para "/login",
            então aqui usamos "/" para a página de login principal. */}
					<Route path="/" element={<Login />} />

					{/* Exemplo de outra rota interna */}
					{/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
				</Route>
				<Route path="/error" element={<Error />} />
			</Routes>
		</div>
	);
};

// O componente exposto é este, que contém as rotas.
export default LoginRoutes;
