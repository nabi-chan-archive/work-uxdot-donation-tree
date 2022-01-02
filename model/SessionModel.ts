import PrismaModel from "./PrismaModel";

class SessionModel extends PrismaModel {
	constructor() {
		super();
	}

	/**
	 * 새로운 유저 세션을 시작합니다.
	 *
	 * @return {string} 생성된 세션 UUID
	 */
	async create(): Promise<string> {
		// return (
		// 	await this.client.session.create({
		// 		data: {},
		// 	})
		// ).uuid;
		return "this-is-test-uuid";
	}

	/**
	 * 세션에 저장된 사용자의 정보를 가져옵니다.
	 *
	 * @param uuid - 세션 ID
	 * @returns 사용자가 지금까지 입력한 정보
	 */
	async read(uuid: string): Promise<{
		phone: string | null;
		name: string | null;
	} | null> {
		// return await this.client.session.findUnique({
		// 	where: {
		// 		uuid: uuid,
		// 	},
		// 	select: {
		// 		createdAt: false,
		// 		donation: false,
		// 		id: true,
		// 		uuid: true,
		// 		name: true,
		// 		phone: true,
		// 	},
		// });
		return {
			name: "홍길동",
			phone: "1234",
		};
	}

	/**
	 * 세션에 연결되어 있는 유저의 정보를 수정합니다.
	 *
	 * @param uuid - 세션 ID
	 * @param data - 사용자가 입력한 정보
	 * @param data.phone - 유저가 입력한 핸드폰 번호 (4글자)
	 * @param data.name - 유저가 입력한 이름 (최대 8글자)
	 */
	async modify(
		uuid: string,
		data: {
			phone?: string;
			name?: string;
		},
	): Promise<void> {
		// await this.client.session.update({
		// 	where: {
		// 		uuid: uuid,
		// 	},
		// 	data,
		// });
		return;
	}
}

export default SessionModel;
