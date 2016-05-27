import React, {Component, PropTypes} from 'react';
import Channel from './channel.jsx';

class ChannelList extends Component {
  renderChannelComponent() {
    return (
      this.props.channels.map((channel) => {
        return (
          <Channel
            channel={channel}
            key={channel.id}
            {...this.props}
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
  handleSetChannel: PropTypes.func.isRequired,
  activeChannel: PropTypes.object.isRequired,
};

export default ChannelList
