import React, {Component, PropTypes} from 'react';
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
          <ChannelList {...this.props} />
          <ChannelForm {...this.props} />
        </div>
      </div>
    )
  }
}

ChannelSection.propTypes = {
  channels: PropTypes.func.isRequired,
  handleSetChannel: PropTypes.func.isRequired,
  handleAddChannel: PropTypes.func.isRequired,
  activeChannel: PropTypes.object.isRequired,
};

export default ChannelSection
