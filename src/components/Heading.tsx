import clsx from "clsx";
import { ReactNode, forwardRef } from "react";

type HeadingProps = {
	as: "h1" | "h2" | "h3" | "span";
	size: "xs" | "sm" | "md" | "lg" | "xl";
	className?: string;
	children?: ReactNode;
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
	function Heading(props, ref) {
		const { as: Comp, size, className, ...otherProps } = props;

		return (
			<Comp
				ref={ref}
				className={clsx(
					"font-heading font-bold",
					size === "xs" && "text-sm leading-snug md:text-2xl md:leading-snug",
					size === "sm" && "text-lg leading-snug md:text-2xl md:leading-snug",
					size === "md" && "text-2xl leading-snug lg:text-3xl lg:leading-snug",
					size === "lg" && "text-2xl leading-snug md:text-4xl md:leading-snug",
					size === "xl" && "text-4xl leading-snug lg:text-6xl lg:leading-tight",
					className,
				)}
				{...otherProps}
			/>
		);
	},
);
