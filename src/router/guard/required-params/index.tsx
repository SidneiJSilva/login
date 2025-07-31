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
	const [loading, setLoading] = useState(true); // já começa carregando

	const appId = searchParams.get("appId");
	const appPageId = searchParams.get("appPageId");

	useEffect(() => {
		const validate = async () => {
			if (!appId || !appPageId) {
				navigate("/error");
				return;
			}

			const { allowedApp, allowedAppPage } = await checkParams(
				appId,
				appPageId
			);

			if (!allowedApp || !allowedAppPage) {
				navigate("/error");
				return;
			}

			setLoading(false);
		};

		validate();
	}, [appId, appPageId, navigate, checkParams]);

	if (loading) {
		return <LoadingFullScreen />;
	}

	return <>{children}</>;
};

export default RequireParams;
