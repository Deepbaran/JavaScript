import React, { Component } from 'react';

export class CFunctionClick extends Component {
  constructor(props) {
    // For accessing props in state object, we need to pass the props to the constructor and then pass it to the super()
    super(props);

    // Binding 'this' to the function
    this.changeEvent = this.changeEvent.bind(this);

    this.state = {
      course: 'BE ',
      roll: this.props.roll
    };
  }

  // Need to bind() to access this
  changeEvent() {
    // Accessing state from our own functions
    console.log('Hello Event Class', this.state.course);
    this.setState({
      course: 'BE ',
      roll: this.props.roll
    });
  }

  // Easier method. No need to bind()
  changeEventArrow = () => {
    console.log('Hello Event Class', this.state.course);
    this.setState({
      course: '12th ',
      roll: '6'
    });
  };

  render() {
    // Array of numbers
    const numbers = this.props.numbers; // Created a list using props

    /*
    // Array of JSX elements: COnverting all the elements of numbers list as JSX
    const newNumbers = numbers.map(number => <li>{number}</li>);
    */

    return (
      // Ways of event handling in Class Component
      /*
      // 1st way: Use this method if this event is occuring only a single time
      <div>
        <button
          onClick={() => {
            console.log('Hello Event Class');
          }}
        >
          Click Me
        </button>
      </div>
      */
      /*
      // 2nd way:
      <div>
        <button
          onClick={() => {
            this.changeEvent();
          }}
        >
          Click Me
        </button>
      </div>
      */
      /*
      // 3rd way:
      <div>
        <button onClick={this.changeEvent}>Hit Me</button>
      </div>
      */

      <React.Fragment>
        {this.props.roll}
        <button onClick={this.changeEvent}>Hit Me</button>
        <button onClick={this.changeEventArrow}>Arrow Me</button>
        {this.state.course}
        {this.state.roll}

        <ul>
          {numbers.map(number => (
            <li key={number}>{number}</li>
          ))}
        </ul>
        {/* <ul>{newNumbers}</ul> */}
        {numbers[0]}
      </React.Fragment>
    );
  }
}

// export default CFunctionClick;
