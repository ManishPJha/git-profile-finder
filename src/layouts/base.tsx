import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./partials/Header";
import Footer from "./partials/Footer";

const Base: React.FC = () => {
	return (
		<>
			<main className="gradient leading-relaxed tracking-wide flex flex-col">
				<Header />
				<Outlet />
				<Footer />
			</main>
		</>
	);
};

export default Base;
