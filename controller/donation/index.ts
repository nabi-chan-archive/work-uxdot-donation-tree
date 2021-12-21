import { NextApiRequest as Request, NextApiResponse as Response } from "next";
import DonationModel from "../../model/DonationModel";
import jsonwebtoken from "jsonwebtoken";
import { TokenPayload } from "../session";

class DonationController {
	model: DonationModel;

	constructor() {
		this.model = new DonationModel();
	}

	/**
	 * 세션 uuid를 기반으로 기부 데이터를 만듭니다.
	 */
	async create(req: Request, res: Response) {
		const token = req.headers.authorization || req.cookies.accessToken || "";
		const { uuid } = jsonwebtoken.decode(token) as TokenPayload;

		try {
			await this.model.create(uuid);

			return res.status(201).end();
		} catch (error) {
			console.log(error);
			return res.status(500).end();
		}
	}

	/**
	 * 지금까지 진행된 기부 목록을 트리에 맞게 9개씩 끊어서 가져옵니다.
	 */
	async tree(req: Request, res: Response) {
		const big = await this.model.list(9, Number(req.query.page || 0));
		const small = await this.model.getSmallBalls(big.length);

		return res
			.status(200)
			.json([...big, ...small].sort((p, c) => (p.top > c.top ? 1 : -1)));
	}

	/**
	 * 지금까지 진행된 기부 목록을 기부 목록에 맞게 20개씩 끊어서 가져옵니다.
	 */
	async list(req: Request, res: Response) {
		return res
			.status(200)
			.json(await this.model.list(20, Number(req.query.page || 0)));
	}

	/**
	 * 기부와 관련된 메타데이터를 가져옵니다.
	 */
	async metadata(req: Request, res: Response) {
		return res.status(200).json(await this.model.metadata());
	}
}

export default DonationController;
