import styled from "styled-components";
import { ThemeColor } from "../../styles/Theme";

interface Props {
	background: ThemeColor;
	text: ThemeColor;
}

const SpaceBetween = styled.dl<Props>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 12px 16px;
	font-size: 14px;
	border-bottom: solid 1px ${({ theme }) => theme.treeDeepGreen.toString()};
	color: ${({ theme, text }) => theme[text].toString()};
	background-color: ${({ theme, background }) => theme[background].toString()};
	font-weight: 600;
`;

export default SpaceBetween;
