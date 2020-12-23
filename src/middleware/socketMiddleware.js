import { CONNECT_WEBSOCKET, SEND_MESSAGE, saveNewMessage } from 'src/actions/chat';

let socket;

const socketMiddleware = (store) => (next) => (action) => {

  switch (action.type) {
    case CONNECT_WEBSOCKET: {
      socket = window.io('http://localhost:3001');

      // je m'abonne aux événements send_message de la websocket
      socket.on('send_message', (message) => {
        // console.log('message reçu: ', message);
        // seul moyen dans un middleware pour provoquer une modification du state :
        // dispatch une action
        const messageToSave = {
          id: message.id,
          author: message.author,
          content: message.content,
        };

        store.dispatch(saveNewMessage(messageToSave));
      });

      next(action);
      break;
    }

    case SEND_MESSAGE: {
      const state = store.getState();

      // je crée un message
      const newMessage = {
        author: state.pseudo,
        content: state.inputMessage,
      };

      socket.emit('send_message', newMessage);

      next(action);
      break;
    }

    default:
      // on passe l'action au voisin (le middleware suivant, ou le store si on est le
      // dernier middleware)
      next(action);
  }
};

export default socketMiddleware;
