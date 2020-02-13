import React, { useState, useEffect } from "react";

import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// https://leboncoin-api.herokuapp.com/api/user/sign_up
// POST

// {
//   "email": "farid@lereacteur.io",
//   "username": "Farid",
//   "password": "azerty"
// }

function SignUp() {
  const API = "https://leboncoin-api.herokuapp.com/api/user/sign_up";
  // const [data, setData] = useState({});

  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handlePseudoChange = event => {
    const value = event.target.value;
    setPseudo(value);
  };
  const handleEmailChange = event => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePassword1Change = event => {
    const value = event.target.value;
    setPassword1(value);
  };
  const handlePassword2Change = event => {
    const value = event.target.value;
    setPassword2(value);
  };
  const handleSubmit = async event => {
    event.preventDefault();
    console.log(pseudo, email, password1);

    if (pseudo === "" || email === "" || password1 === "" || password2 === "") {
      alert("please fill in all fields");
    } else if (password1 !== password2) {
      alert("The two passwords are not identical");
    } else {
      console.log(" >>>> SUBMIT");
      const newUser = {
        email: email,
        username: pseudo,
        password: password1
      };
      const response = await axios.post(API, newUser);

      console.log(response.data);
    }
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // Charger les données

  //     setData(response.data);
  //     // setIsLoading(false);
  //   };

  //   fetchData();
  // }, []);

  return (
    <main className="container">
      <div className="signup" onSubmit={handleSubmit}>
        <div className="col-left">
          <h2>Pourquoi créer un compte</h2>
          <div>
            <div>
              <FontAwesomeIcon className="icon" icon="clock" />
              <div>
                <h3>Gagnez du temps</h3>
                <p>
                  Publiez vos annonces rapidement, avec vos informations
                  pré-remplies chaque fois que vous souhaitez déposer une
                  nouvelle annonce.
                </p>
              </div>
            </div>
            <div>
              <FontAwesomeIcon className="icon" icon="bell" />
              <div>
                <h3>Soyez les premiers informés</h3>
                <p>
                  Créez des alertes Immo ou Emploi et ne manquez jamais
                  l’annonce qui vous intéresse.
                </p>
              </div>
            </div>
            <div>
              <FontAwesomeIcon className="icon" icon="eye" />
              <div>
                <h3>Visibilité</h3>
                <p>
                  Suivez les statistiques de vos annonces (nombre de fois où
                  votre annonce a été vue, nombre de contacts reçus)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-right">
          <h2>Créez un compte</h2>
          <form action="">
            <label htmlFor="form-pseudo">Pseudo</label>
            <input
              placeholder="Votre pseudo"
              type="text"
              name="pseudo"
              id="form-pseudo"
              defaultValue=""
              onChange={handlePseudoChange}
            />
            <label htmlFor="form-email">Adresse email</label>
            <input
              placeholder=".........@............com"
              type="text"
              name="email"
              id="form-email"
              defaultValue=""
              onChange={handleEmailChange}
            />
            <label htmlFor="form-password1">Mot de passe *</label>
            <input
              placeholder="**********"
              type="password"
              name="password1"
              id="form-password1"
              defaultValue=""
              onChange={handlePassword1Change}
            />
            <label htmlFor="form-password2">Confirmer le mot de passe *</label>
            <input
              placeholder="**********"
              type="password"
              name="password2"
              id="form-password2"
              defaultValue=""
              onChange={handlePassword2Change}
            />
            <input
              type="submit"
              value="Créer mon Compte Personnel"
              className="btn btn-login"
            />
          </form>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
