// action types
export const CHANGE_INPUT_PSEUDO = 'CHANGE_INPUT_PSEUDO';
export const SAVE_PSEUDO = 'SAVE_PSEUDO';
export const CHANGE_INPUT_MESSAGE = 'CHANGE_INPUT_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const CHANGE_INPUT_OF_LOGIN = 'CHANGE_INPUT_OF_LOGIN';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const LOG_USER = 'LOG_USER';
export const CONNECT_WEBSOCKET = 'CONNECT_WEBSOCKET';
export const SAVE_NEW_MESSAGE = 'SAVE_NEW_MESSAGE';
export const GET_USER_COLOR = 'GET_USER_COLOR';
export const SAVE_USER_COLOR = 'SAVE_USER_COLOR';

// action creators
export const changeInputPseudo = (newValue) => ({
  type: CHANGE_INPUT_PSEUDO,
  value: newValue,
});

export const savePseudo = () => ({
  type: SAVE_PSEUDO,
});

export const changeInputMessage = (newValue) => ({
  type: CHANGE_INPUT_MESSAGE,
  message: newValue,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const changeInputOfLogin = (identifier, newValue) => ({
  type: CHANGE_INPUT_OF_LOGIN,
  inputIdentifier: identifier,
  newValue,
  // strictement équivalent à:
  // newValue: newValue
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const logUser = (nickname) => ({
  type: LOG_USER,
  nickname,
});

export const connectWebsocket = () => ({
  type: CONNECT_WEBSOCKET,
});

export const saveNewMessage = (message) => ({
  type: SAVE_NEW_MESSAGE,
  message,
});

export const getUserColor = (email) => ({
  type: GET_USER_COLOR,
  email,
});

export const saveUserColor = (color) => ({
  type: SAVE_USER_COLOR,
  color,
});
