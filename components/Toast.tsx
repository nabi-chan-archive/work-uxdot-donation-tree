import type { IToast } from "../context/toast.context";
import styled from "styled-components";
import { motion } from "framer-motion";
import Path from "./Path";
import Flex from "./Flex";
import { castShadow } from "../styles/Theme";
import { useEffect } from "react";

interface Props {
	toast: IToast;
	onRemove: (id: number) => void;
}

const ToastContainer = styled(motion.div)`
	position: relative;
	width: 360px;
	min-height: 100px;
	background: ${({ theme }) => theme.white.toString()};
	color: ${({ theme }) => theme.black.toString()};
	border-radius: 10px;
	padding: 16px;
	display: flex;
	flex-direction: column;
	row-gap: 4px;
	box-shadow: ${({ theme }) => castShadow(theme.black, 0, 0.3, 0.3, 0)};
`;

const ToastHeader = styled(Flex)`
	align-items: center;
	justify-content: space-between;
`;

const CloseButton = styled.button`
	background: none;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	cursor: pointer;
`;

const ToastTitle = styled.h3`
	font-size: 18px;
	font-weight: 600;
`;

const ToastMessage = styled.p`
	font-size: 14px;
	line-height: 1.3;
	word-break: keep-all;
	white-space: pre-line;
`;

const Toast: React.FC<Props> = ({ toast, onRemove }) => {
	useEffect(() => {
		const timeout = setTimeout(() => {
			onRemove(toast.id);
		}, toast.duration || 5000);

		return () => clearTimeout(timeout);
	}, [onRemove, toast.duration, toast.id]);

	return (
		<ToastContainer
			initial={{ opacity: 0, y: 50, scale: 0.3 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}>
			<ToastHeader>
				<ToastTitle>{toast.content.title}</ToastTitle>
				<CloseButton onClick={() => onRemove(toast.id)}>
					<svg width="23" height="23" viewBox="0 0 23 23">
						<Path d="M 3 16.5 L 17 2.5" />
						<Path d="M 3 2.5 L 17 16.346" />
					</svg>
				</CloseButton>
			</ToastHeader>
			<ToastMessage>{toast.content.message}</ToastMessage>
		</ToastContainer>
	);
};

export default Toast;
