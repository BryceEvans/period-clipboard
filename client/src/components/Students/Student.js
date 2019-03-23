import React from 'react';
import { Segment } from 'semantic-ui-react';

const Period = (props) => {
    return ( 
      <Segment style={{margin: "5px", width: "100px"}}>
        {props.students.firstName} {props.students.lastName}
      </Segment>
    );
  }

export default Period;