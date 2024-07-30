import {
	SliceSimulator,
	SliceSimulatorParams,
	getSlices,
} from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";
import { redirect } from "next/navigation";

import { components } from "@/slices";
import { Background } from "@/components/Background";

export default function SliceSimulatorPage({
	searchParams,
}: SliceSimulatorParams & { searchParams: { secret?: string } }) {
	if (
		process.env.SLICE_SIMULATOR_SECRET &&
		searchParams.secret !== process.env.SLICE_SIMULATOR_SECRET
	) {
		redirect("/");
	}

	const slices = getSlices(searchParams.state);

	return (
		<SliceSimulator>
			<Background />
			<main className="relative">
				<SliceZone slices={slices} components={components} />
			</main>
		</SliceSimulator>
	);
}
