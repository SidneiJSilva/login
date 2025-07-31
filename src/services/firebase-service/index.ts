import { initializeApp } from "firebase/app";
import { Configs } from "@/configs";
import { getAuth } from "firebase/auth";

const {
	firebaseApiKey,
	firebaseAuthDomain,
	firebaseProjectId,
	firebaseViteStorageBucket,
	firebaseMessageSender,
	firebaseAppId,
} = Configs;

const firebaseConfig = {
	apiKey: firebaseApiKey,
	authDomain: firebaseAuthDomain,
	projectId: firebaseProjectId,
	storageBucket: firebaseViteStorageBucket,
	messagingSenderId: firebaseMessageSender,
	appId: firebaseAppId,
};

export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);
