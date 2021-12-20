import type { Theme, ThemeColor } from "../styles/Theme";
import type { ReactNode } from "react";

import styled, { useTheme } from "styled-components";

interface Props {
	background: ThemeColor;
	textColor: ThemeColor;
	children: ReactNode;
}

const BackgroundContainer = styled.div`
	width: 100%;
	height: 100%;
`;

const Background: React.FC<Props> = ({ background, textColor, children }) => {
	const theme = useTheme() as Theme;
	return (
		<BackgroundContainer
			style={{
				background: theme[background].toString(),
				color: theme[textColor].toString(),
			}}>
			{children}
		</BackgroundContainer>
	);
};

export default Background;
