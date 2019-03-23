import React from 'react';
import { Segment } from 'semantic-ui-react';

const Period = (props) => {
    return ( 
      <Segment style={{margin: "10px"}}>
        {props.classPeriods.class} - {props.classPeriods.name}
      </Segment>
    );
  }

export default Period;