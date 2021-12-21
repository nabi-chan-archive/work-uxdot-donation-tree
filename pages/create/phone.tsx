import { GetServerSideProps, NextPage } from "next";
import Background from "../../components/Background";
import Grid from "../../layout/grid";
import AlignCenter from "../../components/AlignCenter";
import Sections from "../../components/content/Sections";
import Button from "../../components/Button";
import Form from "../../components/Form";
import { useRouter } from "next/router";
import Input from "../../components/Input";
import SessionModel from "../../model/SessionModel";
import jsonwebtoken from "jsonwebtoken";
import { FormElement } from "../../type";
import { requester } from "../../lib/requster";
interface Props {
	userInfo: {
		name: string;
		phone: string;
	};
}

const Phone: NextPage<Props> = ({ userInfo }) => {
	const route = useRouter();

	async function back() {
		await route.push("/create/name", "/create");
	}

	async function handleSubmit(event: React.FormEvent<FormElement>) {
		event.preventDefault();
		await requester.put("/api/session", {
			phone: event.currentTarget.elements.phone.value,
		});
		await route.push("/create/confirm", "/create");
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Grid>
				<Background background={"treeGreen"} textColor={"white"}>
					<Sections
						caption={"질문 3"}
						title={"본인을 식별하기 위한\n전화번호 끝 4자리를\n입력해주세요."}
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
						<Input
							maxLength={4}
							type="text"
							required
							placeholder={"전화번호 끝 4자리"}
							name={"phone"}
							key={"phone"}
							defaultValue={userInfo.phone}
						/>
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

export default Phone;
