import { NextPage } from "next";
import Background from "../../components/Background";
import Grid from "../../layout/grid";
import AlignCenter from "../../components/AlignCenter";
import Sections from "../../components/content/Sections";
import Button from "../../components/Button";
import Form from "../../components/Form";
import CharacterInput from "../../components/content/CharacterInput";
import { useRouter } from "next/router";

const Name: NextPage = () => {
	const route = useRouter();

	async function back() {
		await route.push("/create", "/create");
	}

	async function handleSubmit(event: React.FormEvent) {
		event.preventDefault();
		await route.push("/create/phone", "/create");
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Grid>
				<Background background={"treeGreen"} textColor={"white"}>
					<Sections
						caption={"질문 2"}
						title={"당신의\n이름은 무엇인가요?"}
						buttons={[
							<Button
								type={"button"}
								onClick={back}
								background={"treeGrey"}
								hoverBackground={"white"}
								color={"black"}
								key={"back"}>
								이전으로
							</Button>,
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
							maxLength={8}
							required
							placeholder={"이름을 입력해주세요 (8자 이내)"}
							name={"name"}
							characterUrl={"/name_character.png"}
							key={"name"}
							characterPositionY={-277}
						/>
					</AlignCenter>
				</Background>
			</Grid>
		</Form>
	);
};

export default Name;
