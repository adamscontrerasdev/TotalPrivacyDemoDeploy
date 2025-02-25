import React from "react";

const TerminosYcondiciones: React.FC = () => {
  const normalizeText = "text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-xl";
  const normalizeTitles =
    "text-xl md:text-3xl  2xl:text-4xl text-white font-extrabold";
  const normalizeSubtitles = "text-xl md:text-2xl text-white font-extrabold";

  return (
    <div
      className={`py-20 px-10  text-white ${normalizeText}  flex flex-col items-center justify-center b`}
    >
      <div className="flex flex-col items-start justify-start w-[90%] md:w-3/4 lg:w-1/2">
        <h1 className={`${normalizeTitles}`}>Términos y Condiciones</h1>
        <p>
          Estos términos y condiciones rigen el uso de nuestra plataforma de
          venta de cursos en línea. Al acceder o utilizar nuestros servicios,
          usted acepta cumplir con estos términos.
        </p>
        <br />
        <h2 className={normalizeSubtitles}>Compra de Cursos</h2>
        <p>
          Al comprar un curso, usted obtiene una licencia limitada, no exclusiva
          e intransferible para acceder y ver el contenido del curso para su uso
          personal y no comercial.
        </p>
        <br />
        <h2 className={normalizeSubtitles}>Pagos y Reembolsos</h2>
        <p>
          Todos los pagos se procesan de manera segura. No ofrecemos reembolsos
          una vez que se ha accedido al contenido del curso, excepto en casos
          especiales que serán evaluados individualmente.
        </p>
        <br />
        <h2 className={normalizeSubtitles}>Propiedad Intelectual</h2>
        <p>
          Todo el contenido de los cursos, incluyendo videos, materiales y
          recursos, está protegido por derechos de autor y no puede ser
          reproducido, distribuido ni utilizado sin nuestro permiso expreso por
          escrito.
        </p>
        <br />
        <h2 className={normalizeSubtitles}>Modificaciones</h2>
        <p>
          Nos reservamos el derecho de modificar estos términos y condiciones en
          cualquier momento. Las modificaciones serán efectivas inmediatamente
          después de su publicación en nuestro sitio web.
        </p>
        <br />
        <h2 className={normalizeSubtitles}>Contacto</h2>
        <p>
          Si tiene alguna pregunta sobre estos términos y condiciones, no dude
          en contactarnos.
        </p>
      </div>
    </div>
  );
};

export default TerminosYcondiciones;
