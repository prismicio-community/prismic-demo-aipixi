"use client";

import {
	ReactNode,
	createContext,
	useContext,
	useLayoutEffect,
	useMemo,
	useState,
} from "react";
import { createPortal } from "react-dom";
import { LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";

const NavigationContext = createContext<{
	isOpen: boolean;
	open: () => void;
	close: () => void;
	toggle: () => void;
}>({
	isOpen: false,
	open: () => {},
	close: () => {},
	toggle: () => {},
});

function useNavigation() {
	return useContext(NavigationContext);
}

type NavigationProps = {
	children?: ReactNode;
};

export function Navigation(props: NavigationProps) {
	const { children } = props;

	const [isOpen, setIsOpen] = useState(false);
	const value = useMemo(() => {
		return {
			isOpen,
			open: () => setIsOpen(true),
			close: () => setIsOpen(false),
			toggle: () => setIsOpen((curr) => !curr),
		};
	}, [isOpen]);

	return (
		<NavigationContext.Provider value={value}>
			{children}
		</NavigationContext.Provider>
	);
}

type NavigationLinkProps = {
	field: LinkField;
	className?: string;
	children?: ReactNode;
};

type NavigationDrawerProps = {
	children?: ReactNode;
};

export function NavigationDrawer(props: NavigationDrawerProps) {
	const { children } = props;

	const navigation = useNavigation();

	return (
		<Portal>
			<nav
				className={clsx(
					"fixed bottom-0 right-0 top-0 w-80 transform bg-secondary-background p-12 pt-32 shadow-2xl transition-transform ease-in-out",
					navigation.isOpen ? "translate-x-0" : "translate-x-full",
				)}
			>
				{children}
			</nav>
		</Portal>
	);
}

export function NavigationLink(props: NavigationLinkProps) {
	const { field, className, children } = props;

	const navigation = useNavigation();

	return (
		<PrismicNextLink
			field={field}
			onClick={() => navigation.close()}
			className={className}
		>
			{children}
		</PrismicNextLink>
	);
}

type NavigationTriggerProps = {
	renderOpen: ReactNode;
	renderClose: ReactNode;
};

export function NavigationTrigger(props: NavigationTriggerProps) {
	const { renderOpen, renderClose } = props;

	const navigation = useNavigation();

	return (
		<>
			<button
				onClick={() => navigation.toggle()}
				className="flex h-12 w-12 items-center justify-center"
				type="button"
				aria-label="Toggle menu"
			>
				{navigation.isOpen ? renderClose : renderOpen}
			</button>
		</>
	);
}

export function NavigationOverlay() {
	const navigation = useNavigation();

	return (
		<Portal>
			<div
				onClick={() => {
					if (navigation.isOpen) navigation.close();
				}}
				className={clsx(
					"fixed inset-0 bg-black transition-opacity",
					navigation.isOpen ? "opacity-50" : "pointer-events-none opacity-0",
				)}
			/>
		</Portal>
	);
}

type PortalProps = {
	container?: Element | null;
	children?: ReactNode;
};

function Portal(props: PortalProps) {
	const { container, children } = props;

	const [isMounted, setIsMounted] = useState(false);
	useLayoutEffect(() => setIsMounted(true), []);

	if (!isMounted) return null;

	return isMounted ? createPortal(children, container ?? document.body) : null;
}
