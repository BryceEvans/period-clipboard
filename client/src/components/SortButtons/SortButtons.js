import React, { Component } from 'react';
import { Segment, Button } from 'semantic-ui-react';

class SortButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    
    this.topButtons = [
      { text: 'Frist Name' },
      { text: 'Last Name' },
      { text: 'RI Score' },
      { text: 'Current Grade' },
      { text: 'Last Quarter Grade' },
      { text: 'Benchmark Score' },
      { text: 'RISE Score' },
      { text: 'Random' },
    ]

    this.alternatingButtons = [
      { text: 'Alternating Frist Name' },
      { text: 'Alternating Last Name' },
      { text: 'Alternating RI Score' },
      { text: 'Alternating Current Grade' },
      { text: 'Alternating Last Quarter Grade' },
      { text: 'Alternating Benchmark Score' },
      { text: 'Alternating RISE Score' },
      { text: 'Random' },
    ]
  }
  render() { 
    return ( 
      <div>
        <Segment>
          <Segment>
            {this.topButtons.map((button, index) => (
              <Button size='mini' >{ button.text }</Button>
            ))}
          </Segment>
          <Segment>
            {this.alternatingButtons.map((button, index) => (
              <Button size='mini' >{ button.text }</Button>
            ))}
          </Segment>
        </Segment>
      </div>
    );
  }
}

export default SortButtons;