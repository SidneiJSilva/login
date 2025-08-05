import { create } from "zustand";

interface LoginStore {
	isLoading: boolean;

	setIsLoading: (callBackUrl: boolean) => void;
}

export const loginStore = create<LoginStore>((set) => ({
	isLoading: false,

	setIsLoading: (isLoading) => set({ isLoading }),
}));
