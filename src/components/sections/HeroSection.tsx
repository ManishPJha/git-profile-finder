import React from "react";

import CtaButton from "../buttons/CtaButton";

import { HeroSectionFCProps } from "@/types/component-props";

const HeroSection: React.FC<HeroSectionFCProps> = ({ title, description }) => {
	return (
		<div className="container mx-auto h-screen">
			<div className="text-center px-3 lg:px-0">
				<h1 className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
					{title}
				</h1>
				<p className="leading-normal text-base md:text-xl lg:text-2xl mb-8">
					{description}
				</p>

				<div className="w-1/2 items-center mx-auto content-end">
					<div className="bg-gray-800 text-white p-8 rounded-lg shadow-xl">
						<h1 className="text-3xl font-bold mb-4">
							GitHub Profile Finder
						</h1>
						<p className="text-gray-300 mb-4">
							Find GitHub profiles with ease.
						</p>
						<div className="flex items-center bg-gray-700 rounded-lg p-4">
							<input
								type="text"
								placeholder="Enter a GitHub username"
								className="flex-1 bg-transparent text-white focus:outline-none"
							/>
							<button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
								Search
							</button>
						</div>
					</div>
				</div>

				<CtaButton
					btnText="Your Profile"
					btnActionURL="/sign-up"
					className="text-white w-80"
				/>
				<a
					href="#"
					className="inline-block mx-auto lg:mx-0 hover:underline bg-transparent text-gray-600 font-extrabold my-2 md:my-6 py-2 lg:py-4 px-8"
				>
					Explore Others
				</a>
			</div>
			{/* <div className="flex items-center w-full mx-auto content-end">
				<div className="browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-white w-1/2 rounded shadow-xl" />
			</div> */}
		</div>
	);
};

export default HeroSection;
