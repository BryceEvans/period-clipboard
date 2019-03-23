import React from 'react';
import { Segment } from 'semantic-ui-react';

const Period = (props) => {
    return ( 
      <Segment style={{margin: "10px"}}>
        <p>{props.classPeriods.class}</p>
        <p> {props.classPeriods.name}</p>
      </Segment>
    );
  }

export default Period;