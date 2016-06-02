import React, { Component, PropTypes } from 'react';

class UserForm extends Component {
  onSubmit(e) {
    e.preventDefault();
    const node = this.refs.userName;
    const userName = node.value;
    console.log(userName)
    this.props.setUserName(userName);
    node.value = '';
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className='form-group'>
          <input
            className='form-control'
            placeholder='Set Your Name...'
            type='text'
            ref='userName'
          />
        </div>
      </form>
    )
  }
}

UserForm.propTyes = {
  setUserName: PropTypes.func.isRequired,
};

export default UserForm
