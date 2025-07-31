export class Configs {
	public static readonly firebaseApiKey = import.meta.env.VITE_FIREBASE_API_KEY;
	public static readonly firebaseAuthDomain = import.meta.env
		.VITE_FIREBASE_AUTH_DOMAIN;
	public static readonly firebaseProjectId = import.meta.env.VITE_PROJECT_ID;
	public static readonly firebaseViteStorageBucket = import.meta.env
		.VITE_STORAGE_BUCKET;
	public static readonly firebaseMessageSender = import.meta.env
		.VITE_MESSAGE_SENDER_ID;
	public static readonly firebaseAppId = import.meta.env.VITE_APP_ID;
}
