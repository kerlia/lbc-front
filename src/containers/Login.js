import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <main className="container">
      <div className="login">
        <h1>Connexion</h1>
        {/* onSubmit={props.handleSubmit} */}
        <form action="">
          <label htmlFor="form-email">Adresse email</label>
          <input
            placeholder=".........@............com"
            type="text"
            name="email"
            id="form-email"
            defaultValue=""
            // onChange={props.handleEmailChange}
          />

          <label htmlFor="form-password">Mot de passe</label>
          <input
            placeholder="**********"
            type="password"
            name="password"
            id="form-password"
            value=""
            // onChange={props.handlePassword1Change}
          />
          <input type="submit" value="Se connecter" className="btn btn-login" />
        </form>
        <h3>Vous n'avez pas de compte</h3>
        <Link to="/sign-up" className="btn btn-new-account">
          Créer un compte
        </Link>
      </div>
    </main>
  );
}

export default Login;
