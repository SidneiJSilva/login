import { messageStore } from "@/stores";

export const useMessage = () => {
	const { setOpenMessage, setMessage, setMessageType } = messageStore();

	const handleMessage = async (
		open: boolean,
		message: string,
		type: "success" | "error" | "info"
	) => {
		setMessageType(type);
		setMessage(message);
		setOpenMessage(open);
	};

	const closeMessage = () => {
		setOpenMessage(false);
	};

	return { handleMessage, closeMessage };
};
