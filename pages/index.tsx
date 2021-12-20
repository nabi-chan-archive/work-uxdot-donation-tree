import type { NextPage } from "next";
import Image from "next/image";
import Background from "../components/Background";
import Absolute from "../components/Absolute";
import Flex from "../components/Flex";
import Space from "../components/Space";
import HandToHand from "../components/content/handToHand";
import Content from "../components/Content";
import Sections from "../components/content/Sections";
import Button from "../components/Button";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<Background background={"treeRed"} textColor={"white"}>
			<Sections
				caption={"uxdot + 스타트허브 기부나눔 캠페인"}
				title={"스노우타운에서\n기적을 만들어주세요!"}
				buttons={[
					<Link href={"/create"} key={"/create"}>
						<a>
							<Button background={"white"} color={"treeRed"}>
								만들러 가기
							</Button>
						</a>
					</Link>,
					<Link href={"/donate"} key={"/donate"}>
						<a>
							<Button background={"white"} color={"treeRed"}>
								기부자 목록 보러가기
							</Button>
						</a>
					</Link>,
				]}
			/>

			<HandToHand />
			<Content level={"content"}>
				<Absolute left={57} bottom={54}>
					<Flex>
						<Image src={"/uxdot.svg"} alt={"UXDot"} width={70} height={21.24} />
						<Space w={24} />
						<Image
							src={"/starthub.svg"}
							alt={"STARTHUB"}
							width={129}
							height={22}
						/>
					</Flex>
				</Absolute>
			</Content>
		</Background>
	);
};

export default Home;
