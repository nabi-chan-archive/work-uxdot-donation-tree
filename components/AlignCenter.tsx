import styled from "styled-components";
import Flex from "./Flex";

interface Props {
	justify?: boolean;
}

const AlignCenter = styled(Flex)<Props>`
	align-items: center;
	justify-content: ${({ justify }) => (justify ? "center" : null)};
	height: 100%;
`;

export default AlignCenter;
