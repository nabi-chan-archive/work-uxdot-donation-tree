import styled from "styled-components";
import Input from "../Input";

const SplitInputContainer = styled.div`
	display: flex;
	column-gap: 16px;

	div:last-child {
		input {
			width: 8.2ch;
		}
	}

	input {
		box-sizing: border-box;
		width: 5.2ch;
		text-align: center;
	}
`;

const SplitInput: React.FC = () => {
	return (
		<SplitInputContainer>
			<Input
				placeholder={"OO"}
				required
				maxLength={2}
				minLength={2}
				name={"secureKeyword1"}
				key={"secureKeyword1"}
			/>
			<Input
				placeholder={"OO"}
				required
				maxLength={2}
				minLength={2}
				name={"secureKeyword2"}
				key={"secureKeyword2"}
			/>
			<Input
				placeholder={"OO"}
				required
				maxLength={2}
				minLength={2}
				name={"secureKeyword3"}
				key={"secureKeyword3"}
			/>
			<Input
				placeholder={"OOOO"}
				required
				maxLength={4}
				minLength={4}
				name={"secureKeyword4"}
				key={"secureKeyword4"}
			/>
		</SplitInputContainer>
	);
};

export default SplitInput;
