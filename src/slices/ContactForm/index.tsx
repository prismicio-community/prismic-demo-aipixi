import { type Content } from "@prismicio/client";
import {
	PrismicRichText,
	PrismicText,
	type SliceComponentProps,
} from "@prismicio/react";

type ContactFormProps = SliceComponentProps<Content.ContactFormSlice>;

export default function ContactForm({ slice }: ContactFormProps) {
	return (
		<section className="mx-auto my-16 grid w-[calc(100vw-4rem)] max-w-screen-xl items-baseline gap-6 md:grid-cols-2 md:gap-10 lg:my-40 lg:gap-28">
			<div>
				<h2 className="mb-4 font-heading text-2xl font-bold leading-snug md:mb-8 md:text-4xl md:leading-snug">
					<PrismicText field={slice.primary.title} />
				</h2>
				<div className="grid gap-4 text-sm opacity-70 md:text-base md:leading-relaxed">
					<PrismicRichText field={slice.primary.description} />
				</div>
			</div>

			<form className="grid gap-6">
				{slice.primary.fields.map((item) => (
					<Field key={item.label} field={item} />
				))}
				<button
					type="submit"
					className="mt-4 inline-block justify-self-start rounded-lg bg-violet-600 px-8 py-4 font-heading font-semibold text-white transition hover:bg-violet-500"
				>
					{slice.primary.submitButtonLabel}
				</button>
			</form>
		</section>
	);
}

type FieldProps = {
	field: Content.ContactFormSliceDefaultPrimaryFieldsItem;
};

function Field({ field }: FieldProps) {
	const name = camelCase(field.label ?? "");
	const placeholder = field.placeholder ?? undefined;
	const className =
		"rounded-lg border-2 border-transparent bg-white px-6 py-4 transition-colors focus:border-violet-600 focus:outline-none dark:bg-slate-900";

	return (
		<label className="grid gap-4">
			<span className="font-heading font-semibold">{field.label}</span>
			{field.type === "Textarea" ? (
				<textarea name={name} placeholder={placeholder} className={className} />
			) : (
				<input
					name={name}
					placeholder={placeholder}
					type={field.type === "Email" ? "email" : "text"}
					className={className}
				/>
			)}
		</label>
	);
}

function camelCase(input: string) {
	return input
		.toLowerCase()
		.replace(/(?:(^.)|(\s+.))/g, (match) =>
			match.charAt(match.length - 1).toUpperCase(),
		);
}
