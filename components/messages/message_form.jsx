import React, { Component, PropTypes } from 'react';

class MessageForm extends Component {
  handleOnSubmit(e) {
    e.preventDefault();
    const node = this.refs.message;
    const messageName = node.value;
    this.props.handleAddMessage(messageName);
    node.value = '';
  }

  render() {
    let input;
    if(this.props.activeChannel.id !== undefined) {
      input = (
        <input
          ref='message'
          type='text'
          className='form-control'
          placeholder='Add Message...'
        />
      )
    }
    return (
      <form onSubmit={this.handleOnSubmit.bind(this)}>
        <div className='form-group'>
          {input}
        </div>
      </form>
    )
  }
}

MessageForm.propTyes = {
  activeChannel: PropTypes.object.isRequired,
  handleAddMessage: PropTypes.func.isRequired,
};

export default MessageForm
