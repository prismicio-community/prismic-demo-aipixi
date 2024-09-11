import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
	const client = createClient();
	const page = await client.getByUID("page", params.uid);

	return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata({
	params,
}: {
	params: Params;
}): Promise<Metadata> {
	const client = createClient();
	const page = await client.getByUID("page", params.uid);

	return {
		title: prismic.asText(page.data.metaTitle),
		description: prismic.asText(page.data.metaDescription),
	};
}

export async function generateStaticParams() {
	const client = createClient();
	const pages = await client.getAllByType("page");

	return pages.map((page) => ({ uid: page.uid }));
}
