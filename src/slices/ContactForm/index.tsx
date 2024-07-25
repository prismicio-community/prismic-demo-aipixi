import type { Content } from "@prismicio/client";
import {
	PrismicRichText,
	PrismicText,
	SliceComponentProps,
} from "@prismicio/react";

import { Button } from "@/components/Button";

type ContactFormProps = SliceComponentProps<Content.ContactFormSlice>;

const ContactForm = ({ slice }: ContactFormProps): JSX.Element => {
	return (
		<section className="container my-16 md:flex md:space-x-10 lg:my-40">
			<div className="md:w-1/2 lg:pr-28">
				<h2 className="font-heading text-2xl md:text-4xl">
					<PrismicText field={slice.primary.title} />
				</h2>
				<div className="mt-4 text-sm opacity-70 md:mt-8 md:text-base">
					<PrismicRichText field={slice.primary.description} />
				</div>
			</div>

			<form
				className="mt-6 md:mt-0 md:w-1/2"
				name={slice.primary.formName ?? "form"}
				action="/"
				data-netlify="true"
				netlify-honeypot="bot-field"
			>
				{slice.primary.fields.map((item) => (
					<div key={item.label} className="mt-6 first:mt-0">
						<label>
							<span className="block font-heading font-semibold">
								{item.label}
							</span>
							{item.type === "Multiline text" ? (
								<textarea
									name={camelCase(item.label ?? "")}
									placeholder={item.placeholder ?? ""}
									className="mt-4 block w-full rounded-lg border-2 border-transparent bg-secondary-background px-6 py-4 focus:border-primary-brand focus:outline-none"
								/>
							) : (
								<input
									name={camelCase(item.label ?? "")}
									placeholder={item.placeholder ?? ""}
									type={item.type === "Text input" ? "text" : "email"}
									className="mt-4 block w-full rounded-lg border-2 border-transparent bg-secondary-background px-6 py-4 transition-colors focus:border-primary-brand-light focus:outline-none"
								/>
							)}
						</label>
					</div>
				))}
				<input
					type="hidden"
					name="form-name"
					value={slice.primary.formName ?? "form"}
				/>
				<div className="hidden">
					<label htmlFor="bot-field">
						Don&apos;t fill this out if you&apos;re human
					</label>
					<input id="bot-field" name="bot-field" type="text" />
				</div>
				<Button type="submit" className="mt-8">
					{slice.primary.buttonText}
				</Button>
			</form>
		</section>
	);
};

export default ContactForm;

function camelCase(input: string) {
	return input.toLowerCase().replace(/(?:(^.)|(\s+.))/g, function (match) {
		return match.charAt(match.length - 1).toUpperCase();
	});
}
