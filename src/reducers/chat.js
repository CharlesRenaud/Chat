import {
  CHANGE_INPUT_PSEUDO,
  SAVE_PSEUDO,
  CHANGE_INPUT_MESSAGE,
  SEND_MESSAGE,
  CHANGE_INPUT_OF_LOGIN,
  LOG_USER,
  SUBMIT_LOGIN,
  SAVE_NEW_MESSAGE,
  SAVE_USER_COLOR,
} from 'src/actions/chat';

const initialState = {
  // données temporaires
  messages: [
    /* exemple : {
      id: 1,
      author: 'Super Chat',
      content: 'Chalut chat va ?',
      isMine: true, // pour le moment, toujours vrai
    }
    */
  ],
  // pseudo actuel de l'utilisateur
  pseudo: '',
  // contenu de l'input permettant de changer de pseudo
  inputPseudo: '',
  // contenu de l'input permettant d'ajouter un message
  inputMessage: '',
  // indique si l'utilisateur est authentifié
  authentified: false,
  // contenu de l'input permettant de saisir l'e-mail
  inputEmail: '',
  // contenu de l'input permettant de saisir le mot de passe
  inputPassword: '',
  // indique si on est en train de charger des informations depuis l'API
  loading: false,
  // couleur personnalisée de l'utilisateur
  userColor: '',
};

const chatReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_PSEUDO:
      return {
        ...state,
        inputPseudo: action.value,
      };

    /* const a une portée locale au bloc de code (entre les accolades) => pour que
    la portée soit limitée à ce "case" et pas au switch : on ajoute des accolades
    */
    case SAVE_PSEUDO: {
      // on met à jour le pseudo dans les messages qu'on a écrit
      // map crée un nouveau tableau : OK on va remplacer et pas modifier directement
      const newMessages = state.messages.map((message) => {
        if (message.isMine) {
          // INTERDIT de modifier directement un objet qui est dans le state
          // message.author = state.inputPseudo;
          // => je crée un nouvel objet
          return {
            ...message,
            author: state.inputPseudo,
          };
        }
        return message;
      });

      return {
        ...state,
        pseudo: state.inputPseudo,
        messages: newMessages,
        inputPseudo: '',
      };
    }

    case CHANGE_INPUT_MESSAGE:
      return {
        ...state,
        inputMessage: action.message,
      };

    case SEND_MESSAGE:
      return {
        ...state,
        inputMessage: '',
      };

    case SAVE_NEW_MESSAGE: {
      // je remplace le tableau, INTERDIT de le modifier directement
      const newMessagesArray = [
        // je déverse tous les élements du tableau
        ...state.messages,
        // et j'ajoute un élement
        action.message,
      ];

      /* équivalent à
        const newMessagesArray = [
          state.messages[0],
          state.messages[1],
          // etc
          action.newMessage,
      ];
      */

      return {
        ...state,
        messages: newMessagesArray,
      };
    }

    case CHANGE_INPUT_OF_LOGIN:
      // console.log(`reducer a reçu l'action : le champ ${action.inputIdentifier} doit changer de valeur => ${action.newValue}`)

      // en fonction de identifier, je change l'élément correspondant du state
      // si 'email' => inputEmail, sinon ('password') => inputPassword
      if (action.inputIdentifier === 'email') {
        return {
          ...state,
          inputEmail: action.newValue,
        };
      }
      if (action.inputIdentifier === 'password') {
        return {
          ...state,
          inputPassword: action.newValue,
        };
      }
      break;
      // TODO il y a un cas où on ne retourne pas de state, ça pourrait causer
      // un bug

    case LOG_USER:
      return {
        ...state,
        pseudo: action.nickname,
        authentified: true,
        loading: false,
      };

    // après avoir été traitée par le middleware, l'action arrive au store donc au reducer
    case SUBMIT_LOGIN:
      return {
        ...state,
        loading: true,
      };

    case SAVE_USER_COLOR:
      return {
        ...state,
        userColor: action.color,
      };

    default:
      return state;
  }
};

export default chatReducer;
