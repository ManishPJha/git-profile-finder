import React from "react";

import HeroSection from "@/components/sections/HeroSection";

import { humanizer, upperCase } from "@/utils/helpers";

import { HeroSectionFCProps } from "@/types/component-props";
import BriefSection from "@/components/sections/BriefSection";

const HomePage: React.FC = () => {
	const heroSectionContent: HeroSectionFCProps = {
		title: humanizer("find git user profiles on single click."),
		description: upperCase("explore | connect | give star "),
	};

	return (
		<>
			<HeroSection {...heroSectionContent} />
			<BriefSection />
		</>
	);
};

export default HomePage;
