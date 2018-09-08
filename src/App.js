import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [
      ...this.state.persons
    ];

    persons[personIndex] = person;

    console.log("The persons array before changing");
    console.log(persons);

    this.setState({
      persons
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
          {/* Way of sending the array or list in jsx */}
          { 
            this.state.persons.map((person, index) => {
              return <Person
                click={ this.deletePersonHandler.bind(this, index) }
                name={ person.name } 
                age={ person.age }
                key={ person.id }
                changed={ (event) => this.nameChangedHandler(event, person.id) } 
              />
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