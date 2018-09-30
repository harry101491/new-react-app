import React, { PureComponent } from 'react';

// Importing the all the style classes that are defined in the App.css
// as object. It is done by the css loader behind the scenes
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from './Cockpit/Cockpit';

// Importing the Higher Order Components
import withClass from "../hoc/WithClass/WithClass";
import Aux from '../hoc/Aux/Aux';

// import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

// Importing Radium for including the psudo selector in the inline style
// For including media queries and keyframes we have to wrap whole App
// with StyleRoot Component
// import Radium, { StyleRoot } from "radium"; 

class App extends PureComponent {

  /**
   * Constructor First function that runs in the life cycle of the component
   * Can Do -> Initialize the state object
   * Should Not Do -> Calling of a side effect (like Server Call)
   * componentWillMount method will be called after this 
   * @param {*} props 
   */
  constructor(props) {
    super(props);

    // console.log("Inside the constructor");
    this.state = {
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
      showPersons: false,
      toggleClicked: 0
    };

  }

  /**
   * Exist for historical reasons
   * Can Do -> Update the State and some code optimization
   * Should Not Do -> Calling a Side effect
   * Render function will be called after componentWillMount function
   */
  // componentWillMount() {
  //   console.log("Inside the component will mount function");
  // }

  /**
   * After all Childern Render methods have been executed by the React
   * and Component has been mounted on the DOM. This method will be called
   * after the Component has been sucessfully mounted
   * 
   * Can Do -> Call the side effects like server call and other side effects
   * Should Not Do -> Changing the state because will cause re-render
   */
  componentDidMount() {
    console.log("[App.js] Inside the componentDidMount()");
  }

  deletePersonHandler = (index) => {

    // New ECMA6 way of doing the same thing
    const newPersons = [ ...this.state.persons ];
    newPersons.splice(index, 1);
    this.setState({
      persons: newPersons
    });
  }

  tooglePersonHandler = () => {
    // the setState function is called async by the react so accessing the 
    // this.state might not give the latest value of toggleClicked in the case
    // where we are trying to access the same things in some other place.
    // this.setState({
    //   showPersons: !this.state.showPersons,
    //   toggleClicked: this.state.toggleClicked + 1
    // });

    // the better approach would be call a function which has the prevState to access the 
    // toggleClicked property
    this.setState((prevState, props) => {
      return {
        showPersons: !prevState.showPersons,
        toggleClicked: prevState.toggleClicked + 1
      };
    });
  }

  /**
   * shouldComponentUpdate method will be called when the state change same as when the props 
   * change 
   * 
   * It is highly critical that we should make sure that render method will be called only when
   * state has changed and not when the state remains the same
   * 
   * We can extend our component with PureComponents which makes sure that state will be checked before
   * calling the render method that will improve the performance. 
   * Can Do -> Sync the new state and old state
   * Should Not Do -> Call the side effects
   * @param {*} nextProps 
   * @param {*} nextState 
   */
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[UPDATE App.js] Inside the shouldComponentUpdate", nextState);
  //   return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
  // }

  /**
   * componentWillUpdate method will be called after the shouldupdate if it is true
   * 
   * Can Do -> Sync the new state and old state
   * Should Not Do -> Call the side effects
   * @param {*} nextProps 
   * @param {*} nextState 
   */
  componentWillUpdate(nextProps, nextState) {
    console.log("[UPDATE App.js] Inside the componentWillUpdate", nextState);
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

  /**
   * New lifecycle hooks being added in the React all methods with
   * the Will prefix are discouraged
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("[App.js] Inside the getDerivedStateFromProps()", nextProps, prevState);
    return prevState;
  }
  
  /**
   * Most important function in the life cycle of the Component
   * Will provide the required JSX code to the DOM if some part
   * has changed in the Component.
   * 
   * Render Every Child component
   */
  render() {
    console.log("[App.js] Inside the render()");
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
      <Aux>
        <Cockpit
          title={ this.props.appTitle } 
          clicked={ this.tooglePersonHandler }
          showPersons={ this.state.showPersons }
          persons={ this.state.persons }
        />
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, styles.App);