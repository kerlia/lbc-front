import React from "react";

function Login() {
  return (
    <main className="container">
      <div className="login">
        <h1>Connexion</h1>
        {/* onSubmit={props.handleSubmit} */}
        <form action="">
          <label htmlFor="form-email">Adresse email</label>
          <input
            placeholder="......@.........com"
            type="text"
            name="email"
            id="form-email"
            defaultValue=""
            // onChange={props.handleEmailChange}
          />

          <label htmlFor="form-password">Mot de passe</label>
          <input
            placeholder="Your password"
            type="password"
            name="password"
            id="form-password"
            value=""
            // onChange={props.handlePassword1Change}
          />
          <input type="submit" value="Se connecter" className="btn btn-login" />
        </form>
        <h3>Vous n'avez pas de compte</h3>
        <button className="btn btn-new-account">Créer un compte</button>
      </div>
    </main>
  );
}

export default Login;
