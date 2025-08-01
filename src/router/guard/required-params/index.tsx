import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { GuardService } from "@/services";
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

	useEffect(() => {
		const validate = async () => {
			await checkParams(appId || "", callBackUrl || "");
		};

		validate();
	}, []);

	if (isCheckingData) {
		return <LoadingFullScreen />;
	}

	return <>{children}</>;
};

export default RequireParams;
