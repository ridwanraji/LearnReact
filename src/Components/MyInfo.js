import React from "react";

class Myinfo extends React.Component {
  render () {
    const styles = {
      color: "#8b6e53",
      textAlign: "center"
    }
    return (
      <div style={styles}>
          <h1> My name is Ridwan Raji</h1>
          <p> I just finished my BSc Computer Science with a minor in Sociology. i am currently learning
              I'm currently learning React.JS which is what i am using to write this right now.
          </p>
  
          <h5> TOP 3 Vacation</h5>
        <ul>
          <li>Hawaii</li>
          <li> Iceland</li>
          <li> Dubai </li>
        </ul>
      </div>
    )
  }
}

export default Myinfo;
