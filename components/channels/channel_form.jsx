import React, {Component, PropTypes} from 'react';

class ChannelForm extends Component {
  handleCreateChannelName(e) {
    this.props.handleCreateChannelName(e.target.value)
  }

  handleAddChannel(e) {
    e.preventDefault();
    const node = this.refs.channel;
    const channelName = node.value;
    this.props.handleAddChannel(channelName);
    node.value = '';
  }

  render() {
    return(
      <form onSubmit={this.handleAddChannel.bind(this)}>
        <div className='form-group'>
          <input
            className='form-control'
            placeholder='Add Channel'
            type='text'
            ref='channel'
          />
        </div>
      </form>
    )
  }
}

ChannelForm.propTyes = {
  handleAddChannel: PropTypes.func.isRequired,
};

export default ChannelForm
