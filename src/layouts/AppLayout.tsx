import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import Footer from "../components/Footer";

interface LayoutProps {
	children: ReactNode;
}

const AppLayout = ({ children }: LayoutProps) => {
	return (
		<>
			<Navbar />
			<div className="flex">
				<SideNav />
				<main className="flex-1">{children}</main>
			</div>
			<Footer />
		</>
	);
};

export default AppLayout;
