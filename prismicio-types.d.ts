// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomeDocumentDataSlicesSlice =
	| CallToActionSlice
	| ImageSlice
	| HeroSlice
	| FeaturesSlice
	| ImageGridSlice
	| ContactFormSlice
	| PricingTableSlice
	| CoverSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
	/**
	 * Slice Zone field in *Home*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: home.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
	 * Meta Title field in *Home*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: home.metaTitle
	 * - **Tab**: SEO
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */;
	metaTitle: prismic.TitleField;

	/**
	 * Meta Description field in *Home*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: home.metaDescription
	 * - **Tab**: SEO
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	metaDescription: prismic.RichTextField;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
	prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

type PageDocumentDataSlicesSlice =
	| CallToActionSlice
	| ImageSlice
	| HeroSlice
	| ContactFormSlice
	| FeaturesSlice
	| CoverSlice
	| PricingTableSlice
	| ImageGridSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
	/**
	 * Slice Zone field in *Page*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
	 * Meta Title field in *Page*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.metaTitle
	 * - **Tab**: SEO
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */;
	metaTitle: prismic.TitleField;

	/**
	 * Meta Description field in *Page*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.metaDescription
	 * - **Tab**: SEO
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	metaDescription: prismic.RichTextField;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
	prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *Settings → Menu*
 */
export interface SettingsDocumentDataMenuItem {
	/**
	 * Link field in *Settings → Menu*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.menu[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;

	/**
	 * Label field in *Settings → Menu*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.menu[].label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	label: prismic.KeyTextField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
	/**
	 * Site Name field in *Settings*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.site_name
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	site_name: prismic.TitleField;

	/**
	 * Fallback Meta Description field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.fallback_meta_description
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	fallback_meta_description: prismic.KeyTextField;

	/**
	 * Menu field in *Settings*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.menu[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	menu: prismic.GroupField<Simplify<SettingsDocumentDataMenuItem>>;

	/**
	 * Contact field in *Settings*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.contact
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	contact: prismic.RichTextField;

	/**
	 * Facebook field in *Settings*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.facebook
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	facebook: prismic.LinkField;

	/**
	 * Twitter field in *Settings*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.twitter
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	twitter: prismic.LinkField;

	/**
	 * Instagram field in *Settings*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.instagram
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	instagram: prismic.LinkField;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
	prismic.PrismicDocumentWithoutUID<
		Simplify<SettingsDocumentData>,
		"settings",
		Lang
	>;

export type AllDocumentTypes = HomeDocument | PageDocument | SettingsDocument;

/**
 * Primary content in *Call to Action → Default → Primary*
 */
export interface CallToActionSliceDefaultPrimary {
	/**
	 * Image field in *Call to Action → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: call_to_action.default.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Title field in *Call to Action → Default → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: This is where it all begins...
	 * - **API ID Path**: call_to_action.default.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Link field in *Call to Action → Default → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: call_to_action.default.primary.link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;

	/**
	 * Label field in *Call to Action → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: call_to_action.default.primary.label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	label: prismic.KeyTextField;
}

/**
 * Default variation for Call to Action Slice
 *
 * - **API ID**: `default`
 * - **Description**: Cta
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSliceDefault = prismic.SharedSliceVariation<
	"default",
	Simplify<CallToActionSliceDefaultPrimary>,
	never
>;

/**
 * Primary content in *Call to Action → Text on Left → Primary*
 */
export interface CallToActionSliceLeftPrimary {
	/**
	 * Image field in *Call to Action → Text on Left → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: call_to_action.left.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Title field in *Call to Action → Text on Left → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: This is where it all begins...
	 * - **API ID Path**: call_to_action.left.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Link field in *Call to Action → Text on Left → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: call_to_action.left.primary.link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;

	/**
	 * Label field in *Call to Action → Text on Left → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: call_to_action.left.primary.label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	label: prismic.KeyTextField;
}

/**
 * Text on Left variation for Call to Action Slice
 *
 * - **API ID**: `left`
 * - **Description**: Cta
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSliceLeft = prismic.SharedSliceVariation<
	"left",
	Simplify<CallToActionSliceLeftPrimary>,
	never
>;

/**
 * Slice variation for *Call to Action*
 */
type CallToActionSliceVariation =
	| CallToActionSliceDefault
	| CallToActionSliceLeft;

/**
 * Call to Action Shared Slice
 *
 * - **API ID**: `call_to_action`
 * - **Description**: Call to Action
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSlice = prismic.SharedSlice<
	"call_to_action",
	CallToActionSliceVariation
>;

/**
 * Item in *ContactForm → Default → Primary → Fields*
 */
export interface ContactFormSliceDefaultPrimaryFieldsItem {
	/**
	 * Field Label field in *ContactForm → Default → Primary → Fields*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact_form.default.primary.fields[].label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	label: prismic.KeyTextField;

	/**
	 * Field Placeholder field in *ContactForm → Default → Primary → Fields*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact_form.default.primary.fields[].placeholder
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	placeholder: prismic.KeyTextField;

	/**
	 * Field Type field in *ContactForm → Default → Primary → Fields*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **Default Value**: Text
	 * - **API ID Path**: contact_form.default.primary.fields[].type
	 * - **Documentation**: https://prismic.io/docs/field#select
	 */
	type: prismic.SelectField<"Text" | "Email" | "Textarea", "filled">;
}

/**
 * Primary content in *ContactForm → Default → Primary*
 */
export interface ContactFormSliceDefaultPrimary {
	/**
	 * Title field in *ContactForm → Default → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: The title of the section
	 * - **API ID Path**: contact_form.default.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Description field in *ContactForm → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: A nice description of your product
	 * - **API ID Path**: contact_form.default.primary.description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;

	/**
	 * Fields field in *ContactForm → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact_form.default.primary.fields[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	fields: prismic.GroupField<
		Simplify<ContactFormSliceDefaultPrimaryFieldsItem>
	>;

	/**
	 * Submit Button Label field in *ContactForm → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact_form.default.primary.submitButtonLabel
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	submitButtonLabel: prismic.KeyTextField;
}

/**
 * Default variation for ContactForm Slice
 *
 * - **API ID**: `default`
 * - **Description**: ContactForm
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactFormSliceDefault = prismic.SharedSliceVariation<
	"default",
	Simplify<ContactFormSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *ContactForm*
 */
type ContactFormSliceVariation = ContactFormSliceDefault;

/**
 * ContactForm Shared Slice
 *
 * - **API ID**: `contact_form`
 * - **Description**: ContactForm
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactFormSlice = prismic.SharedSlice<
	"contact_form",
	ContactFormSliceVariation
>;

/**
 * Primary content in *Cover → Default → Primary*
 */
export interface CoverSliceDefaultPrimary {
	/**
	 * Title field in *Cover → Default → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: This is where it all begins...
	 * - **API ID Path**: cover.default.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Original Image field in *Cover → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: cover.default.primary.originalImage
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	originalImage: prismic.ImageField<never>;

	/**
	 * Filtered Image field in *Cover → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: cover.default.primary.filteredImage
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	filteredImage: prismic.ImageField<never>;
}

/**
 * Default variation for Cover Slice
 *
 * - **API ID**: `default`
 * - **Description**: Cover
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CoverSliceDefault = prismic.SharedSliceVariation<
	"default",
	Simplify<CoverSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Cover*
 */
type CoverSliceVariation = CoverSliceDefault;

/**
 * Cover Shared Slice
 *
 * - **API ID**: `cover`
 * - **Description**: Cover
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CoverSlice = prismic.SharedSlice<"cover", CoverSliceVariation>;

/**
 * Item in *Features → Default → Primary → Features*
 */
export interface FeaturesSliceDefaultPrimaryFeaturesItem {
	/**
	 * Icon field in *Features → Default → Primary → Features*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: features.default.primary.features[].icon
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	icon: prismic.ImageField<never>;

	/**
	 * Title field in *Features → Default → Primary → Features*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: features.default.primary.features[].title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Text field in *Features → Default → Primary → Features*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: features.default.primary.features[].text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField;
}

/**
 * Primary content in *Features → Default → Primary*
 */
export interface FeaturesSliceDefaultPrimary {
	/**
	 * Title field in *Features → Default → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: The title of the section
	 * - **API ID Path**: features.default.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Features field in *Features → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: features.default.primary.features[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	features: prismic.GroupField<
		Simplify<FeaturesSliceDefaultPrimaryFeaturesItem>
	>;
}

/**
 * Default variation for Features Slice
 *
 * - **API ID**: `default`
 * - **Description**: Features
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturesSliceDefault = prismic.SharedSliceVariation<
	"default",
	Simplify<FeaturesSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Features*
 */
type FeaturesSliceVariation = FeaturesSliceDefault;

/**
 * Features Shared Slice
 *
 * - **API ID**: `features`
 * - **Description**: Features
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturesSlice = prismic.SharedSlice<
	"features",
	FeaturesSliceVariation
>;

/**
 * Item in *Hero → Default → Primary → Links*
 */
export interface HeroSliceDefaultPrimaryLinksItem {
	/**
	 * Link field in *Hero → Default → Primary → Links*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.links[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;

	/**
	 * Label field in *Hero → Default → Primary → Links*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.links[].label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	label: prismic.KeyTextField;
}

/**
 * Item in *Hero → Text on Left → Primary → Links*
 */
export interface HeroSliceLeftPrimaryLinksItem {
	/**
	 * Link field in *Hero → Text on Left → Primary → Links*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.left.primary.links[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;

	/**
	 * Label field in *Hero → Text on Left → Primary → Links*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.left.primary.links[].label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	label: prismic.KeyTextField;
}

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
	/**
	 * Image field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Title field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: This is where it all begins...
	 * - **API ID Path**: hero.default.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Links field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.links[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	links: prismic.GroupField<Simplify<HeroSliceDefaultPrimaryLinksItem>>;

	/**
	 * Social Proof Quote field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.social_proof_quote
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	social_proof_quote: prismic.KeyTextField;

	/**
	 * Social Proof Rating field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Number
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.social_proof_rating
	 * - **Documentation**: https://prismic.io/docs/field#number
	 */
	social_proof_rating: prismic.NumberField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
	"default",
	Simplify<HeroSliceDefaultPrimary>,
	never
>;

/**
 * Primary content in *Hero → Text on Left → Primary*
 */
export interface HeroSliceLeftPrimary {
	/**
	 * Image field in *Hero → Text on Left → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.left.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Title field in *Hero → Text on Left → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: This is where it all begins...
	 * - **API ID Path**: hero.left.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Links field in *Hero → Text on Left → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.left.primary.links[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	links: prismic.GroupField<Simplify<HeroSliceLeftPrimaryLinksItem>>;

	/**
	 * Social Proof Quote field in *Hero → Text on Left → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.left.primary.social_proof_quote
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	social_proof_quote: prismic.KeyTextField;

	/**
	 * Social Proof Rating field in *Hero → Text on Left → Primary*
	 *
	 * - **Field Type**: Number
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.left.primary.social_proof_rating
	 * - **Documentation**: https://prismic.io/docs/field#number
	 */
	social_proof_rating: prismic.NumberField;
}

/**
 * Text on Left variation for Hero Slice
 *
 * - **API ID**: `left`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceLeft = prismic.SharedSliceVariation<
	"left",
	Simplify<HeroSliceLeftPrimary>,
	never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceLeft;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *Image → Default → Primary*
 */
export interface ImageSliceDefaultPrimary {
	/**
	 * Title field in *Image → Default → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: This is where it all begins...
	 * - **API ID Path**: image.default.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Content field in *Image → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: A nice description of your product
	 * - **API ID Path**: image.default.primary.content
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	content: prismic.RichTextField;

	/**
	 * Image field in *Image → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image.default.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * CTA link field in *Image → Default → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image.default.primary.ctaLink
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	ctaLink: prismic.LinkField;

	/**
	 * CTA label field in *Image → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image.default.primary.ctaLabel
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	ctaLabel: prismic.KeyTextField;
}

/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: ImageCopy
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceDefault = prismic.SharedSliceVariation<
	"default",
	Simplify<ImageSliceDefaultPrimary>,
	never
>;

/**
 * Primary content in *Image → Text on Left → Primary*
 */
export interface ImageSliceLeftPrimary {
	/**
	 * Title field in *Image → Text on Left → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: This is where it all begins...
	 * - **API ID Path**: image.left.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Content field in *Image → Text on Left → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: A nice description of your product
	 * - **API ID Path**: image.left.primary.content
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	content: prismic.RichTextField;

	/**
	 * Image field in *Image → Text on Left → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image.left.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * CTA link field in *Image → Text on Left → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image.left.primary.ctaLink
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	ctaLink: prismic.LinkField;

	/**
	 * CTA label field in *Image → Text on Left → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image.left.primary.ctaLabel
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	ctaLabel: prismic.KeyTextField;
}

/**
 * Text on Left variation for Image Slice
 *
 * - **API ID**: `left`
 * - **Description**: ImageCopy
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceLeft = prismic.SharedSliceVariation<
	"left",
	Simplify<ImageSliceLeftPrimary>,
	never
>;

/**
 * Slice variation for *Image*
 */
type ImageSliceVariation = ImageSliceDefault | ImageSliceLeft;

/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSlice = prismic.SharedSlice<"image", ImageSliceVariation>;

/**
 * Item in *ImageGrid → Default → Primary → Images*
 */
export interface ImageGridSliceDefaultPrimaryImagesItem {
	/**
	 * Image field in *ImageGrid → Default → Primary → Images*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_grid.default.primary.images[].image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Label field in *ImageGrid → Default → Primary → Images*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_grid.default.primary.images[].label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	label: prismic.KeyTextField;
}

/**
 * Primary content in *ImageGrid → Default → Primary*
 */
export interface ImageGridSliceDefaultPrimary {
	/**
	 * Title field in *ImageGrid → Default → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: This is where it all begins...
	 * - **API ID Path**: image_grid.default.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Images field in *ImageGrid → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_grid.default.primary.images[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	images: prismic.GroupField<Simplify<ImageGridSliceDefaultPrimaryImagesItem>>;
}

/**
 * Default variation for ImageGrid Slice
 *
 * - **API ID**: `default`
 * - **Description**: ImageGrid
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageGridSliceDefault = prismic.SharedSliceVariation<
	"default",
	Simplify<ImageGridSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *ImageGrid*
 */
type ImageGridSliceVariation = ImageGridSliceDefault;

/**
 * ImageGrid Shared Slice
 *
 * - **API ID**: `image_grid`
 * - **Description**: ImageGrid
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageGridSlice = prismic.SharedSlice<
	"image_grid",
	ImageGridSliceVariation
>;

/**
 * Item in *PricingTable → Default → Primary → Pricing Tiers*
 */
export interface PricingTableSliceDefaultPrimaryPricingTiersItem {
	/**
	 * Name field in *PricingTable → Default → Primary → Pricing Tiers*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: pricing_table.default.primary.pricing_tiers[].name
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	name: prismic.TitleField;

	/**
	 * Tagline field in *PricingTable → Default → Primary → Pricing Tiers*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: pricing_table.default.primary.pricing_tiers[].tagline
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	tagline: prismic.KeyTextField;

	/**
	 * Monthly field in *PricingTable → Default → Primary → Pricing Tiers*
	 *
	 * - **Field Type**: Number
	 * - **Placeholder**: *None*
	 * - **API ID Path**: pricing_table.default.primary.pricing_tiers[].monthly
	 * - **Documentation**: https://prismic.io/docs/field#number
	 */
	monthly: prismic.NumberField;

	/**
	 * Yearly field in *PricingTable → Default → Primary → Pricing Tiers*
	 *
	 * - **Field Type**: Number
	 * - **Placeholder**: *None*
	 * - **API ID Path**: pricing_table.default.primary.pricing_tiers[].yearly
	 * - **Documentation**: https://prismic.io/docs/field#number
	 */
	yearly: prismic.NumberField;

	/**
	 * Features field in *PricingTable → Default → Primary → Pricing Tiers*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: pricing_table.default.primary.pricing_tiers[].features
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	features: prismic.RichTextField;
}

/**
 * Primary content in *PricingTable → Default → Primary*
 */
export interface PricingTableSliceDefaultPrimary {
	/**
	 * Title field in *PricingTable → Default → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: This is where it all begins...
	 * - **API ID Path**: pricing_table.default.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Pricing Tiers field in *PricingTable → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: pricing_table.default.primary.pricing_tiers[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	pricing_tiers: prismic.GroupField<
		Simplify<PricingTableSliceDefaultPrimaryPricingTiersItem>
	>;
}

/**
 * Default variation for PricingTable Slice
 *
 * - **API ID**: `default`
 * - **Description**: PricingTable
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PricingTableSliceDefault = prismic.SharedSliceVariation<
	"default",
	Simplify<PricingTableSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *PricingTable*
 */
type PricingTableSliceVariation = PricingTableSliceDefault;

/**
 * PricingTable Shared Slice
 *
 * - **API ID**: `pricing_table`
 * - **Description**: PricingTable
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PricingTableSlice = prismic.SharedSlice<
	"pricing_table",
	PricingTableSliceVariation
>;

declare module "@prismicio/client" {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig,
		): prismic.Client<AllDocumentTypes>;
	}

	namespace Content {
		export type {
			HomeDocument,
			HomeDocumentData,
			HomeDocumentDataSlicesSlice,
			PageDocument,
			PageDocumentData,
			PageDocumentDataSlicesSlice,
			SettingsDocument,
			SettingsDocumentData,
			SettingsDocumentDataMenuItem,
			AllDocumentTypes,
			CallToActionSlice,
			CallToActionSliceDefaultPrimary,
			CallToActionSliceLeftPrimary,
			CallToActionSliceVariation,
			CallToActionSliceDefault,
			CallToActionSliceLeft,
			ContactFormSlice,
			ContactFormSliceDefaultPrimaryFieldsItem,
			ContactFormSliceDefaultPrimary,
			ContactFormSliceVariation,
			ContactFormSliceDefault,
			CoverSlice,
			CoverSliceDefaultPrimary,
			CoverSliceVariation,
			CoverSliceDefault,
			FeaturesSlice,
			FeaturesSliceDefaultPrimaryFeaturesItem,
			FeaturesSliceDefaultPrimary,
			FeaturesSliceVariation,
			FeaturesSliceDefault,
			HeroSlice,
			HeroSliceDefaultPrimaryLinksItem,
			HeroSliceDefaultPrimary,
			HeroSliceLeftPrimaryLinksItem,
			HeroSliceLeftPrimary,
			HeroSliceVariation,
			HeroSliceDefault,
			HeroSliceLeft,
			ImageSlice,
			ImageSliceDefaultPrimary,
			ImageSliceLeftPrimary,
			ImageSliceVariation,
			ImageSliceDefault,
			ImageSliceLeft,
			ImageGridSlice,
			ImageGridSliceDefaultPrimaryImagesItem,
			ImageGridSliceDefaultPrimary,
			ImageGridSliceVariation,
			ImageGridSliceDefault,
			PricingTableSlice,
			PricingTableSliceDefaultPrimaryPricingTiersItem,
			PricingTableSliceDefaultPrimary,
			PricingTableSliceVariation,
			PricingTableSliceDefault,
		};
	}
}
