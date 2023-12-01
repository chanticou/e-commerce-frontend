import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "./index.css";

export const TermsAndConditionsPopup = ({ onAccept }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const termsAccepted = localStorage.getItem("termsAccepted");
    if (!termsAccepted) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("termsAccepted", "true");
    setShowPopup(false);
    // Aquí puedes enviar la aceptación al servidor si el usuario está registrado.
  };

  if (!showPopup) {
    return null;
  }

  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Términos y Condiciones</h2>
        <div className="terms-content">
          {/* Aquí iría el texto completo de los términos y condiciones */}
          <h2>Introducción</h2>
          <div>
            <p>
              Te explicamos en detalle los Términos y Condiciones Generales para
              usar nuestros servicios. Todos estos estarán regidos por
              recíprocos derechos y obligaciones entre ambas partes (Usuarios y
              la Empresa).
            </p>
            <p>
              Al ingresar a la página, El Usuario declara saber, conocer y
              aceptar estas condiciones de Uso. Las mismas, y sus
              modificaciones, estarán vigentes en forma inmediata una vez
              publicadas.
            </p>
            <p>
              El uso de la página implica el conocimiento y la aceptación plena
              de parte del Usuario de los Términos y Condiciones de Uso.
            </p>
            <p>
              El Usuario está en pleno derecho de rechazar estas condiciones o
              sus modificaciones de no parecerle pertinente debiendo solamente
              dejar de seguir utilizando el referido servicio.
            </p>
          </div>

          <h2>Naturaleza del Servicio</h2>
          <p>
            La página está programada para ser un medio virtual de interacción
            en ambas partes. De igual forma, para servir como un catálogo con
            acceso a compra de los productos que se presentan en nuestra página
            de E-Commerce.
          </p>

          <h2>Los Usuarios pueden utilizar los servicios del Sitio.</h2>
          <p>
            Estos servicios están únicamente disponibles a quienes tengan
            capacidad legal de contratarlos. Excluyendo así a todo aquel que no
            posea dicha capacidad, Si el Usuario es una persona jurídica, éste
            deberá poder contratar a nombre de tal entidad y acatar los Términos
            de las Condiciones de Uso.
          </p>
          <div>
            <h2>Uso de los Servicios.</h2>
            <p>
              El Usuario declara que la información que brinda al gestionar el
              pedido será “precisa, correcta y actual”. Se compromete a informar
              oportunamente sobre cualquier cambio. También, se hace
              “enteramente” responsable frente a Solsoft Computación por los
              daños y perjuicios que el incumplimiento de esto pudiese acarrear.
              Esto incluye, pero no se limita, a costos de ubicación física de
              Usuario, costo de intimaciones y citaciones, entre otros.
            </p>
            <p>
              El Usuario acepta que empleará los Servicios exclusivamente con
              los fines estipulados en las condiciones de Uso y cualquier norma
              o regulación aplicable de índole Municipal, Provincial o Nacional,
              incluyendo, pero no limitándose, a leyes, decretos, ordenanzas,
              resoluciones, directivas, entre otros.
            </p>
            <p>
              De igual forma, el Usuario se compromete a no divulgar su
              contraseña a terceros, que no estén autorizados por el mismo, para
              acceder a los servicios de Sitio debiendo informar a
              <strong>Solsoft Computación</strong> referidos cambios.
            </p>
          </div>
          <div>
            <h2>Ámbito de Aplicación.</h2>
            <p>
              Las condiciones de Uso se aplican a cualquiera de las ventas de
              productos o servicios hechas por{" "}
              <strong>Solsoft Computación</strong> en la República Argentina. La
              elaboración de un pedido supone la aceptación expresa de Usuario a
              las Condiciones. Al aceptar las mismas, registrándose como Usuario
              o ingresando como invitado, usted declara bajo juramento y
              certifica tener 18 años o más.
            </p>
            <p>
              Si usted no está de acuerdo, o no puede cumplir, con alguna de
              estas Términos y Condiciones de Uso, lo invitamos a no utilizar
              esta página. Toda la información proporcionada al momento de
              operar debe ser “precisa y veraz”. Dar información inexacta o
              falsa constituye una violación grave a los Términos y Condiciones
              de Uso.
            </p>
            <p>
              Confirmando su pedido al final del proceso de una operación, el
              Usuario acuerda aceptar los artículos adquiridos y pagar su
              precio.
            </p>
          </div>
          <div>
            <h2>Referencia a terceros.</h2>
            <p>
              Las referencias en la página a nombres, marcas, productos o
              servicios de terceros, o vínculos de hipertexto a otros Sitios
              web, o información de terceros, ni del contenido de sus páginas.
              La empresa tampoco hace ninguna declaración o promesa con respecto
              a productos o servicios de terceros.
            </p>
            <p>
              El Usuario que decide navegar o seguir el vínculo a cualquier
              página, lo hace enteramente bajo su propio riesgo y
              responsabilidad.
            </p>
          </div>
          <div>
            <h2>Orden de Compra.</h2>
            <p>
              El Usuario deberá formular su pedido recorriendo virtualmente a la
              empresa, escogiendo los productos que desea adquirir e indicando
              respecto a cada Ítem la cantidad que quiere del mismo.
            </p>
            <p>
              El procedimiento le da la oportunidad de añadir o quitar
              artículos, de revisar la orden y de anularla por completo. Pueden
              existir mínimos o máximo s en la cantidad, volumen o precios
              incluidos en una Orden de Compra.
            </p>
            <p>
              Todos los precios publicados en el sitio son exclusivos para la
              compra On-Line de los referidos artículos los que podrían ser
              idénticos a los precios publicados en otras plataformas u otras
              publicaciones en Sitio de Mercados de E-Commerce promocionados por
              nosotros mismos.
            </p>
          </div>
          <div>
            <h2>Aceptación de Pedidos</h2>
            <p>
              Considere que puede ocurrir que, luego de aprobado por el Usuario
              un pedido, por distintas razones{" "}
              <strong>Solsoft Computación</strong> no lo acepte total o
              parcialmente y se deba cancelar o excluir algunos artículos
              pedidos.
            </p>
            <p>
              Esto puede ocurrir por distintos motivos: limitación en las
              cantidades disponibles como se aclara en la nota anterior,
              faltantes de mercadería, falta de autorización a la operación de
              la entidad emisora o administradora de su medio de pago,
              inexactitudes o errores en el producto o información, problemas
              identificaciones por el Departamento de Prevención de fraude o
              Crédito o alteraciones al alza del precio publicado.
            </p>
            <p>
              Para su seguridad, le notificamos que eventualmente podemos pedir
              información o verificaciones adicionales antes de aceptar
              cualquier pedido. Si se cancela completa o parcialmente su pedido
              o si se solicita información adicional para aceptar su pedido, el
              Usuario tendrá siempre derecho a cancelar la totalidad de este.
            </p>
            <p>
              <strong>Solsoft Computación</strong> se reserva el derecho de
              anular definitivamente cualquier operación luego de la
              constatación de los datos ingresados, en cuyo caso se le
              notificará al Usuario la medida.
            </p>
            <p>
              <strong>
                {" "}
                <u>Nota</u>:
              </strong>{" "}
              El Stock del producto solicitado queda sujeto a las condiciones y
              del estado actual en depósito a la fecha reservándose{" "}
              <strong>Solsoft Computación</strong>, un prudencial tiempo para
              cumplimentar su entrega o rechazo por faltante de los mismos.
            </p>
          </div>
          <div>
            <h2>Entrega y Pago.</h2>
            <p>
              Cuando un pedido haya quedado confirmado y el importe de su
              factura aprobado, a menos que existan inconvenientes excepcionales
              para la aceptación del pedido (que le serían notificados
              debidamente) recibirá un correo electrónico confirmando que la
              operación fue exitosa. Si el Usuario no recibe dicha notificación
              deberá contactarse con <strong>Solsoft Computación</strong> para
              corroborar que no hubo errores de registro al ingresar la casilla
              de correo.
            </p>
            <p>El Usuario dispone estos métodos de entrega de los productos:</p>
            <p>-Envíos a domicilio</p>
            <p>
              -Envío a una sucursal de la empresa de Correo con que en ese
              momento se informará
            </p>
            <p>
              -Retiro personal en los Centros de depósitos que se informaran al
              Usuario.
            </p>
            <p>
              Para la opción “Envíos a domicilio”, la compra deberá ser recibida
              por el tirular del método de pago utilizado. También puede recibir
              el pedido una persona “previamente” autorizada. En cualquier caso,
              al momento de la entrega, el receptor deberá mostrar su DNI.
            </p>
            <p>
              Para la opción “Retiro personal” se deberán seguir estos pasos:
            </p>
            <ol className="enumeration">
              <li>
                Recibir correo de confirmación, de parte de un vendedor de{" "}
                <strong>Solsoft Computación</strong>, indicando que ya se puede
                retirar el pedido.
              </li>
              <li>
                Ir al Centro de depósito y distribución en un período menor a
                los (10) días corridos con el comprobante de compra efectuada
                impreso.
              </li>
              <li>
                Sugerimos al Usuario que si va a retirar su pedido, transcurrido
                cinco (5) días después de la compra, verifique su disponibilidad
                mediante correo electrónico al vendedor con que inició el
                trámite.
              </li>
              <li>
                En caso de que se le hubiese enviado el correo de confirmación
                pero luego, por razones ajenas a{" "}
                <strong>Solsoft Computación</strong>, los artículos no se
                encontraran disponibles para ser retirados, se le informará
                oportunamente al Usuario y se le darán estas alternativas:
              </li>
              <ul>
                <li>Cambiar los productos adquiridos por otros.</li>
                <li>Esperar el reingreso de los productos comprados.</li>
                <li>
                  Anular total o parcialmente la operación con reintegro de los
                  importes abonados mediante una Nota de Crédito por el mismo
                  pago en que se efectuó la compra.
                </li>
              </ul>
              <li>
                Por seguridad, para ingresar a los Centros de Distribución o
                Depósito de <strong>Solsoft Computación</strong>, deberán
                concurrir acompañados del DNI que deberá mostrar junto con la
                tarjeta de crédito utilizada en la compra.La entrega solo se
                hará al titular del medio de pago, sin excepción.
              </li>
              <li>
                Después de identificarse se le generará la factura de compra
                correspondiente.
              </li>
              <li>
                La compra podrá ser retirada en el horario del centro de
                Depósito y Distribución de Lunes a viernes hábiles de 10 a 18
                hs. Y los sábados de 10 a a14 horas.
              </li>
              <li>
                Se le exhibirá al Usuario el estado de la mercadería y los
                accesorios que vienen con ésta debiendo (el Usuario o persona
                autorizada) verificar que corresponde a los artículos incluidos
                en el pedido y en el remito que se le presentará en el acto de
                la entrega. La firma del remito implicará declaración de
                conformidad con la mercadería entregada, sin perjuicio de los
                derechos que les pudieren corresponder en caso de que la misma
                resultara por algún motivo defectuosa.
              </li>
            </ol>
            <p>
              <strong>
                Costo de servicio de entrega a domicilio e imposibilidad de
                entrega.
              </strong>
            </p>
            <p>
              El Servicio de Entrega a domicilio se encuentra habilitado en
              determinadas zonas del país. Las mismas pueden ser consultadas
              durante el proceso de compra. Este será el lapso en que el Usuario
              deberá escoger el tiempo y modelo que le convenga.
            </p>
            <p>
              La entrega se realizará dentro de un margen mínimo de tres (3)
              días hábiles. Dicho lapso podría extenderse a diez (10) días
              hábiles dependiendo de la ubicación del domicilio de entrega.
            </p>
            <p>
              El Costo de envío estará expresado y diferenciado durante el
              proceso de compra, podrá verificar dicho importe en el carrito de
              compra de acuerdo con la localidad donde se deba entregar y se
              deberá abonar en efectivo al momento de recibir la mercadería a la
              empresa encargada del transporte a no ser que la entrega pactada
              con <strong>Solsoft Computación</strong> este catalogada como
              “Entrega Gratuita”
            </p>
            <p>
              <strong>Solsoft Computación</strong>, enviará al Usuario un correo
              electrónico o un mensaje de Whatsapp. En caso de que el titular
              habilitado para la recepción no se encuentre en el domicilio, se
              le comunicará al Usuario en no más de cinco (5) hábiles la
              reprogramación para la entrega de la mercadería. Esto no
              ocasionará un costo extra al Usuario.
            </p>
          </div>
          <div>
            <h3>Medios de Pago.</h3>
            <p>
              La página de <strong>Solsoft Computación</strong> cuenta con los
              siguientes medios de pagos válidos para compras Online:
              Transferencia, Depósito Bancario, Tarjetas de Créditos, Mercado
              Pago, Todo Pago y Pay Pal.
            </p>
          </div>
          <div>
            <h3>Comprobantes de Pago</h3>
            <p>
              La factura electrónica será remitida al E-Mail informado en el
              pedido, sin excepción. De no recibirla, deberá contactarse con su
              vendedor Solsoft Computación para rectificar cualquier error en la
              carga del correo del pedido.
            </p>
          </div>
          <div>
            <h3>Operatividad y Seguridad</h3>
            <p>
              El Usuario se compromete a no acceder, intentar acceder a la
              página, ni usar ninguno de los servicios por ningún otro medio
              aparte de la interfaz dispuesta por{" "}
              <strong>Solsoft Computación</strong>. El Usuario se compromete,
              además, a no intervenir ni interrumpir la correcta prestación de
              los servicios de este dominio.
            </p>
            <p>
              Esta estrictamente prohibido a los Usuarios violar, vulnerar o de
              cualquier otra forma afectar al normal uso y seguridad del Sitio
              incluyendo datos de otros Usuarios, acceder a datos que no sean
              los propios o tratar de incursionar pretendiendo violar la
              seguridad del Sitio intentando la búsqueda de vulnerabilidades de
              su sistema o una red o romper medidas de seguridad o autenticación
              sin previa autorización, intentar interferir con el servicio desde
              otra computadora/red enmascarando su seguridad mediante VPN.
            </p>
            <p>
              Las violaciones a la seguridad del sistema o de la red pueden dar
              lugar a Responsabilidad Civil o Penal.{" "}
              <strong>Solsoft Computación</strong> investigará sucesos que
              puedan implicar esas violaciones y puede involucrarse a cooperar
              con las autoridades encargadas de hacer cumplir la Ley y enjuiciar
              a los Usuarios que participen de estas violaciones.
            </p>
            <p>
              Usted acepta no utilizar ningún dispositivo, software o rutina
              para intentar interferir con el normal funcionamiento de esta
              página. Usted acepta, además, no utilizar cualquier medio ya sean
              motor, software, herramienta, agente u otro dispositivo o
              mecanismo para navegar o buscar en esta página, que no sean los
              autorizados que <strong>Solsoft Computación</strong> pone a
              disposición en su página de E-Commerce.
            </p>
            <p>
              Los Usuarios aceptan y reconocen expresamente que cualquier hecho,
              acto u omisión vinculadas con lo referido anteriormente y que
              sucedan a través de su Usuario y contraseña para dañar de alguna
              manera el normal funcionamiento y la seguridad de la página y de
              sus otros Usuarios será llevada ante la Ley y habilitará
              automáticamente y bajo su responsabilidad Acciones Legales y
              Penales en su contra.
            </p>
          </div>
          <div>
            <h3>Contraseñas y Seguridad</h3>
            <p>
              Por medio de la aceptación de los Términos y Condiciones de Uso,
              el Usuario reconoce y acepta ser única responsable por el uso de
              su cuenta en este sitio comprometiéndose a resguardar la
              confidencialidad de sus datos y contraseñas.
            </p>
            <p>
              El Usuario deberá informar de inmediato a{" "}
              <strong>Solsoft Computación</strong>
              cualquier uso sin autorización de su contraseña o cuenta. Esta
              notificación se debe hacer desde la página y debe incluir toda la
              información con la que cuente sobre el uso no autorizado de sus
              datos.
            </p>
          </div>
          <div>
            <h3>Datos Personales</h3>
            <p>
              Al registrarse como Usuario de esta página, suministrará
              información que, a nuestro criterio, resulta necesaria para
              brindar un mejor servicio. Los datos personales del Usuario se
              toman con los fines de cumplir con el giro comercial y realizar
              acciones de publicidad.
            </p>
            <p>
              Cuando el Usuario decide proporcionar sus datos, consciente que
              podremos utilizarlos con fines operativos del sistema de comercio
              electrónico en todas las plataformas virtuales de{" "}
              <strong>Solsoft Computación</strong> y que se le podrá enviar
              ofertas de productos o servicios, anuncios, promociones y
              publicidad.
            </p>
            <p>
              Al compartirnos sus datos personales por medio del registro en la
              Página usted confiere un consentimiento previsto por la ley
              argentina No 25.236. incluyendo la posibilidad de cesión prevista
              en su artículo 11 que podrá revocar en cualquier momento
              solicitándolo a través de un correo electrónico o cualquier otro
              medio acreditable.
            </p>
            <p>
              La página tiene una estricta política de privacidad y protección
              de datos generados por la actividad de sus usuarios.{" "}
              <strong>Solsoft Computación</strong> no entregará ningún tipo de
              datos personales sobre ninguno de sus Usuarios a ningún tercero en
              ninguna circunstancia.
            </p>
            <p>
              Usted autoriza a <strong>Solsoft Computación</strong> para
              analizar la información relacionada con sus usuarios como grupo y
              ofrecer, individualmente o en conjunto, bienes y servicios a sus
              usuarios.
            </p>
            <p>
              <strong>Solsoft Computación</strong> Al registrarse como Usuario
              de esta página, suministrará información que, a nuestro criterio,
              resulta necesaria para brindar un mejor servicio. Los datos
              personales del Usuario se toman con los fines de cumplir con el
              giro comercial y realizar acciones de publicidad.
            </p>
            <p>
              El Usuario, en cuanto titular de los datos personales, tiene la
              facultad de ejercer el derecho de acceso a los mismos en forma
              gratuita a intervalos no inferiores a seis meses, salvo que se
              acredite un interés legítimo al efecto conforme lo establecido al
              artículo 14, inciso 3 de la Ley N° 25.326.
            </p>
            <p>
              Aconsejamos a sus clientes que mantengan actualizados sus datos.
              Así recibirán en ofertas y promociones diseñadas a medida de sus
              necesidades.
            </p>
          </div>
          <div>
            <h3>Precios</h3>
            <p>
              El propósito del Sitio es permitir a los Usuarios realizar compras
              online, sin concurrir personalmente a las sucursales. Debido a
              esto, los precios serán los que el Usuario observará en caso de
              acudir al local el día en que hace el pedido online.
            </p>
            <p>
              Sin embargo, aunque <strong>Solsoft Computación</strong> se
              esfuerza por proporcionar información precisa sobre esos precios,
              pueden ocurrir errores.
            </p>
            <p>
              En el caso de que un artículo figure en las listas del Sitio a un
              precio incorrecto debido a un error,{" "}
              <strong>Solsoft Computación</strong> está en pleno derecho, de
              corregir la orden facturando el precio vigente al momento del
              armado del pedido en la tienda o de anular el pedido reintegrando
              al Usuario el dinero abonado.
            </p>
            <p>
              Se notificará oportunamente del error al Usuario y la posibilidad
              de cancelar o modificar la compra del producto facturado u
              ofrecido de forma incorrecta.
            </p>
          </div>
          <div>
            <h3>Promociones</h3>
            <p>
              Las promociones que se ofrezcan en la página no son necesariamente
              las mismas que ofrecen en otros canales de venta utilizados por
              <strong>Solsoft Computación</strong>. Entre ellos: Sitios Públicos
              de E-Comerce, mailing, venta telefónica, catálogos, redes
              sociales, entre otros.
            </p>
            <p>
              En los casos que la página contenga promociones que consistan en
              la entrega gratuita o rebajada de un producto por la compra de
              otro, entonces el despacho del bien que se entregue gratuitamente
              o a precio rebajado, se hará en el mismo lugar en el cual se
              despacha el producto comprado.
            </p>
            <p>
              No se podrá participar en estas promociones sin adquirir
              conjuntamente todos los productos comprendidos en ellas. Salvo
              indicación en contrario o aprobación por parte de{" "}
              <strong>Solsoft Computación</strong> las promociones no son
              acumulativas unas con otras.
            </p>
          </div>
          <div>
            <h3>Descripciones e Imágenes de los Productos.</h3>
            <p>
              En <strong>Solsoft Computación</strong> buscamos ser lo más
              preciso posible en la descripción de los artículos o productos
              ofrecidos. Sin embargo, es posible que las descripciones de los
              productos u otros contenidos de este tipo no sean exactas o
              contengan errores.
            </p>
            <p>
              En caso de cancelación del pedido una vez recibido el producto el
              Usuario fundándose en inexactitudes en la descripción o imágenes
              del producto, el Usuario deberá reintegrar el mismo en perfecto
              estado, conjuntamente con todo su empaque original y todos sus
              accesorios.
            </p>
            <p>
              La información sobre características de los productos, a la que se
              accede a través de este Sitio se obtiene de afirmaciones hechas
              por el fabricante de cada producto. Por favor tenga en cuenta que,
              en ocasiones los fabricantes pueden alterar sus empaques y
              etiquetas, de manera que el verdadero embalaje del producto y
              materiales adjuntos pueden contener información diferente de la
              que se muestra en el Sitio.
            </p>
          </div>
          <div>
            <h3>Publicidad</h3>
            <p>
              <strong>Solsoft Computación</strong> se reserva el derecho de
              incluir en la página anuncios publicitarios, que se identificarán
              a los efectos de separarlos de la descripción y precio de los
              artículos ofrecidos.
            </p>
            <p>
              Esas inclusiones publicitarias se dirigen únicamente a llamar la
              atención de los Usuarios sobre determinadas ofertas y no
              reemplazan las descripciones de los productos hechas en la página
              correspondiente al artículo.
            </p>
          </div>
          <div>
            <h3>Límites de cantidades y ventas a distribuidores</h3>
            <p>
              <strong>Solsoft Computación</strong> se reserva el derecho de
              limitar la cantidad de artículos comprados por persona, por hogar
              o por pedido. Estas restricciones pueden ser aplicables a los
              pedidos realizados por la misma cuenta o la misma tarjeta de
              crédito y también a los pedidos que utilizan la misma dirección de
              facturación o de entrega.
            </p>
          </div>
          <div>
            <h3>Derechos de autor y marcas registradas</h3>
            <p>
              A menos que se indique lo contrario, los derechos de autor, marcas
              comerciales, presentación comercial u otros derechos de propiedad
              intelectual sobre todo y cualquier contenido de la página son de
              propiedad, controlados o licenciados, de{" "}
              <strong>Solsoft Computación</strong> y están protegidos por las
              leyes argentinas y tratados internacionales sobre propiedad
              intelectual.
            </p>
            <p>
              La compilación de todo el contenido de esta página es propiedad
              exclusiva de <strong>Solsoft Computación</strong> y también está
              protegida por las leyes argentinas y tratados internacionales
              sobre propiedad intelectual.
            </p>
            <p>
              El acceso a esta página no confiere ninguna licencia respecto de
              cualquier derecho de propiedad intelectual de{" "}
              <strong>Solsoft Computación</strong> o cualquier tercero. Los
              nombres y logotipos de <strong>Solsoft Computación</strong> y
              todos los productos relacionados y nombres de servicio, marcas de
              diseño y eslóganes son las marcas comerciales o marcas de servicio
              de <strong>Solsoft Computación</strong>. Todas las demás marcas
              son propiedad de sus respectivos registrantes.
            </p>
            <p>
              No se concede ninguna licencia de marca registrada o marca de
              servicio en relación con los materiales contenidos en esta página.
              El acceso no autoriza a nadie a utilizar cualquier nombre,
              logotipo o marca de cualquier manera.
            </p>
          </div>
          <div>
            <h3>Prohibiciones y responsabilidades del Usuario</h3>
            <p>
              Está terminantemente prohibido explotar de cualquier forma las
              informaciones adquiridas por medio de la página. No podrá
              reproducir los textos o imágenes de los anuncios para otros fines
              que los de su propio recordatorio personal.
            </p>
            <p>
              El Usuario se compromete a tomar a su cargo cualquier
              responsabilidad contractual o extracontractual que derive de actos
              como Usuario de la página y acepta mantener indemne a{" "}
              <strong>Solsoft Computación</strong>, respecto de y contra
              cualquier reclamo por parte de terceros, derivado o relacionado
              con el uso inadecuado de la página o por la violación de los
              presentes Términos y Condiciones de Uso y otras modificaciones, o
              que surja de dicho uso o a causa de algún comentario publicado por
              el Usuario en la página.
            </p>
          </div>
          <div>
            <h3>
              Leyes Aplicables a los Presentes Términos y Condiciones de Uso.
            </h3>
            <p>
              Este contrato será gobernado por y se interpretará según la
              legislación vigente en la República Argentina. Cualquier conflicto
              relacionado con este contrato o con el uso que el Usuario haga de
              esta página será resuelto por los tribunales ordinarios
              competentes según la legislación vigente y aplicable a la relación
              de consumo existente entre las partes.
            </p>
            <p>
              En caso de que dicha legislación no defina una competencia
              específica, será competente la justicia nacional ordinaria con
              asiento en la Localidad de Caseros, Provincia de Buenos aires,
              siendo aplicable esta disposición, aunque el Usuario estuviera
              realmente domiciliado fuera de los límites de la Localidad citada
              o de la República Argentina, por entenderse que este lugar ha sido
              el lugar de celebración del presente contrato y toda acción legal
              que sugiera del incumplimiento de parte o el todo del mismo será
              dirimido en la Jurisdicción de los Tribunales de la localidad de
              San Martín, Provincia de Buenos Aires.
            </p>
            <p>
              Salvo que lo contrario haya sido acordado previamente y por
              escrito firmado entre el Usuario y{" "}
              <strong>Solsoft Computación</strong>, todas las notificaciones que
              se hagan a los usuarios en relación con las presentes Condiciones
              de Uso se publicarán en el Sitio y tendrán efecto desde la fecha
              de su publicación.
            </p>
            <p>
              La mercadería viaja por cuenta y orden del comprador, y será
              enviada de acuerdo con las instrucciones de este. De no mediar
              instrucciones, <strong>Solsoft Computación</strong> determinara el
              medio y oportunidad del transporte. En todos los casos el flete
              corre por cuenta y orden del comprador. Eventuales daños
              emergentes del transporte no serán responsabilidad de{" "}
              <strong>Solsoft Computación</strong>. Cualquier reclamo en este
              sentido debe ser dirigido por el comprador a la empresa de
              transporte. <strong>Solsoft Computación</strong> hará todo
              esfuerzo que permita un despacho rápido y seguro, pero no asume
              responsabilidad alguna por perdida o demora del transporte.
            </p>
          </div>
          <div>
            <h3>Aceptación de los Términos y Condiciones y Uso</h3>
            <p>
              Estas Condiciones de Uso implican un contrato que entrará en vigor
              tan pronto el Usuario acepte las Condiciones de Uso o use los
              servicios de la página y permanecerán vigentes hasta que el
              presente contrato sea cancelado sea por el Usuario o por{" "}
              <strong>Solsoft Computación</strong>.
            </p>
          </div>
          <button onClick={onAccept}>Accept Terms</button>
        </div>
      </div>
    </div>
  );
};
