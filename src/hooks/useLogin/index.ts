import { LoginService } from "@/services";
import { guardStore } from "@/stores";

export const useLogin = () => {
	const { callBackUrl } = guardStore();

	const login = async (email: string, password: string) => {
		try {
			const userCredential = await LoginService.login(email, password);

			await LoginService.setLoggedUser(userCredential.user.uid);

			localStorage.setItem("login-app-uid", userCredential.user.uid);

			sessionStorage.setItem("loginSuccessPass", "true");

			window.location.replace(callBackUrl);
		} catch (error) {
			// TODO -> handle errors
			console.log("FIREBASE ERROR => ", error);
		}
	};

	const checkLogin = async (userUuid: string) => {
		try {
			const isLogged = await LoginService.checkLoggedUser(userUuid);

			if (isLogged && callBackUrl) {
				sessionStorage.setItem("loginSuccessPass", "true");

				window.location.replace(callBackUrl);
			}
		} catch (error) {
			// TODO -> handle errors
			console.log("FIREBASE ERROR => ", error);
		}
	};

	return { login, checkLogin };
};
