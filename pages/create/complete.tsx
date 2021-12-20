import type { NextPage } from "next";
import Background from "../../components/Background";
import HandToHand from "../../components/content/handToHand";
import Sections from "../../components/content/Sections";
import Button from "../../components/Button";
import Link from "next/link";

const Complete: NextPage = () => {
	return (
		<Background background={"treeGreen"} textColor={"white"}>
			<Sections
				caption={"uxdot + 스타트허브 기부나눔 캠페인"}
				title={"함께해주셔서\n감사합니다"}
				buttons={[
					<Link href={"/donate"} key={"/donate"}>
						<a>
							<Button background={"white"} color={"treeGreen"}>
								기부자 목록 보러가기
							</Button>
						</a>
					</Link>,
				]}
			/>
			<HandToHand />
		</Background>
	);
};

export default Complete;
