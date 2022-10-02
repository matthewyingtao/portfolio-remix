import { NavLink } from "@remix-run/react";
import { AnimatePresence, motion } from "framer-motion";

function CustomNavLink({ to, title }: { to: string; title: string }) {
	return (
		<NavLink className="relative" to={to} prefetch="intent">
			{({ isActive }) => {
				return (
					<>
						{isActive && (
							<div className="-translate-x-2">
								<motion.div
									layout
									layoutId="navCircle"
									className="absolute h-10 w-10 rounded-full bg-themeBrown bg-opacity-20"
								/>
							</div>
						)}
						<span>{title}</span>
					</>
				);
			}}
		</NavLink>
	);
}

export default function Header() {
	return (
		<header>
			<nav>
				<ul>
					<li className="flex gap-8 px-gutter py-8 font-sans text-lg">
						<AnimatePresence>
							<CustomNavLink title="Home" to="/" />
							<CustomNavLink title="Blog" to="/blog" />
							<CustomNavLink title="Projects" to="/projects" />
							<CustomNavLink title="About" to="/about" />
						</AnimatePresence>
					</li>
				</ul>
			</nav>
		</header>
	);
}
