import styled from "styled-components";
import type { ThemeColor } from "../styles/Theme";
import { castShadow } from "../styles/Theme";
import { ReactNode } from "react";

interface Props extends React.ComponentProps<"button"> {
	background: ThemeColor;
	hoverBackground?: ThemeColor;
	color: ThemeColor;
	children: ReactNode;
}

const Button = styled.button<Props>`
	border: none;
	font-size: 18px;
	border-radius: 8px;
	padding: 11px 24px;
	font-weight: 600;
	box-shadow: ${({ theme }) => castShadow(theme.black, 0, 0.3, 0.3, 0)};
	backdrop-filter: blur(12px);
	transition: background-color 0.3s ease, transform 0.3s linear;
	color: ${({ theme, color }) => theme[color].toString()};
	background-color: ${({ theme, background }) => theme[background].toString()};
	cursor: pointer;

	&:hover,
	&:focus {
		transform: translate3d(0, -4px, 0);
		${({ theme, hoverBackground }) =>
			hoverBackground
				? `background-color: ${theme[hoverBackground]?.toString()};`
				: null}
	}
`;

export default Button;
