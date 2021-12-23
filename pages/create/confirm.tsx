import { GetServerSideProps, NextPage } from "next";
import Background from "../../components/Background";
import Grid from "../../layout/grid";
import AlignCenter from "../../components/AlignCenter";
import Sections from "../../components/content/Sections";
import Button from "../../components/Button";
import Form from "../../components/Form";
import { useRouter } from "next/router";
import DonateBall from "../../components/content/DonateBall";
import SessionModel from "../../model/SessionModel";
import jsonwebtoken from "jsonwebtoken";
import Image from "next/image";
import Content from "../../components/Content";
import { requester } from "../../lib/requster";
import { useToast } from "../../context/toast.context";

interface Props {
	userInfo: {
		name: string;
		phone: string;
	};
}

const Confirm: NextPage<Props> = ({ userInfo }) => {
	const route = useRouter();
	const { makeToast } = useToast();

	async function back() {
		await route.push("/create/name", "/create");
	}

	async function handleSubmit(event: React.FormEvent) {
		event.preventDefault();
		makeToast("notification", {
			title: "잠시만요!",
			message:
				"기부공을 트리에 달고 있어요!\n 조금만 기다려주세요 🙏" +
				"만약 다음페이지로 넘어가지지 않는다면...\n버튼을 한번만 더 눌려주세요!",
		});
		await requester.post("/api/donation");
		await route.push("/create/complete", "/create");
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Grid>
				<Background background={"treeGreen"} textColor={"white"}>
					<Sections
						caption={"질문 4"}
						title={"당신의\n기부공이 맞나요?"}
						buttons={[
							<Button
								type={"button"}
								onClick={back}
								background={"treeGrey"}
								hoverBackground={"white"}
								color={"black"}
								key={"back"}>
								다시 확인해볼게요! (처음으로)
							</Button>,
							<Button
								background={"treeGrey"}
								hoverBackground={"white"}
								color={"black"}
								key={"next"}>
								당연하죠!
							</Button>,
						]}
					/>
				</Background>
				<Background
					background={"treeGreenBright"}
					textColor={"white"}
					style={{
						position: "relative",
					}}>
					<Image
						layout={"fill"}
						src={"/confirm.png"}
						alt={""}
						objectFit={"cover"}
						objectPosition={"center"}
					/>
					<AlignCenter
						style={{
							justifyContent: "center",
						}}>
						<Content level={"content"}>
							<DonateBall
								ballBackground={"white"}
								ballText={"treeGreen"}
								ballSize={"preview"}
								name={userInfo.name}
								phone={`${userInfo.phone.slice(0, 1)}**${userInfo.phone.slice(
									3,
									4,
								)}`}
							/>
						</Content>
					</AlignCenter>
				</Background>
			</Grid>
		</Form>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const model = new SessionModel();
	const { uuid } = jsonwebtoken.decode(req.cookies.accessToken!) as {
		uuid: string;
	};

	const userInfo = await model.read(uuid);

	return {
		props: {
			userInfo,
		},
	};
};

export default Confirm;
