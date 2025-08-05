import { LoginService } from "@/services";
import { guardStore, loginStore } from "@/stores";

export const useLogin = () => {
	const { callBackUrl } = guardStore();
	const { setIsLoading } = loginStore();

	const handleLoginSuccess = () => {
		sessionStorage.setItem("loginSuccessPass", "true");

		// A URL do seu container em produção
		const containerUrl = "https://territories-container.vercel.app";

		// Em vez de redirecionar, envie uma mensagem para o container
		console.log(
			"[loginApp] Login bem-sucedido. Enviando mensagem para o container."
		);
		window.parent.postMessage({ type: "LOGIN_SUCCESS" }, containerUrl);
	};

	const login = async (email: string, password: string) => {
		setIsLoading(true);

		try {
			const userCredential = await LoginService.login(email, password);

			await LoginService.setLoggedUser(userCredential.user.uid);

			localStorage.setItem("login-app-uid", userCredential.user.uid);

			handleLoginSuccess();
		} catch (error) {
			// TODO -> handle errors
			console.log("FIREBASE ERROR => ", error);
		} finally {
			setIsLoading(false);
		}
	};

	const checkLogin = async (userUuid: string) => {
		setIsLoading(true);

		try {
			const isLogged = await LoginService.checkLoggedUser(userUuid);

			if (isLogged && callBackUrl) {
				handleLoginSuccess();
			}
		} catch (error) {
			// TODO -> handle errors
			console.log("FIREBASE ERROR => ", error);
		} finally {
			setIsLoading(false);
		}
	};

	return { login, checkLogin };
};
