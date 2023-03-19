import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

export class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    // Here state is needed for proper execution of getDerivedStateFromProps
    this.state = {
      name: 'Deep'
    };
    console.log('LifeCycleA: constructor');
  }
  // Before render
  static getDerivedStateFromProps(props, state) {
    // Any changes needed before render goes here
    console.log('LifeCycleA: getDerivedStateFromProps');
    return null;
  }

  // After render
  componentDidMount() {
    // Any changes after render goes here
    console.log('LifeCycleA: componentDidMount');
  }

  render() {
    console.log('LifeCycleA: render');
    return (
      <div>
        LifeCycleA
        <LifeCycleB></LifeCycleB>
      </div>
    );
  }
}

export default LifeCycleA;
