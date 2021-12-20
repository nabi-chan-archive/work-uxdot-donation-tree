import { ThemeColor } from "../styles/Theme";
import styled from "styled-components";

interface Props {
	color?: ThemeColor;
	weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
	size?: number;
}

const Text = styled.span<Props>`
	${({ theme, color }) => (color ? `color: ${theme[color].toString()}` : null)};
	font-weight: ${({ weight }) => weight};
	font-size: ${({ size }) => `${size}px`};
`;

export default Text;
