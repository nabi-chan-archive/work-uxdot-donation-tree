import { NextRequest, NextResponse } from "next/server";
import jsonwebtoken, {
	JsonWebTokenError,
	TokenExpiredError,
} from "jsonwebtoken";

function _middleware(req: NextRequest) {
	const token = req.cookies.accessToken;

	// if create new session, next()
	if (req.method === "POST") return NextResponse.next();

	// if user token is null, throw 401
	if (!token)
		return new Response("", {
			status: 401,
		});

	// verify jsonwebtoken
	try {
		jsonwebtoken.verify(token, process.env.SECRET || "");
	} catch (error) {
		if (error instanceof JsonWebTokenError) {
			return new Response("invalid signature", {
				status: 400,
			});
		} else if (error instanceof TokenExpiredError) {
			return new Response("Token has expired", {
				status: 401,
			});
		}

		console.error(error);
		return new Response("", {
			status: 500,
		});
	}

	// next()
	NextResponse.next();
}

export default _middleware;
