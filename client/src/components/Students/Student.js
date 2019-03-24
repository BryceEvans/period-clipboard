import React from 'react';
import { Segment } from 'semantic-ui-react';
import BottomRow from '../Information/BottomRow';

const Period = (props) => {
    return ( 
      <Segment style={{margin: "5px", width: "100px"}}>
        {props.students.firstName} {props.students.lastName}
        <BottomRow />
      </Segment>
    );
  }

export default Period;