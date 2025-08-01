import { firebaseAuth } from "../firebase-service";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, child, get } from "firebase/database";

export class LoginService {
	static async login(email: string, password: string) {
		const userCredential = await signInWithEmailAndPassword(
			firebaseAuth,
			email,
			password
		);

		return userCredential;
	}

	static async setLoggedUser(userUuid: string) {
		const db = getDatabase();

		await set(ref(db, `loggedUsers/${userUuid}`), {
			logged: true,
		});
	}

	static async checkLoggedUser(userUuid: string) {
		const dbRef = ref(getDatabase());

		try {
			const appSnapshot = await get(child(dbRef, `loggedUsers/${userUuid}`));
			if (appSnapshot.exists()) {
				const response = appSnapshot.val();
				return response.logged;
			}
		} catch (error) {
			console.error("Erro ao verificar allowedApp:", error);
		}
	}
}
