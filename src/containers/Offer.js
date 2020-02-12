import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// https://leboncoin-api.herokuapp.com/api/offer/5dcc803be3e5c000154b03f3

function Offer(props) {
  const { id } = useParams();
  const API = "https://leboncoin-api.herokuapp.com/api/offer/" + id;
  const [offer, setOffer] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // console.log("mon api", API);

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
        <div>
          <h1>Component Offer {id}</h1>
          <div>{offer.title}</div>
        </div>
      )}
    </>
  );
}

export default Offer;
