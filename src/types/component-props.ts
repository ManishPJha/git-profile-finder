export type HeroSectionFCProps = {
	title: string;
	description?: string;
};

export type CtaBtnFCProps = {
	btnText: string;
	btnActionURL: string;
	visible?: boolean;
	className?: React.HTMLAttributes<unknown>["className"];
};
