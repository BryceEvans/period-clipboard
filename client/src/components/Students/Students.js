import React, { Component } from 'react';
import Student from './Student';

class Students extends Component {
  constructor(props) {
    super(props);
  
  this.state = {  }

  this.students = [
    { studentID: 1, firstName: 'Jared', lastName: 'Smith' },
    { studentID: 2, firstName: 'Juan', lastName: 'Garcia' },
    { studentID: 3, firstName: 'Jane', lastName: 'Smith' },
    { studentID: 4, firstName: 'Maria', lastName: 'Jiminez' },
    { studentID: 5, firstName: 'Another', lastName: 'Student' },
    { studentID: 6, firstName: 'Another', lastName: 'Student' },
    { studentID: 7, firstName: 'Another', lastName: 'Student' },
    { studentID: 8, firstName: 'Another', lastName: 'Student' },
    { studentID: 9, firstName: 'Jared', lastName: 'Smith' },
    { studentID: 10, firstName: 'Juan', lastName: 'Garcia' },
    { studentID: 11, firstName: 'Jane', lastName: 'Smith' },
    { studentID: 12, firstName: 'Maria', lastName: 'Jiminez' },
    { studentID: 13, firstName: 'Another', lastName: 'Student' },
    { studentID: 14, firstName: 'Another', lastName: 'Student' },
    { studentID: 15, firstName: 'Another', lastName: 'Student' },
    { studentID: 16, firstName: 'Another', lastName: 'Student' },
    { studentID: 17, firstName: 'Jared', lastName: 'Smith' },
    { studentID: 18, firstName: 'Juan', lastName: 'Garcia' },
    { studentID: 19, firstName: 'Jane', lastName: 'Smith' },
    { studentID: 20, firstName: 'Maria', lastName: 'Jiminez' },
    { studentID: 21, firstName: 'Another', lastName: 'Student' },
    { studentID: 22, firstName: 'Another', lastName: 'Student' },
    { studentID: 23, firstName: 'Another', lastName: 'Student' },
    { studentID: 24, firstName: 'Another', lastName: 'Student' },
    { studentID: 25, firstName: 'Jared', lastName: 'Smith' },
    { studentID: 26, firstName: 'Juan', lastName: 'Garcia' },
    { studentID: 27, firstName: 'Jane', lastName: 'Smith' },
    { studentID: 28, firstName: 'Maria', lastName: 'Jiminez' },
    { studentID: 29, firstName: 'Another', lastName: 'Student' },
    { studentID: 30, firstName: 'Another', lastName: 'Student' },
    { studentID: 31, firstName: 'Another', lastName: 'Student' },
    { studentID: 32, firstName: 'Another', lastName: 'Student' },
    { studentID: 33, firstName: 'Juan', lastName: 'Garcia' },
    { studentID: 34, firstName: 'Jane', lastName: 'Smith' },
    { studentID: 35, firstName: 'Maria', lastName: 'Jiminez' },
    { studentID: 36, firstName: 'Another', lastName: 'Student' },
    { studentID: 37, firstName: 'Another', lastName: 'Student' },
    { studentID: 38, firstName: 'Another', lastName: 'Student' },
    { studentID: 39, firstName: 'Another', lastName: 'Student' },
    { studentID: 40, firstName: 'Another', lastName: 'Student' },
  ]
}

  render() { 
    return ( 
      <div>
        *These are NOT the names of my acutal students.
        <div style={{display: "flex", flexWrap: "wrap"}}>
          {this.students.map((students) => (
            <Student key={this.students.studentID} students={students} />
          ))}
        </div>
        -- FRONT OF CLASSROOM --
      </div>
    );
  }
}

export default Students;