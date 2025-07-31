import { firebaseAuth } from "../firebase-service";
import { signInWithEmailAndPassword } from "firebase/auth";

export class LoginService {
	static async login(email: string, password: string) {
		const userCredential = await signInWithEmailAndPassword(
			firebaseAuth,
			email,
			password
		);

		return userCredential;
	}
}
