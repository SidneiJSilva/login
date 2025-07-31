import SInputText from "@/components/atoms/inputs/SInputText";
import { Box, Button } from "@mui/material";

import { useLogin } from "@/hooks";
import { useState } from "react";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login } = useLogin();

	const handleLoginOnChange = async () => {
		await login(email, password);
	};

	return (
		<div style={{ width: "300px" }}>
			<Box sx={{ display: "flex", justifyContent: "center" }}>
				<h2>Login</h2>
			</Box>

			<Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
				<SInputText
					label="Email"
					name="email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<SInputText
					label="Password"
					name="password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<Button variant="contained" fullWidth onClick={handleLoginOnChange}>
					Acessar
				</Button>
			</Box>
		</div>
	);
}
