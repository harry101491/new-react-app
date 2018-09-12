import React, { Component } from "react";
import styles from "./Person.css";

// import Radium from "radium";

// const Person = (props) => {
//     console.log("Inside the Person component");
//     return (
//         <div className={ styles.Person }>
//             <p
//                 onClick={ props.click }
//             >
//                 Inside the { props.name } and I am { props.age } years old!
//             </p>
//             <p>
//                 { props.children }
//             </p>
//             <input type="text" onChange={ props.changed } value={ props.name }/>
//         </div>
//     );
// };

class Person extends Component {
    
    /**
     * ComponentWillMount method of the Person Component
     */
    // componentWillMount() { 
    //     console.log("Inside the component will mount method of the Person");
    // }

    /**
     * componentWillUpdate() method will be called when props have been updated
     * by the parent
     * Can Do -> Sync the state with the updated props
     * Should not Do -> Cause side effects like server calls
     */
    // componentWillUpdate(updatedProps) {
    //     console.log("[Person.js] Inside the componentWillUpdate()");
    //     console.log(updatedProps);
    // }

    /**
     * shouldComponentUpdate() will be called after componentWillUpdate() method
     * we can decide in the method that we really want to update the component 
     * or stop the further rendering of the tree.
     * @param {*} updatedProps 
     * @param {*} updatedState
     * 
     * Can Do -> Decide whether the component should update or not
     * Should Not Do -> Call the side effects 
     */
    // shouldComponentUpdate(updatedProps, updatedState) {
    //     console.log("[Person.js] Inside the shouldComponentUpdate()");
    //     if(updatedProps.name === "Harshit") {
    //         return false;
    //     }
    //     else {
    //         return true;
    //     }
    // }

    /**
     * componentDidUpdate() the function called when all the children has been updated
     * Can Do -> Call the side effects like server calls
     * Should Not Do -> update the state as it will again call render() method
     */
    // componentDidUpdate() {
    //     console.log("[Person.js] Inside the componentDidUpdate()");
    // }
    
    /**
     * ComponentDidMount method of the Person Component
     */
    componentDidMount() {
        console.log("[Person.js] Inside the componentDidMount()");
    }

    /**
     * CompoentWillUnMount method of the Person Component
     */
    componentWillUnmount() {
        console.log("[Person.js] Inside the componentWillUnmount()");
    }

    render() {
        console.log("[Person.js] Inside the render()");
        return (
            <div className={styles.Person}>
                <p
                    onClick={this.props.click}
                >
                    Inside the {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>
                    {this.props.children}
                </p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        );
    }
}

export default Person;
