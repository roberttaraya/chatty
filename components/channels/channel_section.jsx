import React, { Component, PropTypes } from 'react';
import ChannelForm from './channel_form.jsx';
import ChannelList from './channel_list.jsx';

class ChannelSection extends Component {
  render () {
    return (
      <div className='support panel panel-primary'>
        <div className='panel-heading'>
          <strong>Channels</strong>
        </div>
        <div className='panel-body channels'>
          <ChannelList
            channels={this.props.channels}
            activeChannel={this.props.activeChannel}
            setChannel={this.props.setChannel}
          />
          <ChannelForm
            addChannel={this.props.addChannel}
          />
        </div>
      </div>
    )
  }
}

ChannelSection.propTypes = {
  activeChannel: PropTypes.object.isRequired,
  channels: PropTypes.array.isRequired,
  addChannel: PropTypes.func.isRequired,
  setChannel: PropTypes.func.isRequired,
};

export default ChannelSection
