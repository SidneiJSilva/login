import { LoginService } from "@/services";
import { guardStore, loginStore } from "@/stores";
import { useMessage } from "@/hooks/useMessage";

export const useLogin = () => {
	const { callBackUrl, callBackOrigin } = guardStore();
	const { setIsLoading } = loginStore();
	const { handleMessage } = useMessage();

	const handleLoginSuccess = async () => {
		sessionStorage.setItem("loginSuccessPass", "true");

		const token = await LoginService.getIdToken();

		if (!token) {
			console.error("[loginApp] Não foi possível obter o Firebase ID token.");
			return;
		}

		console.log(
			"[loginApp] Login bem-sucedido. Enviando mensagem para o container.",
		);

		console.log("vou enviar token");
		window.parent.postMessage({ type: "LOGIN_SUCCESS", token }, callBackOrigin);
	};

	const login = async (email: string, password: string) => {
		setIsLoading(true);

		try {
			const userCredential = await LoginService.login(email, password);

			await LoginService.setLoggedUser(userCredential.user.uid);

			localStorage.setItem("login-app-uid", userCredential.user.uid);

			await handleLoginSuccess();
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
				await handleLoginSuccess();
			}
		} catch (error) {
			handleMessage(true, "Erro na autenticação.", "error");
		} finally {
			setIsLoading(false);
		}
	};

	return { login, checkLogin };
};
