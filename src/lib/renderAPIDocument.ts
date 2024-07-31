import {
	SharedSlice as SharedSliceAPI,
	PrismicDocument,
} from "@prismicio/client";
import {
	DocumentLegacy,
	SharedSliceContent,
} from "@prismicio/types-internal/lib/content";
import {
	CustomType,
	SharedSlice,
	toStatic,
} from "@prismicio/types-internal/lib/customtypes";
import { Extensions, RenderContext } from "@prismicio/api-renderer/lib/models";
import { SharedSliceRenderer } from "@prismicio/api-renderer";

import homeCustomType from "@/../customtypes/home/index.json";
import callToActionModel from "@/slices/CallToAction/model.json";
import contactFormModel from "@/slices/ContactForm/model.json";
import coverModel from "@/slices/Cover/model.json";
import featuresModel from "@/slices/Features/model.json";
import heroModel from "@/slices/Hero/model.json";
import imageModel from "@/slices/Image/model.json";
import imageGridModel from "@/slices/ImageGrid/model.json";
import pricingTableModel from "@/slices/PricingTable/model.json";

const SHARED_SLICE_MODELS = {
	call_to_action: callToActionModel as SharedSlice,
	contact_form: contactFormModel as SharedSlice,
	cover: coverModel as SharedSlice,
	features: featuresModel as SharedSlice,
	hero: heroModel as SharedSlice,
	image: imageModel as SharedSlice,
	image_grid: imageGridModel as SharedSlice,
	pricing_table: pricingTableModel as SharedSlice,
};

const HOME_STATIC_CUSTOM_TYPE = toStatic(
	homeCustomType as CustomType,
	new Map(Object.entries(SHARED_SLICE_MODELS)),
);

const RENDER_CONTEXT: RenderContext = {
	urlRewriter: {
		optimizeImageUrl(originUrl) {
			return originUrl;
		},
		rewriteImageUrl(view) {
			return view.url || "/mockURL";
		},
		rewriteFileUrl(originUrl) {
			return originUrl;
		},
		rewriteS3Bucket(url) {
			return url;
		},
		enforceCDN(url) {
			return url;
		},
	},
	emptyStringInsteadOfNull: false,
	Extension: {
		DocEncoder: {
			encodeDocId: Extensions.encodeDocId,
		},
		encoders: Extensions.IDEncoders,
	},
	LinkResolver: {
		buildUrl() {
			return "/";
		},
	},
};

function renderAPISlice(
	sliceModel: SharedSlice,
	content: SharedSliceContent,
): SharedSliceAPI {
	return {
		...(SharedSliceRenderer(RENDER_CONTEXT).renderV2(
			sliceModel,
			content,
		) as SharedSliceAPI),
		id: `${sliceModel.id}$${Math.random()}`,
		slice_type: sliceModel.id,
	};
}

export function renderAPIDocument<TPrismicDocument extends PrismicDocument>(
	documentData: unknown,
): TPrismicDocument {
	const content = DocumentLegacy.parse(documentData, HOME_STATIC_CUSTOM_TYPE);

	const slices: SharedSliceAPI[] = [];

	if (content?.slices.__TYPE__ === "SliceContentType") {
		for (const slice of content.slices.value) {
			const sharedSliceModel =
				SHARED_SLICE_MODELS[slice.name as keyof typeof SHARED_SLICE_MODELS];

			if (!sharedSliceModel || slice.widget.__TYPE__ !== "SharedSliceContent") {
				continue;
			}

			const renderedSlice = renderAPISlice(sharedSliceModel, slice.widget);

			slices.push(renderedSlice);
		}
	}

	return {
		data: {
			slices,
		},
	} as unknown as TPrismicDocument;
}
