import styled from "styled-components";
import { castShadow } from "../styles/Theme";

interface Props extends React.ComponentProps<"input"> {
	key: string;
}

const InputContainer = styled.div`
	input {
		padding: 18px 24px;
		font-size: 36px;
		border-radius: 8px;
		border: solid 1px transparent;
		background-color: ${({ theme }) => theme.white.alpha(0.7).toString()};
		color: ${({ theme }) => theme.treeGreen};
		box-shadow: ${({ theme }) => castShadow(theme.black, 0, 0.3, 0.3)};
		transition: background-color 0.3s ease;
		outline: solid 1px ${({ theme }) => theme.treeGreen};

		&::placeholder {
			color: ${({ theme }) => theme.treeGreen};
		}

		&:focus,
		&:hover {
			background-color: ${({ theme }) => theme.white.toString()};
		}
	}
`;

const Input: React.FC<Props> = ({ ...props }) => {
	return (
		<InputContainer>
			<input {...props} />
		</InputContainer>
	);
};

export default Input;
