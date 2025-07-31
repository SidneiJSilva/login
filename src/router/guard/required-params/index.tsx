import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { GuardService } from "@/services";
import LoadingFullScreen from "@/components/atoms/LoadingFullScreen";

const RequireParams: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const { checkParams } = GuardService;
	const [loading, setLoading] = useState(true);

	const appId = searchParams.get("appId");
	const callBackUrl = searchParams.get("callBackUrl");

	useEffect(() => {
		const validate = async () => {
			if (!appId || !callBackUrl) {
				navigate("/error");
				return;
			}

			const { allowedApp, allowedCallBackUrl } = await checkParams(
				appId,
				callBackUrl
			);
			allowedCallBackUrl;
			if (!allowedApp || !allowedCallBackUrl) {
				navigate("/error");
				return;
			}

			setLoading(false);
		};

		validate();
	}, []);

	if (loading) {
		return <LoadingFullScreen />;
	}

	return <>{children}</>;
};

export default RequireParams;
