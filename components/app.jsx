import React, { Component, PropTypes } from 'react';
import ChannelSection from './channels/channel_section.jsx';
import UserSection from './users/user_section.jsx';
import MessageSection from './messages/message_section.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeChannel: {},
      channels: [],
      messages: [],
      users: [],
    };
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

  handleSetUserName(name) {
    let {users} = this.state;
    users.push({
      id: users.length,
      name: name
    })

    this.setState({
      users: users,
    })

    // TODO: get users messages
  }

  handleAddMessage(body) {
    let {messages, users} = this.state;
    let createdAt = new Date;
    let author = users.length > 0 ? users[0].name : 'anonymous';
    messages.push({
      id: messages.length,
      body: body,
      createdAt: createdAt,
      author: author,
    })

    this.setState({
      messages: messages,
    })

    // TODO: send data to server
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
          <UserSection
           {...this.state}
            handleSetUserName={this.handleSetUserName.bind(this)}
          />
        </div>
        <MessageSection
          {...this.state}
          handleAddMessage={this.handleAddMessage.bind(this)}
        />
      </div>
    )
  }
}

export default App
