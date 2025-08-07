import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import LoadingFullScreen from "@/components/atoms/LoadingFullScreen";
import { guardStore } from "@/stores";
import { useGuard } from "@/hooks";

const RequireParams: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [searchParams] = useSearchParams();
	const { isCheckingData } = guardStore();
	const { checkParams } = useGuard();

	const appId = searchParams.get("appId");
	const callBackUrl = searchParams.get("callBackUrl");
	const callBackOrigin = searchParams.get("callBackOrigin");

	useEffect(() => {
		const validate = async () => {
			await checkParams(appId || "", callBackUrl || "", callBackOrigin || "");
		};

		validate();
	}, []);

	if (isCheckingData) {
		return <LoadingFullScreen />;
	}

	return <>{children}</>;
};

export default RequireParams;
