import styled from "styled-components";
import Input from "../Input";
import Absolute from "../Absolute";
import Image from "next/image";

interface Props extends React.ComponentProps<typeof Input> {
	characterUrl: string;
	characterPositionY: number;
}

const CharacterInputContainer = styled.div`
	position: relative;
`;

const CharacterInput: React.FC<Props> = ({
	characterUrl,
	characterPositionY,
	...props
}) => {
	return (
		<CharacterInputContainer>
			<Input {...props} />
			<Absolute right={38} bottom={characterPositionY}>
				<Image src={characterUrl} alt={""} width={180} height={410} />
			</Absolute>
		</CharacterInputContainer>
	);
};

export default CharacterInput;
