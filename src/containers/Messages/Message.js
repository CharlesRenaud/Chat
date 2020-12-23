import { connect } from 'react-redux';

import Message from 'src/components/Messages/Message';

/* ownProps : facultatif, représente les props fournies au composant container */
const mapStateToProps = (state, ownProps) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  isMine: state.pseudo === ownProps.author,
  preferredColor: state.userColor,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Message);
