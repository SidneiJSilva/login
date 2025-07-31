import { getDatabase, ref, child, get } from "firebase/database";

export class GuardService {
	static async checkParams(appId: string, appPageId: string) {
		const dbRef = ref(getDatabase());

		let allowedApp = false;
		let allowedAppPage = false;

		try {
			const appSnapshot = await get(child(dbRef, `loginAllowedApps/${appId}`));
			allowedApp = appSnapshot.exists();
		} catch (error) {
			console.error("Erro ao verificar allowedApp:", error);
		}

		try {
			const pageSnapshot = await get(
				child(dbRef, `loginAllowedPages/${appPageId}`)
			);
			allowedAppPage = pageSnapshot.exists();
		} catch (error) {
			console.error("Erro ao verificar allowedAppPage:", error);
		}

		return { allowedApp, allowedAppPage };
	}
}
