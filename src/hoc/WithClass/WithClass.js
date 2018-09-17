import React, { Component } from "react";

// This is just a function that takes the wrapped component 
// and the class name of the styles
// We can also do Anonymous Class way if we want to have the 
// state and not only props.
// const withClass = (WrappedComponent, className) => {
//     return (props) => {
//         return (
//             <div className={className}>
//                 <WrappedComponent { ...props }/>
//             </div>
//         );
//     }
// };

// Returning the class it doesn't require a class name
// as it is anonymous class.
const withClass = (WrappedComponent, className) => {
    return (
        class extends Component {
            render() {
                return (
                    <div className={className}>
                        <WrappedComponent {...this.props} />
                    </div>
                );
            }
        }
    );
};



export default withClass;
