// src/pages/ErrorPage.tsx
import { Box, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function ErrorPage() {
	return (
		<Box
			sx={{
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#f5f5f5",
				px: 2,
			}}
		>
			<Box
				sx={{
					maxWidth: 480,
					width: "100%",
					textAlign: "center",
					backgroundColor: "white",
					p: 4,
					borderRadius: 2,
					boxShadow: 3,
				}}
			>
				<ErrorOutlineIcon sx={{ fontSize: 48, color: "#d32f2f", mb: 2 }} />
				<Typography variant="h5" sx={{ mb: 1 }}>
					Ocorreu um erro
				</Typography>
				<Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
					Não conseguimos processar sua solicitação.
				</Typography>
			</Box>
		</Box>
	);
}
