import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
	left?: number | string;
	right?: number | string;
	top?: number | string;
	bottom?: number | string;
	children: ReactNode;
}

const AbsoluteContainer = styled.div`
	position: absolute;
`;

const Absolute: React.FC<Props> = ({ top, left, right, bottom, children }) => {
	return (
		<AbsoluteContainer
			style={{
				top,
				left,
				right,
				bottom,
			}}>
			{children}
		</AbsoluteContainer>
	);
};

export default Absolute;
