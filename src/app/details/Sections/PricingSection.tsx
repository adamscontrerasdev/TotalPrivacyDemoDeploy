import { Product } from "@/app/Elements";
import React from "react";
import { ButtonVSL, ContainerSections, Title } from "../components";
import { iconsMap } from "@/app/Elements/types/MapIcons";
import { Line } from "../components/common/Line";

interface Props {
  product?: Product;
}

// Define el gradiente dentro del DOM una sola vez
const GradientDefs = () => (
  <svg width="0" height="0">
    <defs>
      <linearGradient id="gradient-fill" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="50%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>
    </defs>
  </svg>
);

const UniquePlanCard: React.FC<{ product: Product }> = ({ product }) => {
  const plan = product.pricing[0];
  const primaryColor = "#0083ff";

  return (
    <div
      className="w-full max-w-lg mx-auto rounded-3xl p-5 text-white relative flex flex-col gap-5"
      style={{
        backgroundColor: "#000000",
        border: `1px solid ${primaryColor}`,
        boxShadow: `0 0 30px ${primaryColor}33`,
      }}
    >
      <div className="flex items-center gap-5">
        <div
          className="w-10 aspect-square rounded-xl flex justify-center items-center text-white"
          style={{
            background: `linear-gradient(to bottom right, ${primaryColor}, ${primaryColor})`,
          }}
        >
          <span className="text-2xl font-bold text-white">↯</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight">{plan.title}</h2>
      </div>

      <p className="text-neutral-300">{plan.description}</p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-neutral-300">
        {plan.points.map((point, i) => (
          <li key={i} className="flex items-center gap-2">
            <span style={{ color: primaryColor }}>✔</span>
            {point}
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-center gap-5">
        <p className="text-4xl font-bold text-white">
          {plan.currency}
          {plan.price}
        </p>

        <button
          disabled
          className="rounded-full px-6 py-2 font-semibold text-sm uppercase tracking-wider cursor-pointer"
          style={{
            border: `1px solid ${primaryColor}`,
            color: primaryColor,
          }}
        >
          {plan.textButton}
        </button>

        <div className="flex items-center gap-5 opacity-50">
          {plan.payType.map((payType, i) => (
            <span key={i} style={{ color: primaryColor }}>
              {payType}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const MultiplePlanCard: React.FC<{
  plan: Product["pricing"][0];
  index: number;
}> = ({ plan, index }) => {
  const primaryColor = "#0083ff";
  const isFeatured = index === 1;
  const icons = Array.isArray(plan.icon)
    ? plan.icon.map((key) => iconsMap[key]).filter(Boolean)
    : [];

  return (
    <div className="relative w-full max-w-sm">
      {/* GradientDefs se renderiza una sola vez por tarjeta */}
      <GradientDefs />

      {/* Íconos grandes con degradado */}
      {icons.length > 0 && (
        <div
          className="absolute flex gap-3 left-1/2 -top-5 md:-top-7 
        -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
        >
          {icons.map((IconComponent, i) => (
            <IconComponent
              key={i}
              className="text-8xl md:text-9xl "
              style={{ fill: "url(#gradient-fill)" }}
            />
          ))}
        </div>
      )}

      {/* Card principal */}
      <div
        className={`relative z-10 flex flex-col justify-between p-6 rounded-3xl border text-white transition-all transform hover:scale-105 duration-300 bg-black/50 backdrop-blur-xl  ${
          isFeatured ? "shadow-xl scale-[1.02] border-2" : "shadow-md"
        }`}
        style={{
          borderColor: primaryColor,
          boxShadow: isFeatured
            ? `0 0 30px ${primaryColor}44`
            : `0 0 20px ${primaryColor}22`,
        }}
      >
        <div className="flex flex-col gap-4 flex-grow">
          <h3 className="text-2xl font-bold">{plan.title}</h3>
          <p className="text-sm text-neutral-400">{plan.description}</p>
          <ul className="flex flex-col gap-2 text-sm text-neutral-300">
            {plan.points.map((point, i) => (
              <li key={i} className="flex items-center gap-2 text-left">
                <span style={{ color: primaryColor }}>✔</span> {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-col items-center gap-4">
          <p className="text-4xl font-bold text-white">
            {plan.currency}
            {plan.price}
          </p>

          <ButtonVSL value={plan.textButton} />

          <div className="flex items-center gap-3 text-sm opacity-60 flex-wrap justify-center">
            {plan.payType.map((p, i) => (
              <span key={i} style={{ color: primaryColor }}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const PricingSection: React.FC<Props> = ({ product }) => {
  const hasMultiplePlans = product && product?.pricing.length > 1;

  return (
    <ContainerSections>
      <div className="w-full max-w-7xl flex flex-col gap-32 rounded-2xl justify-center items-center">
        <Title
          text={
            product
              ? hasMultiplePlans
                ? "Planes de acceso"
                : "Plan de acceso"
              : "Planes de acceso"
          }
        />

        <div className="w-full flex flex-wrap justify-center gap-20">
          {product &&
            (hasMultiplePlans ? (
              product.pricing.map((plan, i) => (
                <MultiplePlanCard key={i} plan={plan} index={i} />
              ))
            ) : (
              <UniquePlanCard product={product} />
            ))}
        </div>
      </div>
    </ContainerSections>
  );
};
