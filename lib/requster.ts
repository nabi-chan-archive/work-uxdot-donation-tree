import axios from "axios";

export const requester = axios.create({
	baseURL: process.env.DOMAIN_HOST,
});
