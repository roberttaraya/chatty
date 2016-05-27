import React, {Component, PropTypes} from 'react';
import ChannelSection from './channels/channel_section.jsx';

export default class ChannelList extends Component {
  constructor(props){
    super(props);
    this.state = {
      channels: [],
    }
  }

  handleAddChannel(channelName) {
    let {channels} = this.state;
    channels.push({ id: channels.length, name: channelName })

    this.setState({
      channels: channels,
    })

    // TODO: send data to server
  }

  handleSetChannel(activeChannel) {
    this.setState({
      activeChannel: activeChannel,
    })

    // TODO: get channels messages
  }

  render() {
    return (
      <div className='app'>
        <div className='nav'>
          <ChannelSection
            {...this.state}
            handleAddChannel={this.handleAddChannel.bind(this)}
            handleSetChannel={this.handleSetChannel.bind(this)}
          />
        </div>
      </div>
    )
  }
}
