import React from 'react';

class Channel extends React.Component {
  constructor() {
    super(); // This is a must!!!!
    this.state = {
      msg: 'Deepbaran Kar Channel',
      btn: 'SUBSCRIBE'
    };
  }

  subscribe() {
    this.setState({
      // reset the values of the properties of the state
      msg: 'Thanks for subscribing',
      btn: 'SUBSCRIBED'
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button
          onClick={() => {
            this.subscribe();
          }}
        >
          {this.state.btn}
        </button>
      </div>
    );
  }
}

export default Channel;
