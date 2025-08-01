import React, { useEffect, useState } from "react";
import { useLogin } from "@/hooks";
import LoadingFullScreen from "@/components/atoms/LoadingFullScreen";

const RequireParams: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const { checkLogin } = useLogin();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const validate = async () => {
			const userUuid = localStorage.getItem("login-app-uid");

			if (userUuid) {
				await checkLogin(userUuid);
			}

			setIsLoading(false);
		};

		validate();
	}, []);

	if (isLoading) {
		return <LoadingFullScreen />;
	}

	return <>{children}</>;
};

export default RequireParams;
