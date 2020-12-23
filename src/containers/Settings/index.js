import { connect } from 'react-redux';

import { changeInputPseudo, savePseudo } from 'src/actions/chat';

import Settings from 'src/components/Settings';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  value: state.inputPseudo,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  setValue: (newValue) => {
    dispatch(changeInputPseudo(newValue));
  },
  saveValue: () => {
    dispatch(savePseudo());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
