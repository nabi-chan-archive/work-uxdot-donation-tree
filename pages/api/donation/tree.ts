import { NextApiHandler } from "next";
import DonationContainer from "../../../controller/donation";

const DonationTree: NextApiHandler = async (...rest): Promise<void> => {
	const model = new DonationContainer();

	switch (rest[0].method) {
		case "GET":
			return await model.tree(...rest);
		default:
			return rest[1].status(405).end();
	}
};

export default DonationTree;
