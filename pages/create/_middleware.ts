import { NextRequest, NextResponse } from "next/server";

function _middleware(req: NextRequest) {
	if (req.url !== "/create") {
		return NextResponse.rewrite("/404");
	}

	if (!req.cookies.accessToken) return NextResponse.rewrite("/create");

	NextResponse.next();
}

export default _middleware;
