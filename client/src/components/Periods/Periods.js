import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Period from './Period';

class Periods extends Component {
  constructor(props) {
    super(props);
  
  this.state = {  }

  this.classPeriods = [
    { class: '2nd', name: 'Honors' },
    { class: '3rd', name: 'Core' },
    { class: '4th', name: 'Core' },
    { class: '5th', name: 'ESL' },
    { class: '6th', name: 'Core' },
    { class: '7th', name: 'Honors' },
  ]
}

  render() { 
    return ( 
      <div>
        {this.classPeriods.map((classPeriods, index) => (
          <Link to={'/dashboard/periods/classexample'}>
            <Period key={index} classPeriods={classPeriods} />
          </Link>
        ))}
      </div>
    );
  }
}

export default Periods;