import { ReactNode } from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
	position: relative;
`;

function getLevel(level: "toast" | "content" | "background", index: number) {
	switch (level) {
		case "background":
			return index;
		case "content":
			return 10 + index;
		case "toast":
			return 20 + index;
	}
}

interface Props {
	level: "toast" | "content" | "background";
	index?: number;
	children: ReactNode;
}

const Content: React.FC<Props> = ({ level, index = 0, children }) => {
	return (
		<ContentContainer
			style={{
				zIndex: getLevel(level, index),
			}}>
			{children}
		</ContentContainer>
	);
};

export default Content;
