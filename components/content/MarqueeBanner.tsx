import Marquee from "react-fast-marquee";
import styled from "styled-components";
import Image from "next/image";
import Color from "color";

const MarqueeBannerContainer = styled.div`
	background: ${({ theme }) => theme.treeBrown};
	font-family: ${({ theme }) => theme.montserratFontFamily};
	color: ${Color.rgb(255, 255, 255).toString()};
	border-bottom: solid 1px ${({ theme }) => theme.treeDeepGreen};
	font-size: 1em;
	z-index: 60;

	.marquee-container {
		height: 40px;
	}

	.marquee {
		column-gap: 8px;
		margin-right: 8px;
	}
`;

const MarqueeBanner: React.FC = () => {
	return (
		<MarqueeBannerContainer>
			<Marquee gradient={false}>
				<span>WE WISH YOU A MERRY CHRISTMAS</span>
				<Image src={"/snow_big.svg"} alt={""} width={18.84} height={21.54} />
				<span>AND A HAPPY NEW YEAR</span>
				<Image src={"/snow_small.svg"} alt={""} width={16.96} height={16.96} />

				<span>WE WISH YOU A MERRY CHRISTMAS</span>
				<Image src={"/snow_big.svg"} alt={""} width={18.84} height={21.54} />
				<span>AND A HAPPY NEW YEAR</span>
				<Image src={"/snow_small.svg"} alt={""} width={16.96} height={16.96} />

				<span>WE WISH YOU A MERRY CHRISTMAS</span>
				<Image src={"/snow_big.svg"} alt={""} width={18.84} height={21.54} />
				<span>AND A HAPPY NEW YEAR</span>
				<Image src={"/snow_small.svg"} alt={""} width={16.96} height={16.96} />

				<span>WE WISH YOU A MERRY CHRISTMAS</span>
				<Image src={"/snow_big.svg"} alt={""} width={18.84} height={21.54} />
				<span>AND A HAPPY NEW YEAR</span>
				<Image src={"/snow_small.svg"} alt={""} width={16.96} height={16.96} />
			</Marquee>
		</MarqueeBannerContainer>
	);
};

export default MarqueeBanner;
