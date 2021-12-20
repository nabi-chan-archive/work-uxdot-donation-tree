import PrismaModel from "./PrismaModel";

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

		return await this.client.donation.findMany({
			orderBy: {
				createdAt: "desc",
			},
			include: {
				session: {
					select: {
						id: true,
						name: true,
						phone: true,
					},
				},
			},
			skip,
			take,
		});
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
