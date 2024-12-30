"use client";
import React, { useState } from "react";
import style from "./Price.module.css";
import Button from "../BDCompra/Button";

export default function Price() {
  const [activeButtonId, setActiveButtonId] = useState<string | null>(null);
  const isActive = true;

  return (
    <div className={style.fatherOfFather}>
      <div className={style.priceCont}>
        <div className={style.price1Cont}>
          <div className={style.priceTitle}>
            <h2 className={style.title}>
              <span className={style.spanTitle}>
                ACCEDE&nbsp;AL&nbsp;CURSO&nbsp;PRIVACIDAD&nbsp;TOTAL
              </span>
            </h2>
          </div>
          <h2 className={style.subTitle1}>
            La privacidad es tu futuro.
            <br />
            Sé Ingobernable
          </h2>
          <p className={style.textTitle1}>
            La privacidad no es una opción, y no debe ser el precio que paguemos
            por usar servicios en línea.
          </p>
        </div>
      </div>

      <section className={style.section}>
        <div className={style.sectionCont}>
          <div className={style.sectionCont2}>
            <div className={style.sectionCont3}>
              <div className={style.sectionContDef}>
                <div className={style.cont1}>
                  <div className={style.contPrice}>
                    {/* <div className={style.price1}> &nbsp;€360 &nbsp;</div> */}
                    <div className={style.price2}>€390</div>
                  </div>
                </div>

                <div className={style.cont2}>
                  <div className={style.cont2Cont}>
                    <div className={style.cont2uno}>
                      <div className={style.cont2dos}>
                        <div className={style.cont2tres}>
                          <div className={style.contenidoCont1}>
                            <div className={style.titlecont}>
                              <div className={style.titleImgCont}>
                                <div className={style.titleImage}>
                                  <img
                                    alt=""
                                    className={style.maskIcon}
                                    src="\White_Icon.svg"
                                  />
                                </div>
                              </div>
                              <div className={style.contTitle}>
                                <div className={style.contTitleInt}>
                                  <h3 className={style.titleDif}>
                                    Curso Privacidad Total
                                  </h3>
                                </div>
                              </div>
                              <div className={style.subtitleCont}>
                                <div className={style.subtitleContInt}>
                                  <p className={style.subtitle}>
                                    Accede al curso durante 6 meses y garantiza
                                    tu libertad.
                                    <br />
                                    Reclama el derecho a tu privacidad con la
                                    formación paso a paso.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className={style.contenidoCont2}>
                            <div className={style.imgCont1}>
                              <img
                                alt=""
                                src="https://www.spacetest.com/wp-content/uploads/2021/07/checkmark-icon-orange.png"
                                className={style.miniImg1}
                              />
                              <div className={style.charCont1}>
                                <div className={style.charTitle}>
                                  Privacidad: de novato a profesional
                                  {/* <span className={style.charPrice}>($1,500 Value)</span> */}
                                </div>
                              </div>
                            </div>

                            <div className={style.imgCont2}>
                              <img
                                alt=""
                                src="https://www.spacetest.com/wp-content/uploads/2021/07/checkmark-icon-orange.png"
                                className={style.miniImg1}
                              />
                              <div className={style.charCont2}>
                                <div className={style.charTitle2}>
                                  Estrategias únicas
                                </div>
                              </div>
                            </div>

                            <div className={style.imgCont3}>
                              <img
                                alt=""
                                src="https://www.spacetest.com/wp-content/uploads/2021/07/checkmark-icon-orange.png"
                                className={style.miniImg1}
                              />
                              <div className={style.charCont3}>
                                <div className={style.charTitle3}>
                                  Sin conocimiento previo requerido
                                  {/* <span className={style.charPrice3}>($1,500 Value)</span> */}
                                </div>
                              </div>
                            </div>

                            <div className={style.imgCont4}>
                              <img
                                alt=""
                                src="https://www.spacetest.com/wp-content/uploads/2021/07/checkmark-icon-orange.png"
                                className={style.miniImg1}
                              />
                              <div className={style.charCont4}>
                                <div className={style.charTitle4}>
                                  Clases en directo
                                </div>
                              </div>
                            </div>

                            <div className={style.imgCont5}>
                              <img
                                alt=""
                                src="https://www.spacetest.com/wp-content/uploads/2021/07/checkmark-icon-orange.png"
                                className={style.miniImg1}
                              />
                              <div className={style.charCont5}>
                                <div className={style.charTitle5}>
                                  Clases prácticas paso a paso
                                  {/* <span className={style.charPrice5}>($1,500 Value)</span> */}
                                </div>
                              </div>
                            </div>

                            <div className={style.imgCont6}>
                              <img
                                alt=""
                                src="https://www.spacetest.com/wp-content/uploads/2021/07/checkmark-icon-orange.png"
                                className={style.miniImg1}
                              />
                              <div className={style.charCont6}>
                                <div className={style.charTitle6}>
                                  Para todas las edades
                                </div>
                              </div>
                            </div>

                            <div className={style.imgCont7}>
                              <img
                                alt=""
                                src="https://www.spacetest.com/wp-content/uploads/2021/07/checkmark-icon-orange.png"
                                className={style.miniImg1}
                              />
                              <div className={style.charCont7}>
                                <div className={style.charTitle7}>
                                  Recursos y herramientas exclusivas
                                </div>
                              </div>
                            </div>

                            <div className={style.imgCont8}>
                              <img
                                alt=""
                                src="https://www.spacetest.com/wp-content/uploads/2021/07/checkmark-icon-orange.png"
                                className={style.miniImg1}
                              />
                              <div className={style.charCont8}>
                                <div className={style.charTitle8}>
                                  Formación guiada y especializada{" "}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* <a
                            href="https://app.educate.io/register?plan=educateEvent"
                            target="_blank"
                            className={style.buttom}
                          >
                            {" "}
                            COMPRAR CURSO
                          </a> */}
                          <div className={style.containerOfButton}>
                            <Button
                              buttonId="3"
                              activeButtonId={activeButtonId}
                              setActiveButtonId={setActiveButtonId}
                            />{" "}
                            {/* <CompressedPairButtons></CompressedPairButtons> */}
                          </div>

                          {isActive && (
                            <p className={style.textDownButtom}>
                              <em className={style.textDow}>
                                Serás redirigido a la página de pago
                              </em>
                            </p>
                          )}

                          {!isActive && (
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <h2
                                style={{
                                  background: "#333",
                                  padding: ".8em",
                                  borderRadius: "10px",
                                  cursor: "not-allowed",
                                  fontWeight: "300",
                                }}
                              >
                                Plazas agotadas
                              </h2>
                            </div>
                          )}
                          <div className={style.metodsPayCont}>
                            <img
                              src="https://static.vecteezy.com/system/resources/previews/020/975/576/original/visa-logo-visa-icon-transparent-free-png.png"
                              loading="lazy"
                              alt=""
                              className={style.imgPay4}
                            />

                            <img
                              src="https://cdn-icons-png.freepik.com/512/196/196539.png"
                              loading="lazy"
                              alt=""
                              className={style.imgPay1}
                            />

                            <img
                              src="https://www.ebcc.eu/wp-content/uploads/2022/02/MasterCard.png"
                              loading="lazy"
                              alt=""
                              className={style.imgPay2}
                            />

                            <img
                              src="https://images.vexels.com/content/144838/preview/bitcoin-logo-f6c2df.png"
                              loading="lazy"
                              alt=""
                              className={style.imgPay2}
                            />
                          </div>
                        </div>

                        <div className={style.OffCont}>
                          <div className={style.offChar}>
                            {isActive ? (
                              <>
                                <h4>PLAZAS LIMITADAS</h4>
                                <span className={style.off}></span>
                              </>
                            ) : (
                              <>
                                <h4>PLAZAS AGOTADAS</h4>
                                <span className={style.off}></span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
