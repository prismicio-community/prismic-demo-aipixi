"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { get as getCookie, set as setCookie } from "es-cookie";

type PrismicPreviewProps = {
	repositoryName: string;
};

export function PrismicPreview({ repositoryName }: PrismicPreviewProps) {
	const router = useRouter();

	useEffect(() => {
		const timer = setInterval(async () => {
			try {
				const sessionID = getCookie("io.prismic.previewSession");
				const ref = getCookie("io.prismic.preview");
				if (!sessionID || !ref) throw new Error("Not in a valid session.");

				const state = await getPreviewPing(repositoryName, sessionID, ref);
				if (!state.reload) return;

				setCookie("io.prismic.preview", state.ref);
				router.refresh();
			} catch {
				clearInterval(timer);
			}
		}, 3000);

		return () => clearInterval(timer);
	}, [repositoryName, router]);

	return null;
}

async function getPreviewPing(
	repositoryName: string,
	previewSessionID: string,
	previewRef: string,
) {
	const url = new URL(
		`https://${repositoryName}.prismic.io/previews/${previewSessionID}/ping`,
	);
	url.searchParams.set("ref", previewRef);

	const res = await fetch(url);
	const json = await res.json();

	if (!isPreviewPingResponse(json)) throw new Error("Invalid response.");

	return json;
}

type PreviewPingResponse = {
	reload: boolean;
	ref: string;
};

function isPreviewPingResponse(input: unknown): input is PreviewPingResponse {
	return (
		typeof input === "object" &&
		input !== null &&
		"reload" in input &&
		"ref" in input
	);
}
