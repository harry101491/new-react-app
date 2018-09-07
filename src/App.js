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
    ],
    showPersons: false
  };

  switchNameHandler = (newName) => {
    console.log("Inside the Switch Name Handler");
    // DO NOT Attempt to DO this No Direct Mutation this.state.persons[0].name = "Pareek";
    this.setState({
      persons: [
        {
          name: newName,
          age: 26
        },
        {
          name: "Aniket",
          age: 29,
          hobbies: "Cricket"
        },
        {
          name: "Ricardo",
          age: 27
        }
      ]
    });
  }

  tooglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  nameChangedHandler = (event) => {
    console.log("Inside the change of the event");
    this.setState({
      persons: [
        {
          name: event.target.value,
          age: 26
        },
        {
          name: "Aniket",
          age: 29,
          hobbies: "Cricket"
        },
        {
          name: "Ricardo",
          age: 27
        }
      ]
    });
  }
  
  render() {

    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "10px",
      cursor: "pointer"
    };

    let persons = null;
    
    if(this.state.showPersons) {
      persons = (
        <div>
          <Person 
            name={ this.state.persons[0].name } 
            age={ this.state.persons[0].age }
            changed={ this.nameChangedHandler } 
          />
          <Person 
            name={ this.state.persons[1].name } 
            age={ this.state.persons[1].age }
            // Inefficient click={ () => this.switchNameHandler("Pareek!!") }
            changed={ this.nameChangedHandler } 
          >
            { this.state.persons[1].hobbies }
          </Person>
          <Person 
            name={ this.state.persons[2].name } 
            age={ this.state.persons[2].age }
            changed={ this.nameChangedHandler }  
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>
          I am a React App!
        </h1>
        <button
          style={ style }
          onClick={ this.tooglePersonHandler }
          //onClick={ () => this.switchNameHandler("Pareek") }
        >
          Switch Name
        </button>
        { persons }
        </div>
    );
  }
}

export default App;