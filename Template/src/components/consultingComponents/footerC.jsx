import React from "react"
import logoC from '../../../public/consulting/logoC.png'
import youtube from '../../../public/consulting/youtubeC.svg'
import instagram from '../../../public/consulting/instagramC.svg'
import whatsapp from '../../../public/consulting/whatsappC.svg'
const FooterC = React.forwardRef((props, ref) => {
  return (
    <footerC ref={ref} id="footerC" className="text-gray-600 body-font">
      <div className="container px-5 py-7 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <div className="w-14 bg-roseC rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={logoC}
                alt=""
              />
            </div>
            <span className="ml-3 text-xl">Clinica estetica Hermansson</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
          Encontra más información y reseñas a través de nuestras redes sociales.
          </p>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2023 ClearBunny —
            <a
              href="mailto:clearbunnysoftware@gmail.com?subject=Asunto del correo&body=Hola, me gustaría crear mi pagina web..."
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              clinicaEsteticaMH@gmail.com
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a
              href="https://wa.me/+543442457106?text=Hola%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios"
              className="text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img width="33" height="33" src={whatsapp} alt="whatsapp icon" />
            </a>
            <a
              href="https://www.instagram.com/clearbunny_"
              className="ml-3 text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
             <img width="35" height="35" src={instagram} alt="instagram icon"/>
            </a>
            <a
              href="mailto:clearbunnysoftware@gmail.com"
              className="ml-3 text-gray-500"
            >
              <img width="35" height="35" src={youtube} alt="youtube icon" />
            </a>
          </span>
        </div>
      </div>
    </footerC>
  )
})

FooterC.displayName = "FooterC"
export default FooterC
