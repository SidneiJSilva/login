import SInputText from "@/components/atoms/inputs/SInputText";
import { Box, Button, Typography } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import { useLogin, useMessage } from "@/hooks";
import { useState } from "react";
import { guardStore, loginStore, messageStore } from "@/stores";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login } = useLogin();
	const { appData } = guardStore();
	const { isLoading } = loginStore();
	const { closeMessage } = useMessage();
	const { openMessage, message, messageType } = messageStore();

	const handleLoginOnChange = async () => {
		await login(email, password);
	};

	return (
		<div style={{ width: "300px" }}>
			<Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
				{appData.imageUrl ? (
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
						}}
					>
						<img width={150} height={150} src={appData.imageUrl} />
					</Box>
				) : (
					""
				)}

				{appData.appName ? (
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
						}}
					>
						<Typography variant="h5" component="div" fontWeight={700}>
							{appData.appName}
						</Typography>
					</Box>
				) : (
					""
				)}
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

				<Button
					variant="contained"
					loading={isLoading}
					fullWidth
					onClick={handleLoginOnChange}
				>
					LOGIN
				</Button>
			</Box>

			<Snackbar
				open={openMessage}
				autoHideDuration={4000}
				onClose={closeMessage}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			>
				<Alert
					onClose={closeMessage}
					severity={messageType}
					variant="filled"
					sx={{ width: "100%" }}
				>
					{message}
				</Alert>
			</Snackbar>
		</div>
	);
}
