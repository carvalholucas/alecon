import Button from "components/Button";
import { SectionHero, Section } from "components/Section";

const projects = [1, 2, 3, 4, 5, 6];

const Home = () => {
	return (
		<>
			<SectionHero>
				<div className="t-grid-4">
					<div className="col-start-1 col-span-2 flex flex-col items-start justify-center">
						<h1 className="text-white text-5xl font-bold leading-snug mb-10">
							Projetamos para atrair, converter e encantar nossos clientes.
						</h1>
						<p className="text-white text-xl font-extralight leading-relaxed mb-20">
							Ouvimos atenciosamente nossos clientes e adequamos todas as nossas
							soluções aos seus objetivos.
						</p>
						<Button icon="right">Solicitar um orçamento</Button>
					</div>
				</div>
			</SectionHero>

			<Section>
				<div className="t-grid-6">
					<div className="flex justify-between items-end col-start-1 col-end-7 h-fit mb-16">
						<div>
							<h2 className="text-3xl font-semibold mb-6">Obras concluídas</h2>
							<p className="text-lg text-gray-500 font-light w-3/4">
								Prezamos pela qualidade de nossos serviços, veja algumas de
								nossas obras concluídas
							</p>
						</div>
						<Button icon="right">Ver todos os projetos</Button>
					</div>

					{projects.map((item) => (
						<div key={item} className="col-span-2 mb-8">
							<div className="bg-blue-900 h-96 mb-6"></div>
							<span className="text-gray-500">Casa</span>
							<p className="text-lg font-semibold mt-2">
								Residência Jd. Residencial Sábias
							</p>
							<span className="text-gray-500 text-sm font-light uppercase tracking-wide">
								Indaiatuba/SP
							</span>
						</div>
					))}
				</div>
			</Section>

			<Section>
				<div className="t-grid-4 pt-16">
					<div className="col-span-2 py-16 pr-16">
						<h2 className="text-3xl/relaxed font-semibold mb-6">
							From its medieval origins to the digital era, learn ubiquitous
							lorem.
						</h2>
						<p className="text-lg/relaxed text-gray-500 font-light mb-12">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua,
							porttitor massa id neque aliquam morbi. Tellus pellentesque eu
							tincidunt tortor aliquam
						</p>

						<p className="text-lg text-black font-medium mb-4">
							Somos especialistas
						</p>

						<ul className="list-disc list-inside">
							<li className="text-lg text-gray-500 font-light">Projetos</li>
							<li className="text-lg text-gray-500 font-light">
								Regularização
							</li>
							<li className="text-lg text-gray-500 font-light">Reforma</li>
							<li className="text-lg text-gray-500 font-light">Construção</li>
						</ul>
					</div>
					<div className="col-span-2">
						<div className="bg-blue-900 h-full rounded-lg"></div>
					</div>
				</div>
			</Section>

			<Section>
				<div className="flex justify-between items-center bg-blue-900 px-10 py-14 my-32 rounded-lg">
					<div>
						<h3 className="text-3xl text-white font-semibold mb-2">Nós podemos te ajudar</h3>
						<p className="text-lg text-white font-extralight">
							Entre em contato conosco, será um prazer te atender
						</p>
					</div>
					<Button icon="right">Solicitar um orçamento</Button>
				</div>
			</Section>
		</>
	);
};

export default Home;
