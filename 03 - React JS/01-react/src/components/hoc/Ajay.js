import React, { Component } from 'react';
import subjects from './HOC';

class Ajay extends Component {
  state = {
    marks: 0
  };

  marksIncremented = () => {
    this.setState({
      marks: this.state.marks + 1
    });
  };

  render() {
    return (
      <div>
        <h2 onMouseOver={this.marksIncremented}>
          Vikas's Marks {this.state.marks}, {this.props.hocsub}
        </h2>
      </div>
    );
  }
}

// Passed this component to HOC function, subjects for enhancement
export default subjects(Ajay);
