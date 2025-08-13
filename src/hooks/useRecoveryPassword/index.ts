import { RecoveryPasswordService } from "@/services";
import { guardStore, loginStore } from "@/stores";
import { useMessage } from "@/hooks/useMessage";

export const useRecoveryPassword = () => {
	const { callBackUrl, callBackOrigin } = guardStore();
	const { setIsLoading } = loginStore();
	const { handleMessage } = useMessage();

	const updatePassword = async (email: string, password: string) => {
		setIsLoading(true);

		try {
			await RecoveryPasswordService.updatePassword(email, password);
		} catch (error) {
			handleMessage(true, "Erro ao atualizar senha", "error");
		} finally {
			setIsLoading(false);
		}
	};

	return { updatePassword };
};
