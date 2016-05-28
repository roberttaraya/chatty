import React, { Component, PropTypes } from 'react';
import Message from './message.jsx';

class MessageList extends Component {
  renderMessageComponent() {
    return (
      this.props.messages.map((message) => {
        return (
          <Message
            message={message}
            key={message.id}
          />
        )
      })
    )
  }

  render() {
    return (
      <ul>
        {this.renderMessageComponent()}
      </ul>
    )
  }
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default MessageList
