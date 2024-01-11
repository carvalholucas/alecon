import Header from "./Header";

export const Section = ({ children, size, className = "" }) => {
	// const getSize = (size) => {
	// 	const sizes = {
	// 		full: "h-screen",
	// 		fluid: "h-auto",
	// 	};
	// 	return sizes[size] ?? "h-screen";
	// };

	return (
		<section className="bg-blue-900 h-screen z-0">
			<Header />
			<div className="t-container h-full">
				<div className="t-grid-4">{children}</div>
			</div>
		</section>
	);
};

export default Section;
