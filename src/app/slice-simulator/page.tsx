import {
	SliceSimulator,
	SliceSimulatorParams,
	getSlices,
} from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";
import { Background } from "@/components/Background";

export default function SliceSimulatorPage({
	searchParams,
}: SliceSimulatorParams) {
	const slices = getSlices(searchParams.state);

	return (
		<SliceSimulator>
			<div className="bg-white dark:bg-slate-950">
				<Background />
				<main className="relative">
					<SliceZone slices={slices} components={components} />
				</main>
			</div>
		</SliceSimulator>
	);
}
