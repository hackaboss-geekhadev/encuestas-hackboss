"use client";

import { useEffect } from "react";
import { ENCUESTAS } from "@/database/encuestas";
import EncuestasArticle from "@/components/EncuestasArticle";
import { useStoreEncuestaCount } from "@/stores/storeEncuestas";

const EncuestasList = ({ setEncuestas }) => {
  const { setCountEncuestas } = useStoreEncuestaCount();
  useEffect(() => {
    setCountEncuestas(ENCUESTAS.length);
  }, []);

  return (
    <section className="bg-red grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {ENCUESTAS.map((encuesta) => (
        <EncuestasArticle key={encuesta.id} encuesta={encuesta} />
      ))}
    </section>
  );
};

export default EncuestasList;
