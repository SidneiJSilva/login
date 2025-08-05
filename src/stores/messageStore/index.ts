import { create } from "zustand";

interface MessageStore {
	openMessage: boolean;
	message: string;
	messageType: "success" | "error" | "info";

	setOpenMessage: (open: boolean) => void;
	setMessage: (message: string) => void;
	setMessageType: (type: "success" | "error" | "info") => void;
}

export const messageStore = create<MessageStore>((set) => ({
	openMessage: false,
	message: "",
	messageType: "success",

	setOpenMessage: (open) => set({ openMessage: open }),
	setMessage: (message) => set({ message }),
	setMessageType: (type) => set({ messageType: type }),
}));
