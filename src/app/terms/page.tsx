import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] py-20 px-4">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-[#00b4d8] hover:underline mb-8 inline-block">&larr; Volver</Link>

        <h1 className="text-3xl font-bold text-white mb-2">Condiciones Generales de Uso</h1>
        <p className="text-sm text-gray-500 mb-10">Ultima actualizacion: Marzo 2024</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-gray-300 leading-relaxed">

          <h2 className="text-xl font-semibold text-white mt-8">1. Identificacion del Titular</h2>
          <p>
            El presente sitio web es propiedad y esta operado por Axe Throwing Tenerife (en adelante, &quot;la Empresa&quot;),
            con domicilio en Avenida Arquitecto Gomez Cuesta 22, Zentral Center, Playa Las Americas, Arona 38650, Santa Cruz de Tenerife, Espana.
          </p>
          <p>Correo electronico: axethrowingtenerife@gmail.com</p>
          <p>Telefono: +34 623 362 229</p>

          <h2 className="text-xl font-semibold text-white mt-8">2. Objeto y Ambito de Aplicacion</h2>
          <p>
            Las presentes Condiciones Generales regulan el acceso y uso del sitio web, asi como la contratacion de los servicios
            ofrecidos por la Empresa, incluyendo sesiones de lanzamiento de hacha, lanzamiento ninja (shuriken y cuchillos),
            dardos interactivos (Darts Pixels y Classic Darts), eventos especiales (cumpleanos, despedidas, team building)
            y la venta de bonos regalo.
          </p>
          <p>
            El acceso y uso del sitio web implica la aceptacion plena y sin reservas de todas las condiciones aqui establecidas.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">3. Servicios y Reservas</h2>
          <h3 className="text-lg font-medium text-white mt-4">3.1. Descripcion de los servicios</h3>
          <p>
            Axe Throwing Tenerife ofrece experiencias de lanzamiento de hacha, shuriken, cuchillos y dardos en un entorno
            interactivo con dianas digitales. Los servicios incluyen coaching profesional, equipamiento y medidas de seguridad.
          </p>
          <h3 className="text-lg font-medium text-white mt-4">3.2. Proceso de reserva</h3>
          <p>
            Las reservas se realizan a traves de la plataforma web. El cliente selecciona la experiencia, numero de participantes,
            fecha y hora, proporciona sus datos personales y procede al pago. La reserva se confirma mediante un correo
            electronico con un numero de referencia unico.
          </p>
          <h3 className="text-lg font-medium text-white mt-4">3.3. Pago</h3>
          <p>
            El pago se realiza mediante tarjeta de credito/debito a traves de la plataforma segura Stripe. El cliente puede
            optar por el pago completo o un deposito del 20% del precio total, abonando el resto a su llegada al establecimiento.
            Los precios incluyen IVA (IGIC en Canarias) cuando corresponda.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">4. Politica de Cancelacion y Modificacion</h2>
          <p>
            Las reservas pueden ser modificadas o canceladas hasta 24 horas antes de la hora de la sesion reservada a traves
            del enlace proporcionado en el correo de confirmacion. Pasado este plazo, no se realizaran reembolsos del deposito
            o del pago completo. En caso de no presentarse (no-show), el importe pagado no sera reembolsado.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">5. Requisitos de Participacion</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>La edad minima para lanzamiento de hacha y shuriken es de 14 anos (menores acompanados por un adulto).</li>
            <li>Los participantes de 8 a 14 anos pueden practicar unicamente tiro con arco con flechas de ventosa.</li>
            <li>Es obligatorio llevar calzado cerrado. No se permiten sandalias, chanclas ni tacones.</li>
            <li>Los participantes no deben estar bajo los efectos del alcohol o drogas.</li>
            <li>Es obligatorio firmar la Decharge de Responsabilite (waiver) antes de cada sesion.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8">6. Seguridad y Responsabilidad</h2>
          <p>
            Los participantes se comprometen a seguir todas las instrucciones del personal y las normas de seguridad del
            establecimiento. La Empresa no se hace responsable de lesiones causadas por el incumplimiento de las normas
            de seguridad o por comportamiento imprudente de los participantes.
          </p>
          <p>
            Todos los participantes deben firmar un formulario de descargo de responsabilidad antes de la actividad.
            Este formulario constituye un acuerdo vinculante entre el participante y la Empresa.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">7. Bonos Regalo</h2>
          <p>
            Los bonos regalo adquiridos a traves del sitio web son validos durante 12 meses desde la fecha de compra.
            Los bonos no son reembolsables ni canjeables por dinero en efectivo. La Empresa se reserva el derecho de
            modificar las experiencias disponibles para canjear con bonos regalo.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">8. Propiedad Intelectual</h2>
          <p>
            Todos los contenidos del sitio web (textos, imagenes, logotipos, videos, diseno grafico, codigo fuente)
            son propiedad de Axe Throwing Tenerife o de sus licenciantes y estan protegidos por las leyes de propiedad
            intelectual. Queda prohibida su reproduccion, distribucion o modificacion sin autorizacion previa por escrito.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">9. Limitacion de Responsabilidad</h2>
          <p>
            La Empresa no sera responsable de danos indirectos, incidentales o consecuentes derivados del uso del sitio web
            o de la participacion en las actividades, salvo en los casos previstos por la legislacion aplicable.
            La responsabilidad total de la Empresa se limita al importe pagado por el servicio contratado.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">10. Legislacion Aplicable y Jurisdiccion</h2>
          <p>
            Las presentes Condiciones Generales se rigen por la legislacion espanola. Para cualquier controversia derivada
            del uso del sitio web o de la contratacion de servicios, las partes se someten a la jurisdiccion de los
            Juzgados y Tribunales de Santa Cruz de Tenerife, Espana.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">11. Contacto</h2>
          <p>
            Para cualquier consulta relacionada con estas Condiciones Generales, puede contactarnos en:
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
