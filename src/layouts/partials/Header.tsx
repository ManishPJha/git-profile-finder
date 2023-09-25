import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import config from "@/config/default";
import { humanizer } from "@/utils/helpers";

import useActions from "@/hooks/useActions";
import { useReduxState } from "@/hooks/useReduxActions";

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
		{items &&
			items.map((item, i) => {
				return (
					<NavLink
						to={item.actionUrl}
						key={i}
						className={({ isActive }) =>
							isActive
								? "inline-block py-2 px-4 text-lg text-yellow-300 no-underline  hover:text-white"
								: "inline-block py-2 px-4 text-lg text-black no-underline  hover:text-white"
						}
					>
						{humanizer(item.title)}
					</NavLink>
				);
			})}
	</>
);

const Header: React.FC = React.memo(() => {
	const [showDropDown, setShowDropDown] = useState(false);

	const { signinAction } = useActions();

	const isAuthenticatedUser = useReduxState(
		(state) => state.user.isAuthenticated
	);

	const avatarRef = React.useRef<HTMLImageElement>(null);

	useEffect(() => {
		if (avatarRef.current !== null) {
			avatarRef.current.onclick = () => {
				return setShowDropDown(!showDropDown);
			};
		}
	}, [avatarRef.current, showDropDown]);

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
					{!isAuthenticatedUser ? (
						<button
							id="cta-signin"
							className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded mt-4 lg:mt-0 py-4 px-8 shadow opacity-75"
							onClick={signinAction}
						>
							Sign in
						</button>
					) : (
						<div className="relative">
							<AvatarImageRef ref={avatarRef} />
							{showDropDown && (
								<div
									className={
										"absolute right-0 w-40 mt-2 py-2 bg-white border rounded shadow-xl"
									}
								>
									<a
										href="#"
										className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white"
									>
										Settings
									</a>
									<div className="py-2">
										<hr />
									</div>
									<a
										href="#"
										className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white"
									>
										Logout
									</a>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
		</nav>
	);
});

export default Header;

export const AvatarImageRef = React.forwardRef<HTMLImageElement>(
	(props, ref) => (
		<img
			ref={ref}
			alt="avatar"
			src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
			className="relative inline-block h-10 w-10 rounded-full border-2 border-white object-cover object-center hover:z-10 hover:border-yellow-300 hover:cursor-pointer focus:z-10"
			{...props}
		/>
	)
);
