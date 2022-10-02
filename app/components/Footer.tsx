import { useEffect, useState } from "react";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";

export default function Footer() {
	const { x, y } = useMousePos();
	const seconds = useSecondsSpent();

	return (
		<footer className="mx-gutter flex border-t-2 border-themeBlack text-sm">
			<div className="my-4 hidden w-48 flex-col justify-center border-r-2 border-themeBlack px-8 lg:flex">
				<p>x: {x}</p>
				<p>y: {y}</p>
				<p>
					{seconds} second{seconds === 1 ? "" : "s"}
				</p>
			</div>
			<div className="my-4 hidden w-72 flex-col justify-center border-r-2 border-themeBlack px-8 md:flex">
				<p>
					It’s the <em>little</em> things that make a website
					delightful.
				</p>
			</div>
			<div className="my-4 flex flex-col gap-[1px] px-8 md:ml-auto md:border-l-2 md:border-themeBlack">
				<div className="flex items-center gap-2">
					<IoMail size={16} />
					<p>matthew.yingtao@gmail.com</p>
				</div>
				<div className="flex items-center gap-2">
					<IoLogoGithub size={16} />
					<p>View source</p>
				</div>
				<div className="flex items-center gap-2">
					<IoLogoLinkedin size={16} />
					<p>LinkedIn</p>
				</div>
			</div>
		</footer>
	);
}

function useMousePos() {
	const [pos, setPos] = useState({ x: 0, y: 0 });

	const updateMousePos = (e: MouseEvent) => {
		setPos({ x: e.clientX, y: e.clientY });
	};

	useEffect(() => {
		window.addEventListener("mousemove", updateMousePos);
		return () => window.removeEventListener("mousemove", updateMousePos);
	}, []);

	return pos;
}

function useSecondsSpent() {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds((seconds) => seconds + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return seconds;
}
