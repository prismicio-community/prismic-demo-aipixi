import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export async function generateMetadata(): Promise<Metadata> {
	const client = createClient();
	const home = await client.getSingle("home");

	return {
		title: prismic.asText(home.data.metaTitle),
		description: prismic.asText(home.data.metaDescription),
	};
}

export default async function Index() {
	const client = createClient();
	const home = await client.getSingle("home");

	return <SliceZone slices={home.data.slices} components={components} />;
}
