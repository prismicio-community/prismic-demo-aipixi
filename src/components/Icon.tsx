import { SVGProps } from "react";

import icons from "../assets/icons.svg";

type IconProps = SVGProps<SVGSVGElement> & {
	name:
		| "badgeCheck"
		| "facebook"
		| "halfStar"
		| "instagram"
		| "menu"
		| "moon"
		| "star"
		| "sun"
		| "twitter"
		| "x";
};

export function Icon(props: IconProps) {
	const { name, ...otherProps } = props;

	return (
		<svg xmlns="http://www.w3.org/2000/svg" {...otherProps}>
			<use href={`${icons.src}#${name}`} />
		</svg>
	);
}
