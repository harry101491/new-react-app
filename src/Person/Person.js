import React from "react";
import "./Person.css";

const Person = (props) => {
    return (
        <div className="Person">
            <p
                onClick={ props.click }
            >
                Inside the { props.name } and I am { props.age } years old!
            </p>
            <p>
                { props.children }
            </p>
            <input type="text" />
        </div>
    );
};

export default Person;
