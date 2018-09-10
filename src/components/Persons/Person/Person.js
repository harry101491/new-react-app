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
