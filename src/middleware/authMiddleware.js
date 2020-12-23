import {
  SUBMIT_LOGIN,
  GET_USER_COLOR,
  logUser,
  getUserColor,
  saveUserColor,
} from 'src/actions/chat';
import axios from 'axios';

const authMiddleware = (store) => (next) => (action) => {
  // console.log('On a intercepté une action dans authMiddleware', action);

  switch (action.type) {
    case SUBMIT_LOGIN: {
      // on a accès au store, donc au state
      const { inputEmail, inputPassword } = store.getState();

      // envoi d'une requête POST vers le serveur d'authentification
      // on fournit des informations sous forme d'objet
      axios.post('http://localhost:3001/login', {
        email: inputEmail,
        password: inputPassword,
      })
        .then((response) => {
          // on voudrait mettre à jour le state par rapport à la réponse
          const actionToDispatch = logUser(response.data);
          store.dispatch(actionToDispatch);
          // console.log(response.data);
        })
        .catch((error) => {
          // TODO créer une action DISPLAY_ERROR, qui permettrait d'afficher l'erreur
          // et en profiter pour mettre state.loading à false dans le reducer
          console.warn(error);
        });

      // récupérer la couleur de l'utilisateur
      store.dispatch(getUserColor(inputEmail));

      next(action);
      break;
    }

    case GET_USER_COLOR:
      console.log('action LOG_USER dans authMiddleware');

      axios.get(`http://localhost:3001/theme/${action.email}`)
        .then((response) => {
          // console.log(response.data);
          store.dispatch(saveUserColor(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;

    default:
      // on passe l'action au voisin (le middleware suivant, ou le store si on est le
      // dernier middleware)
      next(action);
  }
};

export default authMiddleware;
