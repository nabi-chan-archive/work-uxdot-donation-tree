import { NextApiHandler } from "next";
import DonationContainer from "../../../controller/donation";

const Donation: NextApiHandler = async (...rest): Promise<void> => {
	const model = new DonationContainer();

	switch (rest[0].method) {
		case "POST":
			return await model.create(...rest);
		case "GET":
			return await model.list(...rest);
		default:
			return rest[1].status(405).end();
	}
};

export default Donation;
