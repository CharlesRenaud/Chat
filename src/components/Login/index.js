import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';

import './login.scss';

const Login = ({ email, password, changeValue, submitLogin }) => {
  const handleChange = (identifier, newValue) => {
    // console.log(`changeField: identifier ${identifier}, newValue ${newValue}`);

    // if (identifier === 'email') {
    //   console.log(`Nouvelle valeur pour l'email : ${newValue}`);
    // }
    // else if (identifier === 'password') {
    //   console.log(`Nouvelle valeur pour le mot de passe : ${newValue}`);
    // }

    changeValue(identifier, newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitLogin();
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <Field
        identifier="email"
        placeholder="fof@meilleurCouleur.com"
        label="Email"
        type="email"
        value={email}
        changeField={handleChange}
      />
      <Field
        identifier="password"
        placeholder=""
        label="Mot de passe"
        type="password"
        value={password}
        changeField={handleChange}
      />
      <button type="submit">Valider</button>
    </form>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  /** 2 paramètres :
   - identifiant pour repérer l'input qui a reçu un changement
   - nouvelle valeur suite au changement
  */
  changeValue: PropTypes.func.isRequired,
  /** pas de paramètre */
  submitLogin: PropTypes.func.isRequired,
};

export default Login;
