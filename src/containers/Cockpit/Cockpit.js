import React from "react";

import styles from "./Cockpit.css";

const Cockpit = (props) => {

    let btnClass = null;
    let appliedClasses = [];

    if(props.showPersons) {
        btnClass = styles.Red;
    }

    if(props.persons.length <= 2) {
        appliedClasses.push(styles.red);
    }
    if(props.persons.length <= 1) {
        appliedClasses.push(styles.bold);
    }
    
    return(
        <div className={ styles.Cockpit }>
            <h1> I am a React App! </h1>
            <p className={ appliedClasses.join(" ") }> Dyanmically styling is bad in React </p>
            <button
                onClick={ props.clicked }
                className={ btnClass }
            >
                Switch Name
            </button>  
        </div>
    );
};

export default Cockpit;