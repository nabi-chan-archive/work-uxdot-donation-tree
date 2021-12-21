import { NextPage } from "next";
import Link from "next/link";
import Button from "../components/Button";
import Background from "../components/Background";
import Sections from "../components/content/Sections";
import Image from "next/image";
import Absolute from "../components/Absolute";

const NotFound: NextPage = () => {
	return (
		<Background background={"treeRed"} textColor={"white"}>
			<Sections
				caption={"500 Service Error :("}
				title={"서비스에 오류가\n발생했어요!"}
				buttons={[
					<Link href={"/"} key={"/"}>
						<a>
							<Button background={"white"} color={"treeRed"}>
								메인으로 돌아가보기
							</Button>
						</a>
					</Link>,
					<a
						key={"//open.kakao.com/o/shkdihQd"}
						href={"//open.kakao.com/o/shkdihQd"}
						target={"_blank"}
						rel={"noreferrer noopener"}>
						<Button background={"white"} color={"treeRed"}>
							개발자에게 알려주기
						</Button>
					</a>,
				]}
			/>

			<Absolute
				top={"50%"}
				left={"50%"}
				style={{
					transform: "translate(calc(-50% + 150px), -50%)",
				}}>
				<Image
					src={"/keyword_character.png"}
					alt={""}
					width={180}
					height={410}
				/>
			</Absolute>
		</Background>
	);
};

export default NotFound;
