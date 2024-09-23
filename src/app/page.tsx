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

	return {
		title: prismic.asText(home.data.metaTitle) || "Aipixi",
		description:
			prismic.asText(home.data.metaDescription) ||
			"Transform your photos effortlessly with AIPixi, the AI-powered photo editing app. Enhance, retouch, and create stunning images with advanced tools and intuitive features. Perfect for photographers of all levels.",
	};
}
