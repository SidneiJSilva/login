import SInputText from "@/components/atoms/inputs/SInputText";

export default function Login() {
	return (
		<div style={{ width: "300px" }}>
			<h2>Login</h2>
			<form>
				<SInputText label="Email" name="email" type="email" margin="normal" />
				<SInputText
					label="Password"
					name="password"
					type="password"
					margin="normal"
				/>
				<button type="submit" style={{ marginTop: "1rem" }}>
					Login
				</button>
			</form>
		</div>
	);
}
