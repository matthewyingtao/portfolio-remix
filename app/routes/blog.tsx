import BlogPost from "~/components/BlogPost";

export default function Index() {
	return (
		<div className="relative">
			<main className="mx-gutter">
				<div className="relative mb-20 w-fit py-20">
					<TrianglesBackground className="absolute inset-0 -z-40 h-full" />
					<span className="mb-3 block text-lg font-light italic md:text-xl lg:text-2xl xl:text-3xl">
						My tutorials and opinions on technology.
					</span>
					<h1 className="heading mb-12">Blog</h1>
				</div>

				<div className="mb-32 flex flex-col gap-12">
					<BlogPost
						title="Learn currying by looking at Rambda's source code"
						date=""
						type={1}
						description="Let's walk through Rambda's curry function to gain a
								deeper understanding of how to implement currying in
								JavaScript."
					/>
					<BlogPost
						title="Learn currying by looking at Rambda's source code"
						date=""
						type={2}
						description="Let's walk through Rambda's curry function to gain a
								deeper understanding of how to implement currying in
								JavaScript."
					/>
					<BlogPost
						title="Learn currying by looking at Rambda's source code"
						date=""
						type={3}
						description="Let's walk through Rambda's curry function to gain a
								deeper understanding of how to implement currying in
								JavaScript."
					/>
				</div>
			</main>
		</div>
	);
}

function TrianglesBackground({ className }: React.SVGProps<SVGElement>) {
	return (
		<svg
			id="Layer_1"
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 370.93 332.3"
			className={className}
		>
			<path
				d="M228.38,54.3,231.9,276,38.17,168.18Z"
				fill="#e4fd90"
				fillOpacity="0.5"
			/>
			<path
				d="M.62,74.05,258.25.62l73.43,257.63L74.06,331.68Z"
				fill="none"
				stroke="#a3d10a"
			/>
			<path
				d="M370.93,64.18,237.26,241.06,150.92,36.86Z"
				fill="#a38b5c"
				fillOpacity="0.2"
			/>
		</svg>
	);
}
