import { getDatabase, ref, child, get } from "firebase/database";
export class GuardService {
	static async checkParams(
		appId: string,
		callBackUrl: string,
		callBackOrigin: string
	) {
		const dbRef = ref(getDatabase());

		let appData = null;
		let callBackUrlData = null;
		let callBackOriginData = null;

		try {
			const appSnapshot = await get(child(dbRef, `loginAllowedApps/${appId}`));
			if (appSnapshot.exists()) {
				appData = appSnapshot.val();
			}
		} catch (error) {
			console.error("Erro ao verificar allowedApp:", error);
		}

		try {
			const pageSnapshot = await get(
				child(dbRef, `loginAllowedUrl/${callBackUrl}`)
			);
			if (pageSnapshot.exists()) {
				callBackUrlData = pageSnapshot.val();
			}
		} catch (error) {
			console.error("Erro ao verificar allowedAppPage:", error);
		}

		try {
			const pageSnapshot = await get(
				child(dbRef, `loginAllowedOrigins/${callBackOrigin}`)
			);
			if (pageSnapshot.exists()) {
				callBackOriginData = pageSnapshot.val();
			}
		} catch (error) {
			console.error("Erro ao verificar allowedAppPage:", error);
		}

		return { appData, callBackUrlData, callBackOriginData };
	}
}
