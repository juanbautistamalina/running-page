function Accordion() {
    return (

        <div id="accordion-collapse" data-accordion="collapse" className="">
            <h2 id="accordion-collapse-heading-1">
                <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                    <span>¿Qué es Fit & Fast?</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Fit & Run es tu tienda especializada en zapatillas de running y accesorios para corredores de todos los niveles. </p>
                    <p className="text-gray-500 dark:text-gray-400">Nos dedicamos a ofrecer tecnología avanzada y asesoramiento personalizado, ayudándote a encontrar el equipo ideal para que cada carrera sea segura y cómoda. Nuestra misión es apoyar tu camino hacia una vida activa y saludable con productos innovadores y de calidad.</p>
                </div>
            </div>
            <h2 id="accordion-collapse-heading-2">
                <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                    <span>¿Cuáles son nuestros productos?</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">En Fit & Run, nos especializamos exclusivamente en zapatillas de running. Ofrecemos una variedad de modelos diseñados para cubrir todas las necesidades de los corredores, desde principiantes hasta atletas avanzados.</p>
                </div>
            </div>
            <h2 id="accordion-collapse-heading-3">
                <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                    <span>¿Cuánto tiempo toma el envío y cuál es el costo?</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
                <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">El tiempo de envío depende de la ubicación del cliente. Para envíos nacionales, suele tomar entre 3 y 5 días hábiles. </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Para envíos internacionales, el tiempo estimado es de 7 a 15 días hábiles. El costo del envío se calcula al finalizar la compra, dependiendo del destino y el tipo de entrega seleccionado. En pedidos superiores a $100, ofrecemos envío gratuito dentro del país.</p>
                </div>
            </div>
        </div>

    )
}

export default Accordion