import { connect } from 'react-redux';

import { changeInputOfLogin, submitLogin } from 'src/actions/chat';

import Login from 'src/components/Login';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  email: state.inputEmail,
  password: state.inputPassword,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  changeValue: (identifier, newValue) => {
    const action = changeInputOfLogin(identifier, newValue);
    dispatch(action);
  },
  submitLogin: () => {
    // j'envoie une action au store, pour qu'elle puisse être interceptée par le
    // middleware qui fera l'appel à l'API
    dispatch(submitLogin());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
