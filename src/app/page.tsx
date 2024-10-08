import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Index() {
	const client = createClient();
	const home = await client.getSingle("home");

	return <SliceZone slices={home.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
	const client = createClient();
	const home = await client.getSingle("home");
	const settings = await client.getSingle("settings");

	return {
		title:
			prismic.asText(home.data.metaTitle) ||
			prismic.asText(settings.data.site_name),
		description:
			prismic.asText(home.data.metaDescription) ||
			settings.data.fallback_meta_description,
	};
}
