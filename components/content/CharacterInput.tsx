import styled from "styled-components";
import Absolute from "../Absolute";
import Image from "next/image";

interface Props {
	characterUrl: string;
	characterPositionY: number;
}

const CharacterInputContainer = styled.div`
	position: relative;
`;

const CharacterInput: React.FC<Props> = ({
	characterUrl,
	characterPositionY,
	children,
}) => {
	return (
		<CharacterInputContainer>
			{children}
			<Absolute right={38} bottom={characterPositionY}>
				<Image src={characterUrl} alt={""} width={180} height={410} />
			</Absolute>
		</CharacterInputContainer>
	);
};

export default CharacterInput;
