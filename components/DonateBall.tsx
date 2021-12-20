import styled from "styled-components";
import { ThemeColor } from "../styles/Theme";

interface Props {
	ballBackground: ThemeColor;
	ballText: ThemeColor;
	ballSize: "small" | "big" | "preview";
	name: string;
	phone: string;
}

function getBallSize(size: Props["ballSize"]) {
	switch (size) {
		case "small":
			return {
				width: 22,
				font: 0,
			};
		case "big":
			return {
				width: 90,
				font: 16,
			};
		case "preview":
			return {
				width: 210,
				font: 36,
			};
	}
}

const DonateBallContainer = styled.div<Omit<Props, "name" | "phone">>`
	width: ${({ ballSize }) => `${getBallSize(ballSize).width}px`};
	height: ${({ ballSize }) => `${getBallSize(ballSize).width}px`};
	font-size: ${({ ballSize }) => `${getBallSize(ballSize).font}px`};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: ${({ theme, ballText }) => theme[ballText].toString()};
	background-color: ${({ theme, ballBackground }) =>
		theme[ballBackground].toString()};
	border-radius: 50%;
	line-height: 1.2;
`;

const DonateBall: React.FC<Props> = ({ name, phone, ...props }) => {
	if (props.ballSize === "small") return <DonateBallContainer {...props} />;

	return (
		<DonateBallContainer {...props}>
			<h4>{name}</h4>
			<h5>{phone}</h5>
		</DonateBallContainer>
	);
};

export default DonateBall;
