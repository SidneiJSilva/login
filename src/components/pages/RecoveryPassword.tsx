import SInputText from "@/components/atoms/inputs/SInputText";
import { Box, Button, Typography } from "@mui/material";

import { guardStore, loginStore, messageStore } from "@/stores";
import { useRecoveryPassword } from "@/hooks";
import { useState } from "react";

export default function RecoveryPassword() {
	const { appData } = guardStore();
	const [newPassword, setNewPassword] = useState("");
	const [newPasswordRetype, setNewPasswordRetype] = useState("");
	const [email, setEmail] = useState("");
	const { updatePassword } = useRecoveryPassword();

	const handleRecordOnClick = async () => {
		await updatePassword(email, newPassword);
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
					label="Nova senha"
					name="password"
					type="password"
					value={newPassword}
					onChange={(e) => setNewPassword(e.target.value)}
				/>

				<SInputText
					label="Confirmar nova senha"
					name="passwordRetype"
					type="password"
					value={newPasswordRetype}
					onChange={(e) => setNewPasswordRetype(e.target.value)}
				/>

				<Button
					disabled={
						!email ||
						!newPassword ||
						!newPasswordRetype ||
						newPassword !== newPasswordRetype
					}
					variant="contained"
					fullWidth
					onClick={handleRecordOnClick}
				>
					GRAVAR
				</Button>
			</Box>
		</div>
	);
}
