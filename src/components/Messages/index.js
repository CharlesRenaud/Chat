import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './messages.scss';
import Message from 'src/containers/Messages/Message';

const Messages = ({ messages }) => {
  const refContainer = useRef(null);

  // application d'un effet chaque fois que messages change de valeur
  useEffect(() => {
    // console.log('nouveau message affiché');
    // console.log(refContainer.current);

    refContainer.current.scrollTo({
      // scrollHeight : hauteur de l'élément, y compris la zone non visible
      top: refContainer.current.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <div ref={refContainer} className="messages">
      {messages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Messages;
