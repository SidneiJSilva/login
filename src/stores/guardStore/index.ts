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

	setCallBackUrl: (callBackUrl: string) => void;
	setCallBackUrlId: (callBackUrlId: string) => void;
	setAppId: (appId: string) => void;
	setAppData: (appData: AppData) => void;
	setIsCheckingData: (isCheckingData: boolean) => void;
}

export const guardStore = create<GuardStore>((set) => ({
	callBackUrl: "",
	callBackUrlId: "",
	appId: "",
	appData: { imageUrl: "", appName: "" },
	isCheckingData: false,

	setCallBackUrl: (callBackUrl) => set({ callBackUrl }),
	setCallBackUrlId: (callBackUrlId) => set({ callBackUrlId }),
	setAppId: (appId) => set({ appId }),
	setAppData: (appData: AppData) => set({ appData }),
	setIsCheckingData: (isCheckingData: boolean) => set({ isCheckingData }),
}));
