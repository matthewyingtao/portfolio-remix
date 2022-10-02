import { useEffect, useState } from "react";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";

export default function Footer() {
	const { x, y } = useMousePos();
	const seconds = useSecondsSpent();

	return (
		<footer className="flex mx-gutter border-t-2 border-themeBlack">
			<div className="flex flex-col justify-center px-8 my-4 border-r-2 w-48 border-themeBlack">
				<p>x: {x}</p>
				<p>y: {y}</p>
				<p>
					{seconds} second{seconds === 1 ? "" : "s"}
				</p>
			</div>
			<div className="flex flex-col justify-center px-8 my-4 border-r-2 w-72 border-themeBlack">
				<p>
					It’s the <em>little</em> things that make a website delightful.
				</p>
			</div>
			<div className="flex flex-col gap-[2px] ml-auto px-8 my-4 border-l-2 border-themeBlack">
				<div className="flex items-center gap-3">
					<IoMail size={20} />
					<p>matthew.yingtao@gmail.com</p>
				</div>
				<div className="flex items-center gap-3">
					<IoLogoGithub size={20} />
					<p>View source</p>
				</div>
				<div className="flex items-center gap-3">
					<IoLogoLinkedin size={20} />
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
