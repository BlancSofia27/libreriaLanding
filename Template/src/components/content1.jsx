import React from 'react';

const Content1 = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="content" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
     <div className="text-center mb-20">
       <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">En la actualidad una landing Page es crucial para tu negocio o emprendimiento</h1>
       <p className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">por eso abajo de dejamos una lista de aspectos clave</p>
       <div className="flex mt-6 justify-center">
         <div className="w-16 h-1 rounded-full bg-celeste inline-flex"></div>
       </div>
     </div>
     <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
       <div className="px-12 py-12 md:w-1/3 flex flex-col text-center items-center bg-greyStep bg-opacity-45 rounded-lg">
           <img className="w-5/12 rounded-full" src="../../public/1.png" alt="" />
         <div className="flex-grow">
           <h2 className="text-gray-900 text-2xl title-font font-medium my-6">Identidad de Marca Clara</h2>
           <p className="leading-relaxed text-base">Una landing page dedicada permite
     que tu marca se destaque y tenga una presencia en línea distintiva. Puedes
     personalizar el diseño y el contenido para reflejar la identidad visual</p>
           
         </div>
       </div>
       <div className="px-12 py-12 md:w-1/3 flex flex-col text-center items-center bg-greyStep bg-opacity-45 rounded-lg">
         <img className="w-5/12 rounded-full" src="../../public/2.png" alt="" />
         <div className="flex-grow">
           <h2 className="text-gray-900 text-2xl title-font font-medium my-6">Optimización de ventas</h2>
           <p className="leading-relaxed text-base">Al dirigir el tráfico a tu
            landing page, puedes capturar consumidores específicos y calificados para tu negocio. Puedes diseñar 
            formularios de contacto o suscripción que se alineen con los productos o servicios
            lo que te permite construir una lista de clientes potenciales interesados en lo que ofreces.</p>
           
         </div>
       </div>
       <div className="px-12 py-12 md:w-1/3 flex flex-col text-center items-center bg-greyStep bg-opacity-45 rounded-lg">
       <img className="w-5/12 rounded-full" src="../../public/3.png" alt="" />
         <div className="flex-grow">
           <h2 className="flex items-center justify-center text-gray-900 text-2xl title-font font-medium my-6 md:h-16 lg:h-16 xl:h-auto ">Llamada a la acción</h2>
           <p className="leading-relaxed text-base">Entendemos que una landing page efectiva va más allá del aspecto visual.
            Nos enfocamos en la optimización para conversaciones, implementando estrategias
            probadas para maximizar y ayudar a nuestros 
            clientes a alcanzar sus objetivos comerciales.</p>
         </div>
       </div>
       <div className="px-12 py-12 md:w-1/3 flex flex-col text-center items-center bg-greyStep bg-opacity-45 rounded-lg">
       <img className="w-5/12 rounded-full" src="../../public/4.png" alt="" />
         <div className="flex-grow">
           <h2 className="text-gray-900 text-[22px] title-font font-medium my-6">Enfoque en la Experiencia del Usuario</h2>
           <p className="leading-relaxed text-base"> Reconocemos la importancia de ofrecer una experiencia del usuario excepcional 
            en cada interacción en línea. Por lo tanto, nos esforzamos por diseñar 
            landing pages intuitivas, fáciles de navegar y centradas en las necesidades 
           y expectativas de los visitantes, lo que aumenta la probabilidad de que los clientes potenciales tomen medidas.</p>
         </div>
       </div>
       <div className="px-12 py-12 md:w-1/3 flex flex-col text-center items-center bg-greyStep bg-opacity-45 rounded-lg">
       <img className="w-5/12 rounded-full" src="../../public/5.png" alt="" />
         <div className="flex-grow">
           <h2 className="flex items-center justify-center text-gray-900 text-2xl title-font font-medium my-6 md:h-16 lg:h-16 xl:h-16 ">Accesibilidad Global</h2>
           <p className="leading-relaxed text-base">    Al tener una landing page en línea,vas a llegar a 
           clientes potenciales en todo el mundo las 24 horas del día, los 7 días de la semana. 
           Esto amplía tu alcance y te permite llegar a una audiencia más amplia
            sin límites geográficos, lo que puede aumentar las oportunidades de negocio y ventas.</p>
         </div>
       </div>
       <div className="px-12 py-12 md:w-1/3 flex flex-col text-center items-center bg-greyStep bg-opacity-45 rounded-lg">
       <img className="w-5/12 rounded-full" src="../../public/6.png" alt="" />
         <div className="flex-grow">
           <h2 className="flex items-center justify-center text-gray-900 text-2xl title-font font-medium my-6 md:h-16 lg:h-16 xl:h-16 ">Costo-Efectividad</h2>
           <p className="leading-relaxed text-base"> En comparación con otras formas de publicidad y marketing, crear
            y mantener una landing page es relativamente económico. Puedes utilizar herramientas y
             plataformas de diseño web asequibles para construir tu landing page, lo que te permite 
             promocionar los productos y servicios de manera rentable y con un alto potencial de retorno de la inversión.</p>
         </div>
       </div>
     </div>
     <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
   </div>
    </section>
  );
});

Content1.displayName = 'Content1';
export default Content1;


