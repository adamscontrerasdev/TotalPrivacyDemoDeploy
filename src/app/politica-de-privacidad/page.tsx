import React from "react";

const PoliticaDePrivacidad: React.FC = () => {
  const normalizeText = "text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-xl";
  const normalizeTitles =
    "text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-white font-extrabold";
  const normalizeSubtitles = "text-xl md:text-2xl text-white font-extrabold";

  return (
    <div
      className={`p-20 text-white ${normalizeText}  flex flex-col items-center justify-center b`}
    >
      <div className="flex flex-col items-start justify-start w-3/4 lg:w-1/2">
        <h1 className={`${normalizeTitles}`}>Política de Privacidad</h1>
        <p>
          Esta es la política de privacidad de nuestra aplicación. Nos tomamos
          muy en serio la privacidad de nuestros usuarios y nos comprometemos a
          protegerla.
        </p>
        <br />
        <h2 className={normalizeSubtitles}>Recolección de Información</h2>
        <p>
          No recopilamos información personal de ningún tipo. No solicitamos su
          nombre, dirección de correo electrónico ni ninguna otra información.
        </p>
        <br />
        <h2 className={normalizeSubtitles}>Uso de la Información</h2>
        <p>
          Dado que no recopilamos ninguna información personal, no utilizamos
          ninguna información para proporcionar, mantener o mejorar nuestros
          servicios.
        </p>
        <br />
        <h2 className={normalizeSubtitles}>Compartir Información</h2>
        <p>
          No compartimos ninguna información personal con terceros, ya que no
          recopilamos ninguna información.
        </p>
        <br />
        <h2 className={normalizeSubtitles}>Seguridad</h2>
        <p>
          No implementamos medidas de seguridad para proteger su información
          personal, ya que no recopilamos ninguna información.
        </p>
        <br />
        <h2 className={normalizeSubtitles}>Contacto</h2>
        <p>
          Si tiene alguna pregunta sobre nuestra política de privacidad, no dude
          en contactarnos.
        </p>
      </div>
    </div>
  );
};

export default PoliticaDePrivacidad;
