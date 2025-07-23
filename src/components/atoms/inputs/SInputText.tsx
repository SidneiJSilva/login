import { TextField, TextFieldProps } from "@mui/material";

type SInputTextProps = TextFieldProps & {
	label?: string;
	name: string;
};

export default function SInputText({ label, name, ...rest }: SInputTextProps) {
	return (
		<TextField
			fullWidth
			variant="outlined"
			label={label}
			name={name}
			{...rest}
		/>
	);
}
