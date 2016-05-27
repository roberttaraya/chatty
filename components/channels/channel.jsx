import React, {Component, PropTypes} from 'react';

class Channel extends Component {
  onClick(e) {
    e.preventDefault();
    const {handleSetChannel, channel} = this.props;
    handleSetChannel(channel);
  }

  render() {
    const {channel, activeChannel} = this.props;
    const active = channel === activeChannel ? 'active' : '';

    return (
      <li className={active}>
        <a onClick={this.onClick.bind(this)}>
          {channel.name}
        </a>
      </li>
    )
  }
}

Channel.propTypes = {
  channel: PropTypes.object.isRequired,
  handleSetChannel: PropTypes.func.isRequired,
  activeChannel: PropTypes.object.isRequired,
};

export default Channel
