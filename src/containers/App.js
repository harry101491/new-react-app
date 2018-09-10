import React, { Component } from 'react';

// Importing the all the style classes that are defined in the App.css
// as object. It is done by the css loader behind the scenes
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from './Cockpit/Cockpit';

// import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

// Importing Radium for including the psudo selector in the inline style
// For including media queries and keyframes we have to wrap whole App
// with StyleRoot Component
// import Radium, { StyleRoot } from "radium"; 

class App extends Component {
  state = {
    persons: [
      {
        id: 0,
        name: "Harshit",
        age: 26
      },
      {
        id: 1,
        name: "Aniket",
        age: 29,
        hobbies: "Cricket"
      },
      {
        id: 2,
        name: "Ricardo",
        age: 26
      }
    ],
    showPersons: false
  };

  deletePersonHandler = (index) => {
    console.log("Inside the deletion of the Person"+ index);
  
    // New ECMA6 way of doing the same thing
    const newPersons = [ ...this.state.persons ];
    newPersons.splice(index, 1);
    this.setState({
      persons: newPersons
    });
  }

  tooglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  nameChangedHandler = (event, id) => {
    // getting the index of the person with the same id
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    // copying the person object in immutable way
    const person = {
      ...this.state.persons[personIndex]
    };

    // changing the name of the person
    person.name = event.target.value;

    // making a new array in an immutable way
    const persons = [
      ...this.state.persons
    ];

    // updating the person in the persons array using the index
    persons[personIndex] = person;

    // updating the state
    this.setState({
      persons
    });
  }
  
  render() {

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <Persons 
          persons={ this.state.persons } 
          clicked={ this.deletePersonHandler.bind(this) }
          changed={ this.nameChangedHandler.bind(this) }
        /> 
      );
    }
    return (
      <div className={styles.App}>
        <Cockpit 
          clicked={ this.tooglePersonHandler }
          showPersons={ this.state.showPersons }
          persons={ this.state.persons }
        />
        {persons}
      </div>
    );
  }
}

export default App;