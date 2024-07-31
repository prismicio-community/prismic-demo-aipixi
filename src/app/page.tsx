import { Metadata } from "next";
import { cookies } from "next/headers";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { renderAPIDocument } from "@/lib/renderAPIDocument";
import { components } from "@/slices";
import { documentData } from "@/documentData";

export async function generateMetadata(): Promise<Metadata> {
	const home = await getPage();

	return {
		title: prismic.asText(home.data.metaTitle),
		description: prismic.asText(home.data.metaDescription),
	};
}

export default async function Index() {
	const home = await getPage();

	return <SliceZone slices={home.data.slices} components={components} />;
}

async function getPage(): Promise<prismic.Content.PageDocument> {
	const sessionID = cookies().get("$$-demo-session-id")?.value;
	if (!sessionID) {
		return renderAPIDocument<prismic.Content.PageDocument>(documentData);
	}

	const url = new URL("./document-data", process.env.PRISMIC_DEMO_API_BASE_URL);
	url.searchParams.set("session", sessionID);

	let res = await fetch(url.toString(), { cache: "no-store" });
	if (res.ok) {
		const data = await res.json();

		return renderAPIDocument<prismic.Content.PageDocument>(data);
	}

	return renderAPIDocument<prismic.Content.PageDocument>(documentData);
}
