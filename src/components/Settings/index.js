import React from 'react';
import PropTypes from 'prop-types';

import './settings.scss';

const Settings = ({ value, setValue, saveValue }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    saveValue();
  };

  return (
    <form className="settings" onSubmit={handleSubmit}>
      <input
        className="settings-pseudo"
        type="text"
        placeholder="Pseudo"
        value={value}
        onChange={(event) => {
          // console.log(`nouvelle valeur: ${event.target.value}`);
          setValue(event.target.value);
        }}
      />
    </form>
  );
};

Settings.propTypes = {
  value: PropTypes.string.isRequired,
  /* paramètre : nouvelle valeur */
  setValue: PropTypes.func.isRequired,
  /* pas de paramètre */
  saveValue: PropTypes.func.isRequired,
};

export default Settings;
