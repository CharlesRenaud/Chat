// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Form from 'src/containers/Form';
import Settings from 'src/containers/Settings';
import Messages from 'src/containers/Messages';
import Login from 'src/containers/Login';

import './chat.scss';

/*
 X avoir un composant Login qui s'affiche si on n'est pas authentifié
 X si on n'est pas authentifié, Form et Settings sont masqués
 X Login affiche deux champs Field
 - champs contrôlés pour les deux champs de Login
 - soumission du formulaire de Login et appel à une API
*/

// == Composant
const App = ({ authentified, loading, connect }) => {
  useEffect(() => {
    console.log('après le premier affichage');
    // lancer la connexion au websocket (action qui sera interceptée par le middleware)
    connect();
  }, []);

  return (
    <div className="app">
      <Messages />
      {authentified && (
        <>
          <Form />
        </>
      )}
      {!authentified && <Login />}
      {loading && (
        <div>Veuillez patienter...</div>
      )}
    </div>
  );
};

App.propTypes = {
  authentified: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  connect: PropTypes.func.isRequired,
};

// == Export
export default App;
