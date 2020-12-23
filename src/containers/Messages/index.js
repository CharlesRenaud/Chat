import { connect } from 'react-redux';

import Messages from 'src/components/Messages';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  messages: state.messages,
});

const mapDispatchToProps = (dispatch) => {
  return {
    // nom de la prop à remplir: callback qui contient un appel à dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Messages);
