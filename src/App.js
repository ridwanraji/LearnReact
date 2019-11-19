import React from 'react';
// import CheckboxComponent from './Components/CheckboxComp'
import NavComponent from './Components/NavComponent'
import MyInfo from './Components/MyInfo'
import SchoolGrades from './Components/SchoolGradesComponent'

function App() {
  return (
    <div>
      <NavComponent />

      <MyInfo />

      <h5> Grades </h5>
      <SchoolGrades
        course = "CMPT355"
        grade = "88"/>
      
      <SchoolGrades
        course = "CMPT380"
        grade = "85"/>
    </div>
  );
}

export default App;
