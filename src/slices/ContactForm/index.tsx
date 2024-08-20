import type { Content } from "@prismicio/client";
import {
	PrismicRichText,
	PrismicText,
	SliceComponentProps,
} from "@prismicio/react";

import { Button } from "@/components/Button";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";

type ContactFormProps = SliceComponentProps<Content.ContactFormSlice>;

const ContactForm = ({ slice }: ContactFormProps): JSX.Element => {
	return (
		<Bounded as="section" className="md:flex md:space-x-10">
			<div className="md:w-1/2 lg:pr-28">
				<Heading as="h2" size="lg">
					<PrismicText field={slice.primary.title} />
				</Heading>
				<div className="mt-4 text-sm opacity-70 md:mt-8 md:text-base">
					<PrismicRichText field={slice.primary.description} />
				</div>
			</div>

			<form className="mt-6 md:mt-0 md:w-1/2" action="/">
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
				<Button type="submit" className="mt-8">
					{slice.primary.submitButtonLabel}
				</Button>
			</form>
		</Bounded>
	);
};

export default ContactForm;

function camelCase(input: string) {
	return input.toLowerCase().replace(/(?:(^.)|(\s+.))/g, function (match) {
		return match.charAt(match.length - 1).toUpperCase();
	});
}
