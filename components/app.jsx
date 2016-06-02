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
    let ws = new WebSocket('ws://localhost:4000')
    let socket = this.socket = new Socket(ws);
    socket.on('connect', this.onConnect.bind(this));
    socket.on('disconnect', this.onDisconnect.bind(this));
    socket.on('channel add', this.onAddChannel.bind(this));
    socket.on('user add', this.onAddUser.bind(this));
    socket.on('user edit', this.onEditUser.bind(this));
    socket.on('user remove', this.onRemoveUser.bind(this));
    socket.on('message add', this.onMessageAdd.bind(this));
  }

  onMessageAdd(message) {
    let {messages} = this.state;
    messages.push(message);
    this.setState({ messages: messages});
  }

  onRemoveUser(removedUser) {
    let {users} = this.state;
    users = users.filter( user => {
      return user.id !== removedUser.id;
    });
    this.setState({ users: users });
  }

  onEditUser(editedUser) {
    let {users} = this.state
    users = users.map( user => {
      if (editedUser.id === user.id){
        return editedUser;
      }
      return user;
    });
    this.setState({ users: users });
  }

  onAddUser(user) {
    let {users} = this.state;
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

  onAddChannel(channel) {
    let {channels} = this.state;
    channels.push(channel);
    this.setState({ channels: channels });
  }

  addChannel(name) {
    this.socket.emit('channel add', { name: name })
  }

  setChannel(activeChannel) {
    this.setState({
      activeChannel: activeChannel,
    })

    this.socket.emit('message unsubscribe');
    this.setState({ messages: [] });
    this.socket.emit('message subscribe', {
      channelId: activeChannel.id
    });
  }

  setUserName(name) {
    this.socket.emit('user edit', { name: name });
  }

  addMessage(body) {
    let {activeChannel} = this.state;
    this.socket.emit('message add', {
        channelId: activeChannel.id,
        body: body,
      }
    );
  }

  render() {
    return (
      <div className='app'>
        <div className='nav'>
          <ChannelSection
            {...this.state}
            addChannel={this.addChannel.bind(this)}
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
