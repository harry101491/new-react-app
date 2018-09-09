import React from "react";
import "./Person.css";

import Radium from "radium";

const Person = (props) => {
    const inlineStyle = {
        "@media (min-width: 500px)": {
            width: "200px"
        }
    };
    
    return (
        <div className="Person" style={ inlineStyle }>
            <p
                onClick={ props.click }
            >
                Inside the { props.name } and I am { props.age } years old!
            </p>
            <p>
                { props.children }
            </p>
            <input type="text" onChange={ props.changed } value={ props.name }/>
        </div>
    );
};

export default Radium(Person);
