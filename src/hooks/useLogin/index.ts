import { LoginService } from "@/services";

export const useLogin = () => {
	const login = async (email: string, password: string) => {
		try {
			const userCredential = await LoginService.login(email, password);
			console.log("CREDENTIALS => ", userCredential);
		} catch (error) {
			console.log("FIREBASE ERROR => ", error);
		} finally {
			console.log("FINALLY");
		}
	};

	return { login };
};
