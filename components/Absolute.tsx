import styled from "styled-components";

interface Props {
	left?: number | string;
	right?: number | string;
	top?: number | string;
	bottom?: number | string;
}

const Absolute = styled.div<Props>`
	position: absolute;
	top: ${({ top }) => top};
	left: ${({ left }) => left};
	right: ${({ right }) => right};
	bottom: ${({ bottom }) => bottom};
`;

export default Absolute;
