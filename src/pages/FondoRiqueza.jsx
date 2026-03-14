import React from "react";

export default function FondoRiqueza() {
  const plans = [
    {
      img: "/plan1.png",
      title: "ASM y Pocket Casts Wealth Growth Fund",
      days: "16 day",
      profit: "1.3%",
    },
    {
      img: "/plan2.png",
      title: "ASM y Public Storage Wealth Growth Fund",
      days: "127 day",
      profit: "14.1%",
    },
    {
      img: "/plan3.png",
      title: "ASM y FloatMe Wealth Growth Fund",
      days: "229 day",
      profit: "16.8%",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <div className="bg-white text-center py-3 shadow">
        <h1 className="text-lg font-medium">Fondo de riqueza</h1>
      </div>

      {/* TOP BANNER */}
      <div
        className="h-[40vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('/fondo.png')",
        }}
      >
        
      </div>

      {/* AMOUNT */}
      <div className="px-4 py-3">
        <p className="text-sm text-gray-500">Amount</p>
        <p className="text-xl font-bold text-orange-500">0</p>
      </div>

      {/* STORAGE PERIOD */}
      <div className="bg-white mx-3 rounded-xl p-4 shadow">

        <h2 className="font-semibold mb-4">Storage period</h2>

        <div className="space-y-4">

          {plans.map((p, i) => (
            <div
              key={i}
              className="border rounded-lg p-3 flex items-center gap-3"
            >

              <img
                src={p.img}
                className="w-24 h-16 rounded-md object-cover"
              />

              <div className="flex-1">

                <p className="text-sm font-semibold">
                  {p.title}
                </p>

                <p className="text-sm mt-1">
                  {p.days}
                </p>

                <p className="text-sm text-gray-500">
                  Profit {p.profit}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* DESCRIPTION */}
      <div className="px-4 mt-4 pb-10 text-sm text-gray-700">

        <h3 className="font-semibold mb-2">
          Descripción del Programa de Inversión de ASM
        </h3>

        <p className="mb-2 font-semibold">
          1. Resumen del Proyecto:
        </p>

        <p>
          El Programa de Inversión de ASM es un programa de inversión financiera
          lanzado en colaboración con varias gestoras de fondos líderes. Este
          programa tiene como objetivo brindar a los empleados de ASM más
          oportunidades de crecimiento financiero y estabilidad.
        </p>

        <p className="my-2 font-semibold">
        2. Tipos de Rentabilidad:
        </p>
        <p>
        Cada producto de inversión ofrece diferentes rentabilidades según el plazo y la tasa de interés diaria. Los inversores pueden elegir el producto que mejor se adapte a sus necesidades.


        </p>
        <p className="my-2 font-semibold">
        3. Método de Inversión:
        </p>

        <p>
        El producto de inversión tiene un plazo fijo y devenga intereses diariamente. Al vencimiento, el capital y las rentabilidades se depositarán en la cuenta de saldo de ASM del inversor.

        </p>

        <p className="my-2 font-semibold">
        
4. Método de Compra:
        </p>

        <p>
        Los inversores pueden adquirir productos de inversión utilizando su saldo de ASM o mediante recarga. Este programa se lanza periódicamente y hasta agotar existencias. Se recomienda a los inversores estar atentos a los anuncios del programa para aprovechar las oportunidades de inversión.

        </p>

        <p className="my-2 font-semibold">
        
        5. Ventajas y Características:
        </p>
        <p>
        - Las alianzas con múltiples gestoras de fondos garantizan la credibilidad y seguridad del programa. <br />
- Disponemos de una amplia gama de productos de inversión para satisfacer las necesidades de diversos inversores. <br />
- Los cálculos diarios de intereses y las condiciones de inversión flexibles permiten a los inversores gestionar sus fondos según sus circunstancias individuales.
        </p>

        <p className="my-2 font-semibold">
        
        6. Servicio al Cliente:
        </p>

        <p>
        Si tiene alguna pregunta relacionada con inversiones o necesita ayuda, póngase en contacto con el equipo de Servicio al Cliente de ASM. Su compromiso es brindarle apoyo y orientación.<br />
        Esperamos que la información anterior proporcione a los empleados de ASM información de inversión clara y concisa, lo que les permitirá tomar decisiones de inversión más informadas y alcanzar sus objetivos de crecimiento financiero.
        </p>
      </div>

    </div>
  );
}
