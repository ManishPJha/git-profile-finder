import React from "react";
import { RouteObject } from "react-router-dom";

import {
	NotFoundPage,
	CallbackPage,
	HomePage,
	AboutUsPage,
	ContactUsPage,
} from "@/pages/";

import FullScreenLoader from "@/components/FullScreenLoader";
import Base from "@/layouts/base";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Loadable = any;

export const loadable =
	(Component: Loadable) => (props: JSX.IntrinsicAttributes) => (
		<React.Suspense fallback={<FullScreenLoader />}>
			<Component {...props} />
		</React.Suspense>
	);

export const pageRoutes: RouteObject = {
	path: "",
	element: <Base />,
	children: [
		{
			path: "/",
			element: <HomePage />,
		},
		{
			path: "about-us",
			element: <AboutUsPage />,
		},
		{
			path: "contact-us",
			element: <ContactUsPage />,
		},
	],
};

export const routes: RouteObject[] = [
	pageRoutes,
	{
		path: "callback",
		element: <CallbackPage />,
	},
	{
		path: "*",
		element: <NotFoundPage />,
	},
];
