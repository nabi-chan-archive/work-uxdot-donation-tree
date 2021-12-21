import { createContext, useContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Toast from "../components/Toast";

export interface IToast {
	id: number;
	type: "error" | "warning" | "success" | "notification";
	content: {
		title: string;
		message: string;
	};
	duration?: number;
}

interface ToastContext {
	makeToast: (
		type: IToast["type"],
		content: IToast["content"],
		duration?: number,
	) => void;
}

const ToastContainer = styled.div`
	display: grid;
	grid-row-gap: 16px;
	position: fixed;
	right: 16px;
	bottom: 57px;
	z-index: 100;
`;

const doNothing = () => null;

const ToastContext = createContext<ToastContext>({
	makeToast: doNothing,
});

const ToastContextProvider: React.FC = ({ children }) => {
	const [notifications, setNotifications] = useState<IToast[]>([]);

	function removeToast(id: number) {
		setNotifications((notifications) =>
			notifications.filter((notification) => notification.id !== id),
		);
	}

	function makeToast(
		type: IToast["type"],
		content: IToast["content"],
		duration?: number,
	) {
		const toast: IToast = {
			id: Date.now(),
			type,
			content,
			duration,
		};

		setNotifications((prev) => [...prev, toast]);
	}

	return (
		<ToastContext.Provider
			value={{
				makeToast,
			}}>
			<ToastContainer>
				<AnimatePresence initial={false}>
					{notifications.map((notification) => (
						<Toast
							key={notification.id}
							toast={notification}
							onRemove={removeToast}
						/>
					))}
				</AnimatePresence>
			</ToastContainer>
			{children}
		</ToastContext.Provider>
	);
};

export const useToast = () => useContext(ToastContext);
export default ToastContextProvider;
