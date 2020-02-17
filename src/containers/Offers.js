import React, { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Product from "../components/Product";

// https://leboncoin-api.herokuapp.com/api/offer/with-count?skip=0&limit=25
function Offers() {
  const { p } = useParams();
  console.log(">>> p >>>>> ", p);
  const page = parseInt(p);

  const API = "https://leboncoin-api.herokuapp.com/api/offer/with-count";
  const LIMIT = 15;

  const [isLoading, setIsLoading] = useState(true);
  const [offers, setOffers] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl =
          API +
          "?skip=" +
          (page > 0 ? (page - 1) * LIMIT : 0) +
          "&limit=" +
          LIMIT;
        const response = await axios.get(apiUrl);
        console.log(">>>>>>> api", apiUrl);
        setCount(response.data.count);
        setOffers(response.data.offers);
        setIsLoading(false);
      } catch (e) {
        console.error(">>>>>>> Error fetching data from api");
      }
    };
    fetchData();
  }, [page]);

  let pager = [];
  for (let counter = 0; counter * LIMIT < count; counter * LIMIT) {
    counter++;
    pager.push(
      <li key={counter}>
        <Link to={`/${counter}`}>{counter}</Link>
      </li>
    );
  }

  console.log(">>> count >>>>> ", count);

  return (
    <>
      {isLoading ? (
        <p>...Loading</p>
      ) : (
        <>
          <div className="ellipse-parent">
            <div className="ellipse"></div>
          </div>
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
            <div>
              <ul className="paging">{pager}</ul>
            </div>
          </main>
        </>
      )}
    </>
  );
}

export default Offers;
