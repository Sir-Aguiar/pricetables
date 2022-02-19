import React, { useEffect, useState } from "react";

const PriceCard = ({ name, priceOne, priceTwo, special, facilities }) => {
  const [facil, setFacil] = useState([]);
  let counter = [];
  useEffect(() => {
    for (let index = 0; index < facilities; index++) {
      counter.push(index);
    }
    setFacil(counter)
  }, []);
  return (
    <div className={`price-card ${special ? "middle" : ""}`}>
      <section className="card-header bg-basic">
        <h1>
          {name} R${priceOne}
          <span className="text-lg">
            ,{priceTwo}
            <span className="font-semibold text-slate-600 opacity-60">
              /mês
            </span>
          </span>
        </h1>
        <p className="text-sm font-semibold opacity-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="h-smline my-3 bg-slate-500"></div>
      </section>
      <section className="card-content">
        <ul className="card-list ">
          {facil.map((element) => (
            <li
              key={(element * Math.random()) / Math.random() ** Math.random()}
            >
              <img src="https://jeanaraga.github.io/Tabelas-de-Precos/assets/img/check.svg" />
              <p>Lorem ipsum dolor sit amet. </p>
            </li>
          ))}
        </ul>
      </section>
      <div className="px-3 my-3">
        <button className="transition-all border-sky-600 hover:border-sky-700 hover:bg-slate-200 buy-button relative bottom-0">Assinar</button>
      </div>
    </div>
  );
};
export default PriceCard;
