import { getAuth, updatePassword } from "firebase/auth";

export class RecoveryPasswordService {
	static async updatePassword(email: string, newPassword: string) {
		await updatePassword(email, newPassword);
	}
}
