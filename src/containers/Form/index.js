import { connect } from 'react-redux';

import { changeInputMessage, sendMessage } from 'src/actions/chat';

import Form from 'src/components/Form';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  message: state.inputMessage,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  setMessage: (newValue) => {
    const action = changeInputMessage(newValue);
    dispatch(action);
  },
  submitMessage: () => {
    dispatch(sendMessage());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
