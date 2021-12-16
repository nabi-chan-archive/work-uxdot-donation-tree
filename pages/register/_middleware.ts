import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { constant } from "../../constant";

export function middleware(req: NextRequest) {
	const referer = new URL(req.headers.get("referer") ?? "https://errored.page")
		.host;

	if (
		referer !== constant.UXDOT_METAVERSE_URL &&
		process.env.NODE_ENV !== "production"
	) {
		return new Response(`메타버스 플랫폼을 통해 접속해주세요!`, {
			status: 403,
		});
	}

	return NextResponse.next();
}
