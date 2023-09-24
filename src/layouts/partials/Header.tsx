import React from "react";
import { NavLink } from "react-router-dom";

import config from "@/config/default";
import { humanizer } from "@/utils/helpers";

type NavItem = {
	title: string;
	actionUrl: string;
	isActive: boolean;
};

const items: NavItem[] = [
	{
		title: "home",
		actionUrl: "/",
		isActive: false,
	},
	{
		title: "about",
		actionUrl: "/about-us",
		isActive: false,
	},
	{
		title: "contact us",
		actionUrl: "/contact-us",
		isActive: false,
	},
];

const NavItems = () => (
	<>
		{items.map((item, i) => {
			return (
				<NavLink
					to={item.actionUrl}
					key={i}
					className={
						"inline-block py-2 px-4 text-black no-underline  hover:text-yellow-300"
					}
				>
					{humanizer(item.title)}
				</NavLink>
			);
		})}
	</>
);

const Header: React.FC = React.memo(() => {
	return (
		<nav id="header" className="w-full z-30 top-0 text-white py-1 lg:py-6">
			<div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6">
				<div className="pl-4 flex items-center">
					<a
						className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
						href="#"
					>
						<svg
							className="h-6 w-6 inline-block fill-current text-yellow-700"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z" />
						</svg>
						{config.APP_NAME}
					</a>
				</div>
				<div className="block lg:hidden pr-4">
					<button
						id="nav-toggle"
						className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-green-500 appearance-none focus:outline-none"
					>
						<svg
							className="fill-current h-3 w-3"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
						</svg>
					</button>
				</div>
				<div
					className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20"
					id="nav-content"
				>
					<ul className="list-reset lg:flex justify-end flex-1 items-center">
						<NavItems />
					</ul>
					<button
						id="cta-signin"
						className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded mt-4 lg:mt-0 py-4 px-8 shadow opacity-75"
					>
						Sign in
					</button>
				</div>
			</div>
		</nav>
	);
});

export default Header;
