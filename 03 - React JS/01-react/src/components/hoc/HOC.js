import React, { Component } from 'react';

// HOC functio0n
const subjects = STUDENT => {
  class Subject extends Component {
    render() {
      return <STUDENT hocsub="JavaScript"></STUDENT>;
    }
  }
  return Subject;
};

// Whatever component was passed here, is exported from here after enhancement
// Whatever component wants to import the enhanced version of the original component, need to import the original version and the original version will automatically be imported after enhancement.
export default subjects;
