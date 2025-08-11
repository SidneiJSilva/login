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
		setCallBackOrigin,
	} = guardStore();

	const checkParams = async (
		appId: string,
		callBackUrl: string,
		callBackOrigin: string
	) => {
		if (!appId || !callBackUrl || !callBackOrigin) {
			navigate("error");
			return;
		}

		setCallBackUrlId(callBackUrl);
		setAppId(appId);
		setCallBackOrigin(callBackOrigin);

		setIsCheckingData(true);

		try {
			const { appData, callBackUrlData, callBackOriginData } =
				await GuardService.checkParams(appId, callBackUrl, callBackOrigin);

			console.log("APP DATA => ", appData.manageUser);

			if (!appData || !callBackUrlData || !callBackOriginData) {
				navigate("error");
				return;
			}

			setCallBackUrl(callBackUrlData);
			setAppData(appData);
			setCallBackOrigin(callBackOriginData);
		} catch (error) {
			console.log("FIREBASE ERROR => ", error);
		} finally {
			setIsCheckingData(false);
		}
	};

	return { checkParams };
};
