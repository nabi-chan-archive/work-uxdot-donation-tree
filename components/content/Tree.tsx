import styled from "styled-components";
import DonateBall from "../DonateBall";
import StaggerChildren from "../../animation/StaggerChildren";
import { motion } from "framer-motion";

const TreeContainer = styled.div`
	position: relative;
	width: 387px;
	height: 566px;
`;

const AnimatedAbsoluteDonateBall = styled(motion.div)<{
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

const variants = {
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: "easeInOut",
		},
	},
	hide: {
		opacity: 0,
		y: 10,
		transition: {
			ease: "easeInOut",
		},
	},
};

const Tree: React.FC<Props> = ({ balls }) => {
	return (
		<TreeContainer>
			<StaggerChildren>
				{balls.map((ball) => (
					<AnimatedAbsoluteDonateBall
						variants={variants}
						key={ball.id}
						top={ball.top}
						left={ball.left}>
						<DonateBall {...ball} />
					</AnimatedAbsoluteDonateBall>
				))}
			</StaggerChildren>
		</TreeContainer>
	);
};

export default Tree;
