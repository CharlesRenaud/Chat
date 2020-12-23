import React from 'react';
import PropTypes from 'prop-types';
// react-feather : librairie d'icônes (légère et pratique à utiliser)
import { Send } from 'react-feather';

import './form.scss';

const Form = ({ message, setMessage, submitMessage }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    submitMessage();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input-message"
        type="text"
        placeholder="Saisissez votre message..."
        value={message}
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button type="submit" className="button-submit">
        <Send size="70%" />
      </button>
    </form>
  );
};

Form.propTypes = {
  message: PropTypes.string.isRequired,
  /** paramètre : nouvelle valeur du champ */
  setMessage: PropTypes.func.isRequired,
  /** pas de paramètre */
  submitMessage: PropTypes.func.isRequired,
};

export default Form;
