import { create } from "zustand";

interface AppData {
	imageUrl: string;
	appName: string;
}

interface GuardStore {
	callBackUrl: string;
	callBackUrlId: string;
	appId: string;
	appData: AppData;
	isCheckingData: boolean;
	callBackOrigin: string;

	setCallBackUrl: (callBackUrl: string) => void;
	setCallBackUrlId: (callBackUrlId: string) => void;
	setAppId: (appId: string) => void;
	setAppData: (appData: AppData) => void;
	setIsCheckingData: (isCheckingData: boolean) => void;
	setCallBackOrigin: (appId: string) => void;
}

export const guardStore = create<GuardStore>((set) => ({
	callBackUrl: "",
	callBackUrlId: "",
	appId: "",
	appData: { imageUrl: "", appName: "" },
	isCheckingData: false,
	callBackOrigin: "",

	setCallBackUrl: (callBackUrl) => set({ callBackUrl }),
	setCallBackUrlId: (callBackUrlId) => set({ callBackUrlId }),
	setAppId: (appId) => set({ appId }),
	setAppData: (appData: AppData) => set({ appData }),
	setIsCheckingData: (isCheckingData: boolean) => set({ isCheckingData }),
	setCallBackOrigin: (callBackOrigin) => set({ callBackOrigin }),
}));
