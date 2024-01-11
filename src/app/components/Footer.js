const Footer = () => {
	return (
		<footer className="w-full bg-blue-900">
			<div className="container mx-auto px-8 flex justify-between items-center flex-col-reverse h-[100px] lg:flex-row">
				<span className="font-light text-sm text-white">
					Todos os direitos reservados © 2023{" "}
					<sapn className="font-semibold">Alecon</sapn> 
				</span>

				<div className="flex">
					<div className="flex items-center justify-center bg-yellow-900 text-yellow-900 h-8 w-8 rounded-md">
						F
					</div>
          <div className="flex items-center justify-center bg-yellow-900 text-yellow-900 h-8 w-8 rounded-md ml-6">
						F
					</div>
				</div>

			</div>
		</footer>
	);
};

export default Footer;
