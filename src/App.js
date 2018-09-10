import React, { Component } from 'react';

// Importing the all the style classes that are defined in the App.css
// as object. It is done by the css loader behind the scenes
import styles from './App.css';
import Person from './Person/Person';

import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

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

  // switchNameHandler = (newName) => {
  //   console.log("Inside the Switch Name Handler");
  //   // DO NOT Attempt to DO this No Direct Mutation this.state.persons[0].name = "Pareek";
  //   this.setState({
  //     persons: [
  //       {
  //         name: newName,
  //         age: 26
  //       },
  //       {
  //         name: "Aniket",
  //         age: 29,
  //         hobbies: "Cricket"
  //       },
  //       {
  //         name: "Ricardo",
  //         age: 27
  //       }
  //     ]
  //   });
  // }

  deletePersonHandler = (index) => {
    console.log("Inside the deletion of the Person"+ index);
    // This approach has a flaw that it is chaging it not immutably but it is
    // to change the original persons array
    // const newPersons = this.state.persons;
    // newPersons.splice(index, 1);
    // this.setState({
    //   persons: newPersons
    // });

    // The immutable way of changing the persons array in the state
    // const newPersons = this.state.persons.slice();
    // newPersons.splice(index, 1);
    // this.setState({
    //   persons: newPersons
    // });

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

    // const style = {
    //   backgroundColor: "green",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "10px",
    //   cursor: "pointer",
    //   ":hover": {
    //     backgroundColor: "magenta",
    //     color: "red"
    //   }
    // };

    let persons = null;
    let btnDynamicClass = null;
    
    if(this.state.showPersons) {
      persons = (
        <div>
          {/* Way of sending the array or list in jsx */}
          { 
            this.state.persons.map((person, index) => {
              return <ErrorBoundary key={ person.id }>
                <Person
                  click={ this.deletePersonHandler.bind(this, index) }
                  name={ person.name } 
                  age={ person.age }
                  
                  changed={ (event) => this.nameChangedHandler(event, person.id) } 
                />
              </ErrorBoundary>
            })
          }
          {/* <Person 
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
          /> */}
        </div>
      );

      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "brown",
      //   color: "red"
      // };
      btnDynamicClass = styles.Red;
    }

    const classes = [];

    if(this.state.persons.length < 3) {
      classes.push(styles.red);
    }
    if(this.state.persons.length <=2) {
      classes.push(styles.bold);
    }


    return (
      <div className={styles.App}>
        <h1>
          I am a React App!
          </h1>
        <p className={classes.join(" ")}> Dyanmically styling is bad in React </p>
        <button
          className={ btnDynamicClass }
          onClick={this.tooglePersonHandler}
        //onClick={ () => this.switchNameHandler("Pareek") }
        >
          Switch Name
          </button>
        {persons}
      </div>
    );
  }
}

// export default Radium(App);
export default App;