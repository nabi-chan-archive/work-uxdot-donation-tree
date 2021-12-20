import Flex from "../Flex";
import Space from "../Space";
import styled from "styled-components";

interface Props {
	current: number;
	target: number;
}

const CurrentText = styled.h1`
	font-size: 14px;
`;

const CurrentTemperture = styled.h2`
	font-size: 60px;
	font-weight: 600;
`;

const DonateTemperature: React.FC<Props> = ({ current, target }) => {
	const progress = (current / target) * 100;

	function getHeight() {
		if (progress >= 100) return 313;
		return (313 * progress) / 100;
	}

	function getPosition() {
		const height = getHeight();
		if (height < 26) return 313 - height;
		return 326 - height;
	}

	return (
		<Flex
			style={{
				flexDirection: "column",
				alignItems: "center",
			}}>
			<svg
				width="84"
				height="368"
				viewBox="0 0 84 368"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<circle cx="41.7875" cy="326.212" r="41.7875" fill="white" />
				<rect
					x="20.2197"
					width="43.1355"
					height="347.78"
					rx="21.5678"
					fill="white"
				/>
				<circle cx="41.7875" cy="326.212" r="21.5678" fill="#F24F14" />
				<rect
					x="34"
					y={getPosition()}
					width="16"
					height={getHeight()}
					rx="8"
					fill="#F24F14"
				/>
			</svg>
			<Space h={35} />
			<CurrentText>현재 기부온도</CurrentText>
			<Space h={3} />
			<CurrentTemperture>{parseInt(String(progress))}°C</CurrentTemperture>
		</Flex>
	);
};

export default DonateTemperature;
