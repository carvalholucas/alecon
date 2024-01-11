export const SectionHero = ({ children }) => {
	return (
		<section className="bg-blue-900 h-screen pt-[calc(100px+2rem)] relative">
			<div className="container mx-auto px-8 h-full">{children}</div>
		</section>
	);
};

export const Section = ({ children }) => {
	return (
		<section className="bg-white">
			<div className="container mx-auto px-8">{children}</div>
		</section>
	);
};
