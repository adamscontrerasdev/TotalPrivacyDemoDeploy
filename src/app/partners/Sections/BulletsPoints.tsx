import PersonalH1 from "./../components/common/PersonalH1";
import React from "react";

const BulletPoint = [
  {
    id: 3,
    text: "Crearás tu negocio digital y saldrás de la Matrix",
    img: "img/Partners/BulletsPoints/BulletPointsAfiliados 3.png",
  },
  {
    id: 1,
    text: "Aprenderás edición de video profesional",
    img: "img/Partners/BulletsPoints/BulletPointsAfiliados 1.png",
  },
  {
    id: 2,
    text: "Domina el algoritmo, crece como afiliado en RRSS",
    img: "img/Partners/BulletsPoints/BulletPointsAfiliados 2.png",
  },

  {
    id: 4,
    text: "Expande la privacidad al mundo entero",
    img: "img/Partners/BulletsPoints/BulletPointsAfiliados 4.png",
  },
  {
    id: 5,
    text: "Cosecha éxitos y accede al club premium",
    img: "img/Partners/BulletsPoints/BulletPointsAfiliados 5.png",
  },
  {
    id: 6,
    text: "Haz de la privacidad un ideal incensurable",
    img: "img/Partners/BulletsPoints/BulletPointsAfiliados 6.png",
  },
];

interface BulletPointProps {
  bulletPoint: {
    id: number;
    text: string;
    img: string;
  };
}
const PoitCard: React.FC<BulletPointProps> = ({ bulletPoint }) => {
  const WordFocusMap = [
    "edición",
    "profesional",
    "Domina el algoritmo",
    "RRSS",
    "tu negocio",
    "saldrás de la Matrix",
    "privacidad",
    "mundo entero",
    "Cosecha éxitos",
    "Club premium",
    "Incensurable",
  ];

  const highlightWords = (text: string, focusWords: string[]) => {
    const regex = new RegExp(`(${focusWords.join("|")})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) => {
      const match = focusWords.find(
        (w) => w.toLowerCase() === part.toLowerCase(),
      );
      if (match) {
        return (
          <strong key={index} className="font-bold text-white">
            {part}
          </strong>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center text-center rounded-2xl max-w-56 xl:max-w-60 gap-3">
      <div className="">
        <img
          src={bulletPoint.img}
          alt=""
          style={{
            boxShadow: "0px 0px 50px #fff9",
            borderRadius: "25px",
          }}
        />
      </div>
      <h2 className="text-neutral-300 textshadow text-sm md:text-base lg:text-lg">
        {highlightWords(bulletPoint.text, WordFocusMap)}
      </h2>
    </div>
  );
};

const BulletsPoints = () => {
  return (
    <div
      className="w-full  bg-black flex justify-center items-center flex-col md:px-20 gap-4 p-5 min-h-screen"
      id="BulletsPoints"
    >
      <PersonalH1 value="Desata tu Potencial" bold center />
      <p className="text-sm md:text-base xl:text-xl text-gray-300 max-w-3xl text-center ">
        Fórmate como representante de mi marca, impacta al mundo, lleva la
        privacidad a cada rincón del globo conmigo y sal de la Matrix. Sé
        Ingobernable
      </p>
      <div className="w-full max-w-2xl xl:max-w-7xl 2xl:max-w-[90rem] grid grid-cols-2 md:grid-cols-3 gap-5 place-items-center mx-auto  content-start items-start pt-5 ">
        {BulletPoint.map((bulletPoint, index) => (
          <PoitCard bulletPoint={bulletPoint} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BulletsPoints;
