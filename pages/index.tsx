import type { NextPage } from "next";
import Image from "next/image";
import Background from "../components/Background";
import Button from "../components/Button";
import Absolute from "../components/Absolute";
import Flex from "../components/Flex";
import Space from "../components/Space";
import AlignCenter from "../components/AlignCenter";
import Caption from "../components/Caption";
import Title from "../components/Title";
import HandToHand from "../components/content/handToHand";
import Link from "next/link";
import Content from "../components/Content";

const Home: NextPage = () => {
	return (
		<Background background={"treeRed"} textColor={"white"}>
			<AlignCenter>
				<Content level={"content"}>
					<Flex>
						<Space w={119} />
						<div>
							<Caption>uxdot + 스타트허브 기부나눔 캠페인</Caption>
							<Space h={8} />
							<Title>
								스노우타운에서 <br /> 기적을 만들어주세요!
							</Title>
							<Space h={22} />
							<Flex>
								<Link href={"/create"}>
									<a>
										<Button background={"white"} color={"treeRed"}>
											만들러 가기
										</Button>
									</a>
								</Link>
								<Space w={16} />
								<Link href={"/donate"}>
									<a>
										<Button background={"white"} color={"treeRed"}>
											기부자 목록 보러가기
										</Button>
									</a>
								</Link>
							</Flex>
						</div>
					</Flex>
				</Content>{" "}
			</AlignCenter>

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
