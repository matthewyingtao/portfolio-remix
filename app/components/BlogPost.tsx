import { Link } from "@remix-run/react";

interface BlogPostProps {
	title: string;
	date: string;
	description: string;
	type: 1 | 2 | 3;
}

const shapes = {
	1: AccentShape1,
	2: AccentShape2,
	3: AccentShape3,
};

export default function BlogPost({
	title,
	date,
	description,
	type,
}: BlogPostProps) {
	const Shape = shapes[type];

	return (
		<Link to="/blog" className="group relative flex gap-3 pt-8 pb-2">
			<Shape className="absolute top-0 left-8 -z-50 h-full transition-transform group-hover:scale-110" />
			<time
				dateTime=""
				className="flex flex-col font-display text-5xl text-themeBlack text-opacity-60"
			>
				<span>08</span>
				<hr className="mx-3 h-[2px] border-none bg-themeBlack bg-opacity-60" />
				<span>02</span>
				<hr className="mx-3 h-[2px] border-none bg-themeBlack bg-opacity-60" />
				<span>22</span>
			</time>
			<hr className="my-5 h-auto w-[2px] border-none bg-themeBlack bg-opacity-60" />
			<div className="max-w-[60ch] py-1">
				<h3 className="mb-4 text-2xl font-bold">{title}</h3>
				<p className="text-lg font-light italic">{description}</p>
			</div>
		</Link>
	);
}

function AccentShape1({ className }: React.SVGProps<SVGElement>) {
	return (
		<svg
			id="Layer_1"
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 152.45 149.76"
			className={className}
		>
			<path
				d="M135.6,66.74l-30,68.12-74.06-7.5L15.78,54.62,80.09,17.15Z"
				fill="#e4fd90"
				fillOpacity="0.5"
			/>
			<path
				d="M81.77.61l70.08,62.62-37.89,86-93.5-9.46L.57,47.92Z"
				fill="none"
				stroke="#a3d10a"
			/>
		</svg>
	);
}

function AccentShape2({ className }: React.SVGProps<SVGElement>) {
	return (
		<svg
			id="Layer_1"
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 140.61 138.59"
			className={className}
		>
			<path
				d="M123.76,48.48,75.29,123.76,0,75.28,48.48,0Z"
				fill="#a38b5c"
				fillOpacity="0.2"
			/>
			<path
				d="M8.42,3,139.64,45l-102,92.6Z"
				fill="none"
				stroke="#a38b5c"
			/>
		</svg>
	);
}

function AccentShape3({ className }: React.SVGProps<SVGElement>) {
	return (
		<svg
			id="Layer_1"
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 157.46 153.42"
			className={className}
		>
			<path
				d="M140.61,63.31,59.4,137,36.18,29.82Z"
				fill="#e4fd90"
				fill-opacity="0.5"
			/>
			<path
				d="M103.15.55,156.9,59.78l-24.42,76.16L54.31,152.87.56,93.64,25,17.48Z"
				fill="none"
				stroke="#a3d10a"
			/>
		</svg>
	);
}
