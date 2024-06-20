import React from 'react';

// Aquí podrías importar tu SVG como un componente React, o simplemente insertarlo directamente en el JSX

const Staff = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id='staff' className="text-gray-600 body-font">
      <div className="container px-5 pt-8 pb-24 mx-auto">
        {/* Icono SVG */}
        <div className="flex justify-center mb-4">
          <svg className="w-12 h-12 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
        </div>

        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
        </div>

        <div className="flex flex-wrap -m-2">
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Holden Caulfield</h2>
                <p className="text-gray-500">UI Designer</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84"/>
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Henry Letham</h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88"/>
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Oskar Blinde</h2>
                <p className="text-gray-500">Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Staff.displayName = 'Staff';
export default Staff;
