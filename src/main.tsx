// loginApp/src/main.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import LoginRoutes from "./App"; // Importamos o componente com as rotas
import "./index.css";
import { BrowserRouter } from "react-router-dom"; // Importamos o BrowserRouter aqui

createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		{/* Para rodar a app de forma isolada, envolvemos com o BrowserRouter aqui */}
		<BrowserRouter>
			<LoginRoutes />
		</BrowserRouter>
	</React.StrictMode>
);
