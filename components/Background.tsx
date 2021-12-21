import type { Theme, ThemeColor } from "../styles/Theme";
import type { ReactNode } from "react";

import styled, { useTheme } from "styled-components";

interface Props {
	background: ThemeColor;
	textColor: ThemeColor;
	children: ReactNode;
}

const Background = styled.div<Props>`
	width: 100%;
	height: 100%;
	background-color: ${({ theme, background }) => theme[background].toString()};
	color: ${({ theme, textColor }) => theme[textColor].toString()};
`;

export default Background;
