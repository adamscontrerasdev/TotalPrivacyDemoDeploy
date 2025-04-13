"use client";
import PersonalH1 from "./../components/common/PersonalH1";
import React, { useState } from "react";

// Array de preguntas y respuestas
const Questions = [
  {
    question: "¿Cómo funciona el programa de Partners?",
    answer: [
      "Al adquirir la suscripción se te dará acceso a una formación de 10 módulos con varias lecciones por módulo. Las lecciones constan de vídeos paso a paso y guías estratégicas de crecimiento en redes y ventas.",

      "Además, accederás a la comunidad de Discord donde podrás hablar con otros afiliados, resolver dudas, acceder a más recursos y asistir a las clases de control en directo con el equipo comercial especializado.",
    ],
  },
  {
    question: "¿Qué aprendo?",
    answer:
      "Aprenderás a crear y gestionar un negocio digital basado en redes sociales, desde edición de vídeo hasta embudos de ventas. Un conocimiento de valor incalculable, sin tener que grabar, aprender una habilidad, ni crear ningún producto.",
  },
  {
    question: "¿Cómo generaré ingresos?",
    answer:
      "Recibirás comisiones de la venta de los productos de totalprivacy.io y tokinprivacy.io del 30%. Si demuestras compromiso y buenos resultados, entrarás al club VIP Ingobernable donde obtendrás formación extra, además de comisiones de hasta el 40%.",
  },
  {
    question: "¿Durante cuánto tiempo tengo acceso?",
    answer:
      "Tanto a los vídeos de formación como al canal de Discord tendrás acceso mientras sigas renovando la suscripción de afiliación. Si dejas de renovar, serás expulsado y tus cuentas en redes suspendidas.",
  },
  {
    question: "¿Debo seguir unas normas?",
    answer:
      "Sí, si no cumples con los estándares de marca, valores y ética de trabajo de la marca de Rave Privacy, serás expulsado y tus cuentas suspendidas.",
  },
];

// Definición de la interfaz para las props
interface QuestionProps {
  qutionNdAnswer: {
    question: string;
    answer: string | string[];
  };
}

// Componente de flecha personalizada con animación
const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 ${
        isOpen ? "rotate-180" : ""
      }`}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
};

// Componente para cada item de pregunta
const QuestionItem: React.FC<QuestionProps> = ({ qutionNdAnswer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-full bg-neutral-700 rounded-2xl transition-all duration-300 flex flex-col items-start justify-center overflow-hidden cursor-pointer mb-4 hover:shadow-md`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-4 w-full">
        <div className="flex items-center justify-between w-full">
          <h2 className="font-medium text-lg text-white">
            {qutionNdAnswer.question}
          </h2>
          <div
            className={`ml-2 transition-all duration-300 p-2 rounded-full text-white`}
          >
            <ChevronIcon isOpen={isOpen} />
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-52 opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          {Array.isArray(qutionNdAnswer.answer) ? (
            <ul className="text-sm md:text-base lg:text-lg font-light text-white flex flex-col gap-2">
              {qutionNdAnswer.answer.map((answer, index) => (
                <li key={index}>{answer}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm md:text-base lg:text-lg font-light ">
              {" "}
              {qutionNdAnswer.answer}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// Componente principal que muestra todas las preguntas
const FAQ = () => {
  return (
    <div className="w-full bg-black flex justify-center items-center flex-col  pb-15 px-5">
      <PersonalH1 value="Preguntas Frecuentes" bold center />
      <p className="text-sm md:text-base xl:text-xl text-gray-300 max-w-3xl text-center mt-4">
        No te quedes con dudas, consulta las preguntas más recurrentes
      </p>
      <div className=" w-full  xl:max-w-[90rem] flex gap-6 justify-center items-start flex-wrap py-6">
        <div
          className="w-full min-h-96  rounded-2xl max-w-3xl p-1 "
          style={{
            background: "linear-gradient(to top, #fff 0%, #000 20%)",
          }}
        >
          <div className="w-full h-full bg-neutral-800 rounded-2xl flex flex-col items-center justify-start gap-4 p-4">
            {Questions.map((question, index) => (
              <QuestionItem qutionNdAnswer={question} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
