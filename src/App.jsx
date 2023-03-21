import { FaChevronRight, FaInstagram } from 'react-icons/fa';
import { RiChatSmileFill } from 'react-icons/ri';
import { ImPhoneHangUp } from 'react-icons/im';
import CardProduct from './components/CardProduct';
import Header from './components/Header';
import ButtonFiltrar from './components/ButtonFiltrar';
import './styles.scss';

function App() {
	return (
		<main className="container-main">
			<Header />
			<div className="container pt-8 px-6">
				<h6 className="titulo-main">Cerveza</h6>

				<section className="container-products">
					<CardProduct
						img={'/img/votus.png'}
						title={'Votus N 001'}
						description={
							'India Pale Ale del año 2019 N 001 Red IPA'
						}
						price={75}
					/>
					<CardProduct
						img={'/img/prairie.png'}
						title={'Prairie Artisan'}
						description={
							'Ales Prairie Noir Whiskey Barrel Aged Imperial Stout 12oz'
						}
						price={85.3}
					/>

					<CardProduct
						img={'/img/redrice.png'}
						title={'Redrice'}
						description={
							'Hitachino Nest Beer Red Rice Ale 330ml'
						}
						price={85.3}
					/>

					<CardProduct
						img={'/img/cascade.png'}
						title={'Cascade'}
						description={
							'Cascade Brewing 2017 Brunch Line BA NORTHWEST Sour aLE'
						}
						price={175}
					/>
				</section>

				<section className="section-mercando">
					<div>
						<h6>Sigue mercando</h6>
						<h2 className="font-bold text-2xl">Vinos</h2>
					</div>
					<div>
						<FaChevronRight className="text-blue-700" />
					</div>
				</section>
			</div>

			<section className="cani-help">
				<h6 className="text-center text-white font-bold">
					¿Podemos ayudarle?
				</h6>

				<div className="flex gap-4 justify-center mt-4 text-center">
					<div className="flex justify-center flex-col items-center">
						<span className="inline-block text-black rounded-full bg-white text-xl p-4">
							<RiChatSmileFill />
						</span>
						<h6 className="text-white text-center text-xs font-semibold mt-2">
							Chat
						</h6>
					</div>
					<div className="flex justify-center flex-col items-center">
						<span className="inline-block text-black rounded-full bg-white text-xl p-4">
							<ImPhoneHangUp />
						</span>{' '}
						<h6 className="text-white text-center text-xs font-semibold mt-2">
							Llamar
						</h6>
					</div>
				</div>
			</section>

			<section className="px-4 py-6">
				<h6 className="py-1 text-center text-sm font-bold">
					Sobre Nosotros
				</h6>
				<h6 className="py-1 text-center text-sm font-bold">
					Medidas de Seguridad (COVID-19)
				</h6>

				<h6 className="py-1 text-center text-sm font-bold">Cómo Mercar</h6>

				<h6 className="py-1 text-center text-sm font-bold">Proveedores</h6>

				<h6 className="py-1 text-center text-sm font-bold">Contáctenos</h6>

				<h6 className="py-1 text-center text-sm font-bold">
					Zona de Cobertura
				</h6>

				<div className="my-4 bg-gray-200 w-8 h-0.5 mx-auto"></div>

				<div className="mt-6 flex items-center justify-center">
					<span className="bg-blue-700 rounded-full p-2 inline-block">
						<FaInstagram className="text-white" />
					</span>
				</div>

				<h6 className="py-1 mt-2 text-center text-sm font-bold">
					Política de Tratamiento de Datos Personales
				</h6>
			</section>

			<section className="bg-gray-900 p-4"></section>

			<ButtonFiltrar />
		</main>
	);
}

export default App;
