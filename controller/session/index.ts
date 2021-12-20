import { NextApiRequest as Request, NextApiResponse as Response } from "next";
import SessionModel from "../../model/SessionModel";
import jwt from "jsonwebtoken";

export interface TokenPayload {
	uuid: string;
}

class SessionController {
	model: SessionModel;

	constructor() {
		this.model = new SessionModel();
	}

	/**
	 * 새로운 유저 세션을 시작합니다.
	 */
	async create(_: Request, res: Response) {
		const uuid = await this.model.create();
		const token = jwt.sign(
			{
				uuid,
			} as TokenPayload,
			process.env.SECRET || "",
			{
				expiresIn: "3h",
			},
		);

		return res.status(201).json({
			token,
		});
	}

	/**
	 * 세션에 저장된 사용자의 정보를 가져옵니다.
	 */
	async read(req: Request, res: Response) {
		const token = req.cookies.accessToken || "";
		const { uuid } = jwt.decode(token) as TokenPayload;

		const data = await this.model.read(uuid);

		if (!data) return res.status(404).end();

		res.status(200).json(data);
	}

	/**
	 * 세션에 연결되어 있는 유저의 정보를 수정합니다.
	 */
	async modify(req: Request, res: Response) {
		const token = req.cookies.accessToken || "";
		const { uuid } = jwt.decode(token) as TokenPayload;

		try {
			await this.model.modify(uuid, req.body);

			return res.status(200).end();
		} catch (error) {
			console.log(error);
			res.status(500).end();
		}
	}
}

export default SessionController;
