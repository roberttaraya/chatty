import React, { Component, PropTypes } from 'react';
import User from './user.jsx';

class UserList extends Component {
  renderUserComponent() {
    return (
      this.props.users.map((user) => {
        return (
          <User
            user={user}
            key={user.id}
          />
        )
      })
    )
  }

  render() {
    return (
      <ul>
        {this.renderUserComponent()}
      </ul>
    )
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserList
