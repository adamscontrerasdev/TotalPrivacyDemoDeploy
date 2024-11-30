import React from "react";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold">Página no encontrada</h1>
      <p className="mt-4 text-lg">
        Lo sentimos, la página que buscas no existe.
      </p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800"
      >
        Volver al inicio
      </a>
    </div>
  );
}
