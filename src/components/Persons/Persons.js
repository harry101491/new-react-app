import React, { Component } from "react";

import Person from "./Person/Person";

// Converting the stateless component into the statefull component 
// const Persons = (props) => {
//     console.log("Inside the Persons component");
//     return (
//     props.persons.map((person, index) => {
//         return <Person
//           click={ () => props.clicked(index) }
//           name={ person.name } 
//           age={ person.age }
//           key={ person.id }
//           changed={ (event) => props.changed(event, person.id) } 
//         />
//     })
// );
// };

class Persons extends Component {
    
    /**
     * ComponentWillMount method of the Persons Component
     */
    // componentWillMount() { 
    //     console.log("Inside the component will mount method of the Persons");
    // }
    
    /**
     * ComponentDidMount method of the Persons Component
     */
    componentDidMount() {
        console.log("[Persons.js] Inside the componentDidMount()");
    }

    /**
     * ComponentWillUnmount method of the Persons Component
     */
    componentWillUnmount() {
        console.log("[Persons.js] Inside the componentWillUnmount()");
    }
    
    componentWillReceiveProps(nextProps) {
        console.log("[UPDATE Persons.js] Inside the componentWillReceiveProps", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[UPDATE Persons.js] Inside the shouldComponentUpdate", nextProps);
        // they are not same as copying is done immutably and it checks shallow copy not deeply
        return nextProps.persons !== this.props.persons;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("[UPDATE Persons.js] Inside the componentWillUpdate", nextProps, nextState);
    }

    componentDidUpdate() {
        console.log("[UPDATE Persons.js] Inside the componentDidUpdate");
    }
    
    render() {
        console.log("[Persons.js] Inside the render()");
        return (
            this.props.persons.map((person, index) => {
                return <Person
                  click={ () => this.props.clicked(index) }
                  name={ person.name } 
                  age={ person.age }
                  key={ person.id }
                  changed={ (event) => this.props.changed(event, person.id) } 
                />
            })
        );
    }
}

export default Persons;