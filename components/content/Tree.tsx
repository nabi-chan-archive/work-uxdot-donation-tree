import styled from "styled-components";
import DonateBall from "../DonateBall";

const TreeContainer = styled.div`
	position: relative;
	width: 387px;
	height: 566px;
`;

const AbsoluteDonateBall = styled(DonateBall)<{
	top: number;
	left: number;
}>`
	position: absolute;
	top: ${({ top }) => `${top}px`};
	left: ${({ left }) => `${left}px`};
`;

export type Ball = React.ComponentProps<typeof DonateBall> & {
	id: string;
	top: number;
	left: number;
};

interface Props {
	balls: Ball[];
}

const Tree: React.FC<Props> = ({ balls }) => {
	return (
		<TreeContainer>
			{balls.map((ball) => (
				<AbsoluteDonateBall key={ball.id} {...ball} />
			))}
		</TreeContainer>
	);
};

export default Tree;
