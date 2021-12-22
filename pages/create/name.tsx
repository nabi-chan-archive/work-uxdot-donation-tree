import { GetServerSideProps, NextPage } from "next";
import Background from "../../components/Background";
import Grid from "../../layout/grid";
import AlignCenter from "../../components/AlignCenter";
import Sections from "../../components/content/Sections";
import Button from "../../components/Button";
import Form from "../../components/Form";
import CharacterInput from "../../components/content/CharacterInput";
import { useRouter } from "next/router";
import SessionModel from "../../model/SessionModel";
import jsonwebtoken from "jsonwebtoken";
import { FormElement } from "../../type";
import { requester } from "../../lib/requster";
import Input from "../../components/Input";

interface Props {
	userInfo: {
		name: string;
		phone: string;
	};
}

const Name: NextPage<Props> = ({ userInfo }) => {
	const route = useRouter();
	async function handleSubmit(event: React.FormEvent<FormElement>) {
		event.preventDefault();
		await requester.put("/api/session", {
			name: event.currentTarget.elements.name.value,
		});
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
							characterUrl={"/name_character.png"}
							characterPositionY={-277}>
							<Input
								type="text"
								maxLength={8}
								required
								placeholder={"이름을 입력해주세요 (8자 이내)"}
								name={"name"}
								key={"name"}
								defaultValue={userInfo.name}
							/>
						</CharacterInput>
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

export default Name;
