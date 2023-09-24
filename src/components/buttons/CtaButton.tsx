import React from "react";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { CtaBtnFCProps } from "@/types/component-props";

const CtaButton: React.FC<CtaBtnFCProps> = ({
	btnText,
	btnActionURL,
	visible = true,
	...rest
}) => {
	const { className } = rest;

	const navigate = useNavigate();

	return (
		visible && (
			<button
				className={twMerge(
					"mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48",
					className
				)}
				onClick={() =>
					navigate(btnActionURL, { state: window.location.href })
				}
			>
				{btnText}
			</button>
		)
	);
};

export default CtaButton;
