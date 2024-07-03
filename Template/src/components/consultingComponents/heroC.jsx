import React from 'react';
import doc from '../../../public/consulting/doc.png'
import con1 from '../../../public/consulting/con1.jpg'
import con5 from '../../../public/consulting/con5.jpg'
import con3 from '../../../public/consulting/con3.jpg'
import con2 from '../../../public/consulting/con2.jpg'
import beforeLips from '../../../public/consulting/beforeLips.jpg'
import afterLips from '../../../public/consulting/afterLips.jpg'
import relleno from '../../../public/consulting/relleno.mp4'
import perfilado from '../../../public/consulting/perfiladoVideo.mp4'
import BeforeAfterSlider from './before'
const HeroC = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id='heroC' className="text-gray-600 body-font bg-roseeC">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
  <div className="flex w-full mb-20 flex-wrap items-center">
  <div className="md:p-2 p-1 w-full md:w-2/5">
    <img alt="gallery" className="w-full object-cover h-full object-center block rounded-lg" src={doc} />
  </div>
  <div className="md:w-1/2 w-full flex flex-col items-center justify-center text-center md:text-left">
    <h1 className="lg:pl-6 sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-full mb-4">Master Cleanse Reliac Heirloom</h1>
    <p className="lg:pl-6 lg:w-full mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably heard of them man bun deep jianbing selfies heirloom.</p>
  </div>
</div>

    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-[500px] object-cover h-[300px] object-center block" src={con5}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <video
                  className="w-[501px] h-[301px] object-cover"
                  src={perfilado}
                  autoPlay
                  loop
                  muted
                />
        </div>
        <div className="md:p-2 p-1 w-full">
        <BeforeAfterSlider
                  beforeImage={beforeLips}  // Imagen del "antes"
                  afterImage={afterLips}   // Imagen del "después"
                />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-[601px] h-[361px] object-cover object-center block" src={con3}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <video
                  className="w-[502px] h-[302px] object-cover"
                  src={relleno}
                  autoPlay
                  loop
                  muted
                />
        </div>
        <div className="md:p-2 p-1 w-1/2">
        <img alt="gallery" className="w-[503px] h-[303px] object-cover object-center block" src={con1}/>
        </div>
      </div>
    </div>
  </div>
</section>
  );
});

HeroC.displayName = 'HeroC'
export default HeroC;
