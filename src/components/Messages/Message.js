import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Message = ({
  author,
  content,
  isMine,
  preferredColor,
}) => {
  const classCss = classNames('message', { 'message--own': isMine });
  const style = {};
  if (isMine) {
    style.color = preferredColor;
  }

  return (
    <div className={classCss}>
      <div className="message-author">{author}</div>
      <div className="message-body" style={style}>{content}</div>
    </div>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isMine: PropTypes.bool.isRequired,
  preferredColor: PropTypes.string.isRequired,
};

export default Message;
