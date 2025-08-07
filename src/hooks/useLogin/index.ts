import { LoginService } from "@/services";
import { guardStore, loginStore } from "@/stores";
import { useMessage } from "@/hooks/useMessage";

export const useLogin = () => {
	const { callBackUrl, callBackOrigin } = guardStore();
	const { setIsLoading } = loginStore();
	const { handleMessage } = useMessage();

	const handleLoginSuccess = () => {
		sessionStorage.setItem("loginSuccessPass", "true");

		console.log(
			"[loginApp] Login bem-sucedido. Enviando mensagem para o container."
		);
		window.parent.postMessage({ type: "LOGIN_SUCCESS" }, callBackOrigin);
	};

	const login = async (email: string, password: string) => {
		setIsLoading(true);

		try {
			const userCredential = await LoginService.login(email, password);

			await LoginService.setLoggedUser(userCredential.user.uid);

			localStorage.setItem("login-app-uid", userCredential.user.uid);

			handleLoginSuccess();
		} catch (error) {
			handleMessage(true, "Email ou password incorreto.", "error");
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
			handleMessage(true, "Erro na autenticação.", "error");
		} finally {
			setIsLoading(false);
		}
	};

	return { login, checkLogin };
};
