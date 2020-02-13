import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SignUp() {
  return (
    <main className="container">
      <div className="signup">
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
              // onChange={props.handleEmailChange}
            />
            <label htmlFor="form-email">Adresse email</label>
            <input
              placeholder=".........@............com"
              type="text"
              name="email"
              id="form-email"
              defaultValue=""
              // onChange={props.handleEmailChange}
            />
            <label htmlFor="form-password1">Mot de passe *</label>
            <input
              placeholder="**********"
              type="password"
              name="password1"
              id="form-password1"
              value=""
              // onChange={props.handlePassword1Change}
            />
            <label htmlFor="form-password2">Confirmer le mot de passe *</label>
            <input
              placeholder="**********"
              type="password"
              name="password2"
              id="form-password2"
              value=""
            />
            <input
              type="submit"
              value="Se connecter"
              className="btn btn-login"
            />
          </form>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
