import React from "react";

const Person = (props) => {
    return (
        <div>
            <p>
                Inside the { props.name } and I am { props.age } years old!
            </p>
            <p>
                { props.children }
            </p>
        </div>
    );
};

export default Person;
