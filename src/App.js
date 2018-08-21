import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: "Harshit",
        age: 26
      },
      {
        name: "Aniket",
        age: 29,
        hobbies: "Cricket"
      },
      {
        name: "Ricardo",
        age: 26
      }
    ]
  };

  switchNameHandler = () => {
    console.log("Inside the Switch Name Handler");
  }
  
  render() {
    return (
      <div className="App">
        <h1>
          I am a React App!
        </h1>
        <button
          onClick={ this.switchNameHandler }
        >
          Switch Name
        </button>
        <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age } />
        <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age } >
          { this.state.persons[1].hobbies }
        </Person>
        <Person name={ this.state.persons[2].name } age={ this.state.persons[2].age } />
      </div>
    );
  }
}

export default App;