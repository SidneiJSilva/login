import { GuardService } from "@/services";
import { useNavigate } from "react-router-dom";
import { guardStore } from "@/stores";

export const useGuard = () => {
	const navigate = useNavigate();
	const {
		setAppData,
		setCallBackUrl,
		setAppId,
		setCallBackUrlId,
		setIsCheckingData,
	} = guardStore();

	const checkParams = async (appId: string, callBackUrl: string) => {
		if (!appId || !callBackUrl) {
			navigate("/error");
			return;
		}

		setCallBackUrlId(callBackUrl);
		setAppId(appId);

		setIsCheckingData(true);

		try {
			const { appData, callBackUrlData } = await GuardService.checkParams(
				appId,
				callBackUrl
			);

			if (!appData || !callBackUrlData) {
				navigate("/error");
				return;
			}

			setCallBackUrl(callBackUrlData);
			setAppData(appData);
		} catch (error) {
			console.log("FIREBASE ERROR => ", error);
		} finally {
			setIsCheckingData(false);
		}
	};

	return { checkParams };
};
