import React from "react";

import Product from "../components/Product";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Offers({ offers }) {
  console.log("Offers", offers);
  return (
    <>
      <div className="ellipse"></div>
      <main className="container">
        <div className="search-bar">
          <form action="">
            <span>
              <FontAwesomeIcon className="icon" icon="search" />
              <input
                placeholder="Que recherchez-vous?"
                type="text"
                name="query"
                defaultValue=""
              />
            </span>
            <input type="submit" className="btn" value="Rechercher" />
          </form>
        </div>
        <ul className="products-list">
          {offers.map((product, _) => {
            return <Product key={product._id} product={product} />;
          })}
        </ul>
      </main>
    </>
  );
}

export default Offers;
