import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

export function PrismicNextButtonLink(props: PrismicNextLinkProps) {
	const { className, ...otherProps } = props;

	return (
		<PrismicNextLink
			className={clsx(
				"inline-block rounded-lg border-2 border-transparent bg-primary-brand px-8 py-4 font-heading font-semibold text-white transition-colors duration-150 hover:bg-primary-brand-light focus:border-primary-brand-light focus:outline-none",
				className,
			)}
			{...otherProps}
		/>
	);
}
