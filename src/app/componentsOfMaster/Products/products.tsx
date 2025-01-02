import React from "react";

import style from "./products.module.css";

export default function products() {
  return (
    <div className={style.productsCont}>
      <h4 className={style.title}>ESTO ES LO QUE OBTENDRÁS</h4>
      <h2 className={style.subTitle}>
        Únete al Master Privacidad Total y consigue el acceso a:
      </h2>

      <div className={style.pCont}>
        <div className={style.p1}>
          <div className={style.p2}>
            <div className={style.p3}>
              <div>
                <div className={style.p4}>
                  <div className={style.p5}>
                    <h3 className={style.p6}>Clases Prácticas Grabadas </h3>
                  </div>
                  <p className={style.p9}>
                    Accede a clases prácticas paso a paso que te guiarán a tu
                    ritmo en la implementación de tácticas y uso de herramientas
                    de privacidad.
                    <br />
                    <br />
                    Aprenderás a ejecutar lo aprendido en la parte teórica sin
                    complicaciones con video hechos para hacer fácil lo que te
                    parece complicado, sin fricciones, a tu ritmo y directos al
                    grano.
                  </p>
                  <div className={style.p10}>
                    <a href="#" className={style.p11}>
                      <span className={style.p12}></span> Program Curriculum
                    </a>
                  </div>
                </div>
              </div>

              <img
                className={style.p13}
                src="/img/Clases grabadas.webp"
                alt="imagen"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={style.pCont}>
        <div className={style.p1}>
          <div className={style.p2}>
            <div className={style.p3}>
              <div>
                <div className={style.p4}>
                  <div className={style.p5}>
                    <h3 className={style.p6}>
                      Clases en Directo siempre a tu disposición
                    </h3>
                  </div>
                  <p className={style.p9}>
                    Serás instruido con clases en directo en cada fase para que
                    puedas entender bien lo que luego ejecutarás de forma
                    práctica en los videos preparados.
                    <br />
                    <br />
                    Las clases en directo quedarán grabadas y siempre a tu
                    disposición así que no te agobies si no puedes asistir.
                  </p>
                  <div className={style.p10}></div>
                </div>
              </div>
              <img
                className={style.p13}
                src="img/clases en vivo.webp"
                alt="imagen"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={style.pCont}>
        <div className={style.p1}>
          <div className={style.p2}>
            <div className={style.p3}>
              <div>
                <div className={style.p4}>
                  <div className={style.p5}>
                    <h3 className={style.p6}>Resolución de Dudas </h3>
                  </div>
                  <p className={style.p9}>
                    En la academia virtual tendrás un apartado donde podrás
                    dejar tus dudas que serán respondidas para que aprendas sin
                    preocupaciones.
                    <br />
                    <br />
                    Los profesores te responderán por escrito y por vídeo en
                    caso de que tu duda necesitase de apoyo visual para
                    garantizar que lo entiendes a la perfección.
                  </p>
                </div>
              </div>

              <img
                className={style.p13}
                src="img/resolucion de dudas.webp"
                alt="imagen"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.pCont}>
        <div className={style.p1}>
          <div className={style.p2}>
            <div className={style.p3}>
              <div>
                <div className={style.p4}>
                  <div className={style.p5}>
                    <h3 className={style.p6}>Guías y esquemas estratégicos</h3>
                  </div>
                  <p className={style.p9}>
                    Obtendrás material gráfico de apoyo siempre a tu disposición
                    para que puedas apoyarte en ellos junto a los videos y
                    clases en directo.
                    <br />
                    <br />
                    Esquemas estratégicos de privacidad que te convertirán en un
                    ostentador del poder de la privacidad total, no habrá
                    problema que no sepas resolver.
                  </p>
                </div>
              </div>

              <img className={style.p13} src="img/esquemas.webp" alt="imagen" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
