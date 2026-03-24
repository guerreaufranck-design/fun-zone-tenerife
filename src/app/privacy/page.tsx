import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] py-20 px-4">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-[#00b4d8] hover:underline mb-8 inline-block">&larr; Volver</Link>

        <h1 className="text-3xl font-bold text-white mb-2">Politica de Privacidad</h1>
        <p className="text-sm text-gray-500 mb-10">Ultima actualizacion: Marzo 2024</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-gray-300 leading-relaxed">

          <h2 className="text-xl font-semibold text-white mt-8">1. Responsable del Tratamiento</h2>
          <p>
            El responsable del tratamiento de los datos personales es Axe Throwing Tenerife, con domicilio en
            Avenida Arquitecto Gomez Cuesta 22, Zentral Center, Playa Las Americas, Arona 38650, Santa Cruz de Tenerife, Espana.
          </p>
          <p>Correo electronico: axethrowingtenerife@gmail.com</p>
          <p>Telefono: +34 623 362 229</p>

          <h2 className="text-xl font-semibold text-white mt-8">2. Datos que Recopilamos</h2>
          <p>Recopilamos los siguientes datos personales en funcion del servicio utilizado:</p>

          <h3 className="text-lg font-medium text-white mt-4">2.1. Al realizar una reserva:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nombre completo</li>
            <li>Direccion de correo electronico</li>
            <li>Numero de telefono</li>
            <li>Datos de pago (procesados de forma segura por Stripe; no almacenamos datos de tarjetas)</li>
          </ul>

          <h3 className="text-lg font-medium text-white mt-4">2.2. Al firmar el formulario de descargo de responsabilidad (waiver):</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nombre y apellidos</li>
            <li>Direccion de correo electronico</li>
            <li>Fecha de nacimiento</li>
            <li>Direccion postal</li>
            <li>Numero de telefono</li>
            <li>Firma digital (imagen)</li>
            <li>Direccion IP y agente de usuario del navegador (datos tecnicos)</li>
          </ul>

          <h3 className="text-lg font-medium text-white mt-4">2.3. Al navegar por el sitio web:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Datos de navegacion (paginas visitadas, tiempo de permanencia)</li>
            <li>Direccion IP</li>
            <li>Tipo de navegador y dispositivo</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8">3. Finalidad del Tratamiento</h2>
          <p>Los datos personales se tratan para las siguientes finalidades:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Gestion de reservas:</strong> procesar y confirmar las reservas, enviar correos de confirmacion y recordatorios.</li>
            <li><strong>Seguridad:</strong> gestionar los formularios de descargo de responsabilidad como requisito legal y de seguridad para la practica de la actividad.</li>
            <li><strong>Comunicaciones:</strong> enviar informacion sobre la reserva, modificaciones y cancelaciones.</li>
            <li><strong>Mejora del servicio:</strong> analizar el uso del sitio web para mejorar la experiencia del usuario.</li>
            <li><strong>Obligaciones legales:</strong> cumplir con las obligaciones fiscales y legales aplicables.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8">4. Base Juridica del Tratamiento</h2>
          <p>El tratamiento de datos se basa en:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Ejecucion de un contrato:</strong> el tratamiento es necesario para la prestacion del servicio reservado (articulo 6.1.b del RGPD).</li>
            <li><strong>Consentimiento:</strong> el participante otorga su consentimiento al firmar el formulario de descargo de responsabilidad (articulo 6.1.a del RGPD).</li>
            <li><strong>Interes legitimo:</strong> mejora de los servicios y seguridad del establecimiento (articulo 6.1.f del RGPD).</li>
            <li><strong>Obligacion legal:</strong> cumplimiento de la normativa fiscal y de proteccion al consumidor (articulo 6.1.c del RGPD).</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8">5. Destinatarios de los Datos</h2>
          <p>Los datos personales pueden ser comunicados a los siguientes terceros:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Stripe:</strong> procesamiento seguro de pagos con tarjeta. Stripe cumple con el estandar PCI DSS nivel 1.</li>
            <li><strong>Resend:</strong> envio de correos electronicos transaccionales (confirmaciones, recordatorios).</li>
            <li><strong>Supabase:</strong> almacenamiento seguro de datos en la nube (servidores en la Union Europea).</li>
            <li><strong>Vercel:</strong> alojamiento del sitio web.</li>
          </ul>
          <p>No vendemos, alquilamos ni compartimos datos personales con terceros con fines comerciales o de marketing.</p>

          <h2 className="text-xl font-semibold text-white mt-8">6. Periodo de Conservacion</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Datos de reservas:</strong> se conservan durante 5 anos para cumplir con obligaciones fiscales y legales.</li>
            <li><strong>Formularios de descargo de responsabilidad:</strong> se conservan durante 10 anos como prueba legal en caso de reclamacion.</li>
            <li><strong>Datos de navegacion:</strong> se conservan durante un maximo de 12 meses.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8">7. Derechos del Usuario</h2>
          <p>
            De conformidad con el Reglamento General de Proteccion de Datos (RGPD) y la Ley Organica 3/2018 de Proteccion
            de Datos Personales (LOPDGDD), el usuario tiene derecho a:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Acceso:</strong> conocer que datos personales estamos tratando.</li>
            <li><strong>Rectificacion:</strong> solicitar la correccion de datos inexactos o incompletos.</li>
            <li><strong>Supresion:</strong> solicitar la eliminacion de sus datos cuando ya no sean necesarios.</li>
            <li><strong>Oposicion:</strong> oponerse al tratamiento de sus datos en determinadas circunstancias.</li>
            <li><strong>Limitacion:</strong> solicitar la limitacion del tratamiento de sus datos.</li>
            <li><strong>Portabilidad:</strong> recibir sus datos en un formato estructurado y de uso comun.</li>
          </ul>
          <p>
            Para ejercer estos derechos, envie un correo electronico a axethrowingtenerife@gmail.com indicando
            el derecho que desea ejercer y adjuntando una copia de su documento de identidad.
          </p>
          <p>
            Asimismo, tiene derecho a presentar una reclamacion ante la Agencia Espanola de Proteccion de Datos (AEPD)
            en www.aepd.es si considera que sus derechos no han sido debidamente atendidos.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">8. Medidas de Seguridad</h2>
          <p>
            Implementamos medidas tecnicas y organizativas apropiadas para proteger los datos personales contra
            el acceso no autorizado, la perdida, la destruccion o la alteracion. Entre estas medidas se incluyen:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Cifrado SSL/TLS en todas las comunicaciones del sitio web.</li>
            <li>Procesamiento de pagos mediante Stripe (certificado PCI DSS nivel 1).</li>
            <li>Almacenamiento de datos en servidores seguros con acceso restringido.</li>
            <li>Politicas de acceso basadas en roles para el personal autorizado.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8">9. Cookies</h2>
          <p>
            Este sitio web utiliza cookies tecnicas estrictamente necesarias para el funcionamiento del sitio.
            No utilizamos cookies de seguimiento ni cookies publicitarias de terceros.
            Las cookies tecnicas se utilizan para mantener la sesion del usuario, recordar la preferencia de idioma
            y garantizar la seguridad de la navegacion.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">10. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de modificar la presente Politica de Privacidad en cualquier momento.
            Cualquier modificacion sera publicada en esta pagina con la fecha de ultima actualizacion.
            Le recomendamos revisar periodicamente esta politica.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">11. Contacto</h2>
          <p>
            Para cualquier consulta relacionada con la proteccion de sus datos personales, puede contactarnos en:
          </p>
          <ul className="list-none space-y-1">
            <li>Email: axethrowingtenerife@gmail.com</li>
            <li>Telefono: +34 623 362 229</li>
            <li>Direccion: Avenida Arquitecto Gomez Cuesta 22, Zentral Center, Playa Las Americas, Arona 38650</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
