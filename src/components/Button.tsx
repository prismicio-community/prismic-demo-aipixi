import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
	const { className, ...otherProps } = props;

	return (
		<button
			className={clsx(
				"inline-block rounded-lg border-2 border-transparent bg-primary-brand px-8 py-4 font-heading font-semibold text-white transition-colors duration-150 hover:bg-primary-brand-light focus:border-primary-brand-light focus:outline-none",
				className,
			)}
			{...otherProps}
		/>
	);
}
