// Legacy code
// TODO: full refactor

import React from 'react';

class Message extends React.Component {
  render() {
    return (
      <div>
        <i>{this.props.time}</i> <b>{this.props.ip}:</b> {this.props.text}
      </div>
    );
  }
}

export default Message;
