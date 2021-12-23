import { getRandColor } from "../lib/getRandColor";
import PrismaModel from "./PrismaModel";
import { ThemeColor } from "../styles/Theme";
import { ballPosition, dummyBallPosition } from "../constant/balls";

class DonationModel extends PrismaModel {
	constructor() {
		super();
	}

	/**
	 * 세션을 기반으로 기부 데이터를 연동합니다.
	 *
	 * @param uuid - uuid
	 */
	async create(uuid: string) {
		await this.client.donation.create({
			data: {
				session: {
					connect: {
						uuid,
					},
				},
			},
		});
	}

	/**
	 * 지금까지 진행된 기부 목록을 최신순으로 정렬하여 가져옵니다.
	 *
	 * @param take - 페이지당 가져올 아이템의 개수를 표시합니다.
	 * @param page - 목록에서 가져올 페이지입니다.
	 */
	async list(take: number, page: number) {
		const skip = take * page;

		return (
			(
				await this.client.donation.findMany({
					orderBy: {
						createdAt: "asc",
					},
					select: {
						id: true,
						sessionId: false,
						createdAt: false,
						session: {
							select: {
								id: false,
								name: true,
								phone: true,
							},
						},
					},
					skip,
					take,
				})
			)
				// make object flat
				.map(({ id, session }) => ({
					id,
					...session,
				}))
				// set encrypt user's phone
				.map(({ phone, ...obj }) => ({
					...obj,
					phone: `${phone!.slice(0, 1)}**${phone!.slice(3, 4)}`,
				}))
				// set ballSize
				.map((obj) => ({
					...obj,
					ballSize: "big" as "big",
				}))
				// set color
				.map((obj) => {
					const background = getRandColor();
					const text = background === "white" ? "treeGreen" : "white";

					return {
						...obj,
						ballText: text as ThemeColor,
						ballBackground: background as ThemeColor,
					};
				})
				// set ball position
				.map((obj, index) => ({
					...obj,
					...ballPosition[index],
				}))
		);
	}

	/**
	 * 더미용 볼을 추가합니다
	 *
	 * @param length - 가져올 아이템의 총 개수입니다.
	 */
	async getSmallBalls(length = 9) {
		return (
			new Array(length * 2)
				.fill("")
				// make object flat
				.map((_, index) => ({
					id: `dummy${index}`,
					name: "dummy",
					phone: "0000",
					ballSize: "small" as "small",
					...dummyBallPosition[index],
				}))
				// set color
				.map((obj) => {
					const background = getRandColor();
					const text = background === "white" ? "treeGreen" : "white";

					return {
						...obj,
						ballText: text as ThemeColor,
						ballBackground: background as ThemeColor,
					};
				})
		);
	}

	/**
	 * 기부와 관련된 메타데이터를 가져옵니다.
	 */
	async metadata() {
		return await this.client.donation.aggregate({
			_count: true,
		});
	}
}

export default DonationModel;
