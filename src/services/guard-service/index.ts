import { getDatabase, ref, child, get } from "firebase/database";

export class GuardService {
	static async checkParams(appId: string, callBackUrl: string) {
		const dbRef = ref(getDatabase());

		let allowedApp = false;
		let allowedCallBackUrl = false;

		try {
			const appSnapshot = await get(child(dbRef, `loginAllowedApps/${appId}`));
			allowedApp = appSnapshot.exists();
		} catch (error) {
			console.error("Erro ao verificar allowedApp:", error);
		}

		try {
			const pageSnapshot = await get(
				child(dbRef, `loginAllowedUrl/${callBackUrl}`)
			);
			allowedCallBackUrl = pageSnapshot.exists();
		} catch (error) {
			console.error("Erro ao verificar allowedAppPage:", error);
		}

		return { allowedApp, allowedCallBackUrl };
	}
}
