import { firebaseAuth } from "../firebase-service";

export const getToken = async (): Promise<string | null> => {
	const user = firebaseAuth.currentUser;

	if (!user) {
		return null;
	}

	return user.getIdToken();
};
