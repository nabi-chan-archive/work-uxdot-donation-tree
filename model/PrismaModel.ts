import { PrismaClient } from "@prisma/client";

class PrismaModel {
	client: PrismaClient;

	constructor() {
		this.client = new PrismaClient();
	}
}

export default PrismaModel;
