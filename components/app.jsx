import React, { Component, PropTypes } from 'react';
import ChannelSection from './channels/channel_section.jsx';
import UserSection from './users/user_section.jsx';
import MessageSection from './messages/message_section.jsx';
import Socket from '../socket.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeChannel: {},
      channels: [],
      messages: [],
      users: [],
      connected: false,
    };
  }

  componentDidMount() {
    let socket = this.socket = new Socket();
    socket.on('connect', this.onConnect.bind(this));
    socket.on('disconnect', this.onDisconnect.bind(this));
    socket.on('channel add', this.oAddChannel.bind(this));
    socket.on('user add', this.oAddUser.bind(this));
    socket.on('user edit', this.onEditUser.bind(this));
    socket.on('user remove', this.onRemoveUser.bind(this));
    socket.on('message add', this.onMessageAdd.bind(this));
  }

  onMessageAdd(message) {
    let messages = this.state.messages;
    messages.push(message);
    this.setState({ messages: messages});
  }

  onRemoveUser(removedUser) {
    let users = this.state.users;
    users = users.filter( user => {
      return user.id !== removeUser.id;
    });
    this.setState({ users: users });
  }

  onEditUser(editedUser) {
    let users = this.state.users;
    users = users.map( user => {
      if (editedUser.id === user.id){
        return editedUser;
      }
      return user;
    });
    this.setState({ users: users });
  }

  onAddUser(user) {
    let users = this.state.users;
    users.push(user);
    this.setState({ users: users });
  }

  onConnect() {
    this.setState({ connected: true });
    this.socket.emit('channel subscribe');
    this.socket.emit('user subscribe');
  }

  onDisconnect() {
    this.setState({ connected: false });
  }

  newChannel(channel) {
    let channels = this.state.channels;
    channels.push(channel);
    this.setState({ channels: channels });
  }

  onAddChannel(channelName) {
    this.socket.emit('channel add', { channelName: channelName })
  }

  setChannel(activeChannel) {
    this.setState({
      activeChannel: activeChannel,
    })

    this.socket.emit('message unsubscribe');
    this.setState({ messages: [] });
    this.socket.emit('message subscribe', { channelId: activeChannel.id });
  }

  setUserName(name) {
    this.socket.emit('user edit', { name: name });
  }

  addMessage(body) {
    let activeChannel = this.state.activeChannel;
    this.socket.emit('message add', { channelId: activeChannel.id, body });
  }

  render() {
    return (
      <div className='app'>
        <div className='nav'>
          <ChannelSection
            {...this.state}
            addChannel={this.onAddChannel.bind(this)}
            setChannel={this.setChannel.bind(this)}
          />
          <UserSection
           {...this.state}
            setUserName={this.setUserName.bind(this)}
          />
        </div>
        <MessageSection
          {...this.state}
          addMessage={this.addMessage.bind(this)}
        />
      </div>
    )
  }
}

export default App
