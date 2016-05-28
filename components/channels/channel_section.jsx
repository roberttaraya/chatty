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
            handleSetChannel={this.props.handleSetChannel}
          />
          <ChannelForm
            handleAddChannel={this.props.handleAddChannel}
          />
        </div>
      </div>
    )
  }
}

ChannelSection.propTypes = {
  activeChannel: PropTypes.object.isRequired,
  channels: PropTypes.array.isRequired,
  handleAddChannel: PropTypes.func.isRequired,
  handleSetChannel: PropTypes.func.isRequired,
};

export default ChannelSection
