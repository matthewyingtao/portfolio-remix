import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import styles from "../styles/compiled.css";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Header from "./components/Header";

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "New Remix App",
	viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
	{
		rel: "preconnect",
		href: "https://fonts.googleapis.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet preload prefetch",
		href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&family=Syne:wght@800&display=swap",
		crossOrigin: "anonymous",
	},
	{ rel: "stylesheet", href: styles },
];

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body className="text-themeBlack">
				<Grid className="absolute -z-50 h-screen w-full overflow-hidden" />
				<div className="layoutGrid">
					<Header />
					<Outlet />
					<Footer />
				</div>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
