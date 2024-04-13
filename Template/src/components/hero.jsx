export default function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/public/molly1.png"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Clear Bunny 
            <br className="hidden lg:inline-block" />
            Webs simples, resultados eficientes
          </h1>
          <p className="mb-8 leading-relaxed">
            En Santo Paz, nos enorgullece ofrecer una amplia gama de accesorios
            de calidad al por mayor para satisfacer las necesidades de tu
            negocio. Nos dedicamos a proporcionar productos excepcionales que
            combinan estilo, funcionalidad y durabilidad para garantizar la
            satisfacción del cliente y el éxito de tu empresa.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-fuchsia-300 border-0 py-2 px-6 focus:outline-none hover:bg-fuchsia-200 rounded text-lg">
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
