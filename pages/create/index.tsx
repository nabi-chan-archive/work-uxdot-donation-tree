import { NextPage } from "next";
import Background from "../../components/Background";
import Grid from "../../layout/grid";
import AlignCenter from "../../components/AlignCenter";
import Sections from "../../components/content/Sections";
import Button from "../../components/Button";
import Form from "../../components/Form";
import CharacterInput from "../../components/content/CharacterInput";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { requester } from "../../lib/requster";
import { useToast } from "../../context/toast.context";

const Create: NextPage = () => {
	const route = useRouter();
	const { makeToast } = useToast();

	async function handleSubmit(event: React.FormEvent) {
		event.preventDefault();
		makeToast(
			"notification",
			{
				title: "잠시만요!",
				message:
					"유저님이 사용할 기부공을 만들고 있어요!\n잠시만 기다려주세요 🥺",
			},
			1500,
		);
		Cookies.set(
			"accessToken",
			(await requester.post("/api/session")).data.token,
		);
		await route.push("/create/name", "/create");
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Grid>
				<Background background={"treeGreen"} textColor={"white"}>
					<Sections
						caption={"질문 1"}
						title={"게더타운에서 확인한\n보안키워드를\n입력하세요"}
						buttons={[
							<Button
								background={"treeGrey"}
								hoverBackground={"white"}
								color={"black"}
								key={"next"}>
								다음으로
							</Button>,
						]}
					/>
				</Background>
				<Background background={"treeGreenBright"} textColor={"white"}>
					<AlignCenter
						style={{
							justifyContent: "center",
						}}>
						<CharacterInput
							type="text"
							required
							maxLength={8}
							placeholder={"보안키워드"}
							name={"secure_keyword"}
							characterUrl={"/keyword_character.png"}
							key={"secureKeyword"}
							characterPositionY={-225}
						/>
					</AlignCenter>
				</Background>
			</Grid>
		</Form>
	);
};

export default Create;
