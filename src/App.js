import React from 'react';
import CheckboxComponent from './Components/CheckboxComp'
import NavComponent from './Components/NavComponent'
import MyInfo from './Components/MyInfo'

function App() {
  return (
    <div>
      <NavComponent />
      <MyInfo />
      <CheckboxComponent />
      <CheckboxComponent />
      <CheckboxComponent />
    </div>
  );
}

export default App;
