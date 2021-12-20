import { NextPage } from "next";
import Background from "../../components/Background";
import Grid from "../../layout/grid";
import AlignCenter from "../../components/AlignCenter";
import Sections from "../../components/content/Sections";
import Button from "../../components/Button";
import Form from "../../components/Form";
import CharacterInput from "../../components/content/CharacterInput";
import { useRouter } from "next/router";
import DonateBall from "../../components/DonateBall";

const Confirm: NextPage = () => {
	const route = useRouter();

	async function back() {
		await route.push("/create/phone", "/create");
	}

	async function handleSubmit(event: React.FormEvent) {
		event.preventDefault();
		await route.push("/create", "/create");
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
				<Background background={"treeGreenBright"} textColor={"white"}>
					<AlignCenter
						style={{
							justifyContent: "center",
						}}>
						<DonateBall
							ballBackground={"white"}
							ballText={"treeGreen"}
							ballSize={"preview"}
							name={"권성배"}
							phone={"4**5"}
						/>
					</AlignCenter>
				</Background>
			</Grid>
		</Form>
	);
};

export default Confirm;
