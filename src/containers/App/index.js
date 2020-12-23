import { connect } from 'react-redux';

import { connectWebsocket } from 'src/actions/chat';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  authentified: state.authentified,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  connect: () => {
    dispatch(connectWebsocket());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
