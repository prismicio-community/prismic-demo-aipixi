import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { redirectToPreviewURL } from "@prismicio/next";

import { createClient } from "@/prismicio";

export async function GET(request: NextRequest) {
	const client = createClient();

	// This is a Prismic demo-specific URL parameter.
	// It does not exist in real Prismic repositories.
	const previewSessionID = request.nextUrl.searchParams.get("session_id");
	if (previewSessionID)
		cookies().set("io.prismic.previewSession", previewSessionID);

	return await redirectToPreviewURL({ client, request });
}
