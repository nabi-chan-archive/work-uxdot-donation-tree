import styled from "styled-components";

interface Props {
	left?: number | string;
	right?: number | string;
	top?: number | string;
	bottom?: number | string;
}

const Absolute = styled.div<Props>`
	position: absolute;
	top: ${({ top }) => (typeof top === "number" ? `${top}px` : top)};
	left: ${({ left }) => (typeof left === "number" ? `${left}px` : left)};
	right: ${({ right }) => (typeof right === "number" ? `${right}px` : right)};
	bottom: ${({ bottom }) =>
		typeof bottom === "number" ? `${bottom}px` : bottom};
`;

export default Absolute;
