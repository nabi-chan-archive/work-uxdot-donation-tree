import { NextApiHandler } from "next";
import SessionController from "../../../controller/session";

const Session: NextApiHandler = async (...rest): Promise<void> => {
	const model = new SessionController();

	switch (rest[0].method) {
		case "POST":
			return await model.create(...rest);
		case "PUT":
			return await model.modify(...rest);
	}
};

export default Session;
