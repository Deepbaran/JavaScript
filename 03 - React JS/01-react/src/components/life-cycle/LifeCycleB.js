import React, { Component } from 'react';

export class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Deep'
    };
    console.log('LifeCycleB: constructor');
  }
  // Before render
  static getDerivedStateFromProps(props, state) {
    // Any changes needed before render goes here
    console.log('LifeCycleB: getDerivedStateFromProps');
    return null;
  }

  // After render
  componentDidMount() {
    // Any changes after render goes here
    console.log('LifeCycleB: componentDidMount');
  }

  render() {
    console.log('LifeCycleB: render');
    return <div>LifeCycleB</div>;
  }
}

export default LifeCycleB;
