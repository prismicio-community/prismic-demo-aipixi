import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export function GET(request: NextRequest) {
	const session = request.nextUrl.searchParams.get("session");

	if (session) {
		cookies().set("$$-demo-session-id", session);
	}

	return redirect(`/`);
}
