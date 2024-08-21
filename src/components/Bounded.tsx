import { forwardRef, type ReactNode } from "react";
import clsx from "clsx";

type BoundedProps = {
	as: "section" | "header" | "footer";
	paddingY?: "none" | "sm" | "base" | "lg" | "special";
	collapsible?: boolean;
	className?: string;
	outerClassName?: string;
	children?: ReactNode;
};

export const Bounded = forwardRef<HTMLElement, BoundedProps>(
	function Bounded(props, ref) {
		const {
			as: Comp,
			paddingY = "base",
			collapsible = true,
			className,
			outerClassName,
			children,
		} = props;

		return (
			<Comp
				ref={ref}
				data-collapsible={collapsible ? true : undefined}
				className={clsx(
					"px-6 sm:px-10",
					paddingY === "sm" && "py-8 md:py-10",
					paddingY === "base" && "py-16 lg:py-40",
					paddingY === "lg" && "py-36 md:py-56 lg:py-72 xl:py-80",
					outerClassName,
				)}
			>
				<div className={clsx("mx-auto w-full max-w-[80rem]", className)}>
					{children}
				</div>
			</Comp>
		);
	},
);
