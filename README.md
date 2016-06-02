# chatty
This is a Slack clone: a real-time team communication tool prototype built with React, Go, and RethinkDB.

I built this app to practice working with React, and to learn more about how realtime apps are built. Working with Go and RethinkDB, both of which were chosen for their realtime features, wasn't my focus.

## Features
The Channels section of the app list the different discussion rooms where the chat is focused on a specific topic. Channels can be added by adding a new channel name into the Add New Channel input text field.

The Users section lists the currently connected users. New users will initially we added as "anonymous"; however, he or she can edit their name using the Set Your Name input text field.

The Messages section show the messages for a given channel. Each message lists the name of the person, the timestamp, and the message.

Everything happens in realtime, so if a new channel is added, everyone will see the new channel listed in the Channels section. Also, when a new messages appears in a specific channel, that messages will automatically appear in the messages pane.

## React Components
Different React components were created corresponding to the different sections of the app, which are Channels, Users, and Messages.

The Channels section is divided into four different React components: channel section, channel list, channel form, and channel.

Just like Channels, the Users and Messages components were divided into similar subcomponents.

## Setup and Run App Locally
***WIP***
+ clone repo
+ `npm install`
+ start [server](https://github.com/roberttaraya/chatty_server)
+ `webpack-dev-server --port 4001`
+ go to `http://localhost:4001/` in your browser

# TODO
- [ ] Clientside Error Messages
- [ ] Editing/Deleting Messages
- [ ] Clientside Error Messages
- [ ] Private Messaging
- [ ] Authentication with JWT's
