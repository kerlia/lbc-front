import React, { useState } from "react";

import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

// https://leboncoin-api.herokuapp.com/api/offer/publish
// {
//   "title": "Playstation 4",
//   "description": "Toute neuve",
//   "price": 175, // l'utilisateur devra entrer une variable de type number
//   "files": selectedFile // le fichier image sélectionné par l'utilisateur
// }

function Publish() {
  const API = "https://leboncoin-api.herokuapp.com/api/offer/publish";

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState([]);

  const handleTitleChange = e => {
    const value = e.target.value;
    setTitle(value);
  };
  const handleDescChange = e => {
    const value = e.target.value;
    setDesc(value);
  };
  const handlePriceChange = e => {
    const value = e.target.value;
    setPrice(value);
  };
  const handleFileChange = e => {
    const value = e.target.files[0];
    setFile(value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(title, desc, price, file);

    if (title === "" || desc === "" || price === "") {
      alert("please fill in all fields");
    } else {
      console.log(" >>>> SUBMIT");
      // const product = {
      //   title: "Playstation 4",
      //   description: "Toute neuve",
      //   price: 175,
      //   files: file
      // };

      const userToken = Cookies.get("lbc-cook");
      console.log(userToken);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("desc", desc);
      formData.append("price", price);
      formData.append("files", file);

      try {
        const response = await axios.post(API, formData, {
          headers: {
            Authorization: "Bearer " + userToken,
            "Content-Type": "multipart/form-data"
          }
        });
        alert(JSON.stringify(response.data));
      } catch (err) {
        if (err.response.status === 500) {
          console.error("An error occurred");
        } else {
          console.error(err.response.data.msg);
        }
      }
    }
  };

  return (
    <div className="publish main-form">
      <h1>Déposer une annonce</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="form-title">Titre de l'annonce</label>
        <input
          placeholder="Votre titre"
          type="text"
          name="title"
          id="form-title"
          defaultValue=""
          onChange={handleTitleChange}
        />

        <label htmlFor="form-desc">Texte de l'annonce</label>
        <textarea
          placeholder="Votre description"
          type="text"
          name="desc"
          id="form-desc"
          defaultValue=""
          onChange={handleDescChange}
        />

        <label htmlFor="form-price">Prix</label>
        <span>
          <input
            placeholder="0"
            type="text"
            name="price"
            id="form-price"
            defaultValue=""
            onChange={handlePriceChange}
          />
          <span>€</span>
        </span>

        <label htmlFor="form-file">Votre image</label>
        <input
          type="file"
          name="file"
          id="form-file"
          onChange={handleFileChange}
        />
        <input type="submit" value="Valider" className="btn btn-login" />
      </form>
    </div>
  );
}

export default Publish;
