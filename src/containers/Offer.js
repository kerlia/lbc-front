import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import nl2br from "react-nl2br";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// https://leboncoin-api.herokuapp.com/api/offer/5dcc803be3e5c000154b03f3

function Offer() {
  const { id } = useParams();
  const API = "https://leboncoin-api.herokuapp.com/api/offer/" + id;
  const [offer, setOffer] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(API);
      setOffer(response.data);
      setIsLoading(false);
    } catch (e) {
      console.error("Error fetching data from api");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>...Loading</p>
      ) : (
        <main className="container">
          <div className="content">
            <div className="product-page">
              <div className="card">
                <div className="product-ima">
                  {offer.pictures[0] ? (
                    <img src={offer.pictures[0]} alt="no pic" />
                  ) : (
                    <img
                      src="https://advancepetproduct.com/wp-content/uploads/2019/04/no-image.png"
                      alt={offer.title}
                    />
                  )}
                </div>
                <div className="product-infos">
                  <div>
                    <h2>{offer.title}</h2>
                    {offer.price > 0 && <span>{offer.price} €</span>}
                  </div>
                  <div>
                    <Moment format="DD/MM/YYYY à h:m:s">{offer.created}</Moment>
                  </div>
                </div>
              </div>
              <h4>Description</h4>
              <p>{nl2br(offer.description)}</p>
            </div>
            <aside>
              <h4>{offer.creator.account.username}</h4>
              <span>17 annonces en ligne</span>
              <button className="btn">
                <FontAwesomeIcon className="icon" icon="cart-plus" />
                Acheter
              </button>
            </aside>
          </div>
        </main>
      )}
    </>
  );
}

export default Offer;
