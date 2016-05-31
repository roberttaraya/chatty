import React, { Component, PropTypes } from 'react';
import Channel from './channel.jsx';

class ChannelList extends Component {
  renderChannelComponent() {
    return (
      this.props.channels.map((channel) => {
        return (
          <Channel
            channel={channel}
            activeChannel={this.props.activeChannel}
            setChannel={this.props.setChannel}
            key={channel.id}
          />
        )
      })
    )
  }

  render() {
    return (
      <ul>
        {this.renderChannelComponent()}
      </ul>
    )
  }
}

ChannelList.propTypes = {
  channels: PropTypes.array.isRequired,
  activeChannel: PropTypes.object.isRequired,
  setChannel: PropTypes.func.isRequired,
};

export default ChannelList
