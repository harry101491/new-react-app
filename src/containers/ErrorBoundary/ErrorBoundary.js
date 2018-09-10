import React, { Component } from "react";

class ErrorBoundary extends Component {
    // setting the initial state
    state = {
        hasError: false,
        errorMessage: ""
    };

    componentDidCatch = (error, info) => {
        // Updating the state with the hasError and error message
        this.setState({
            hasError: true,
            errorMessage: error
        });
    }
    
    render() {

        // if the error has occured then return the message
        // otherwise return the children in the props
        if(this.state.hasError) {
            return (<h1>{ this.state.errorMessage }</h1>);
        }
        else {
            return this.props.children;
        }
        // return(
        //     <h1>
        //         Something went wrong!!
        //     </h1>
        // );
    } 
}

export default ErrorBoundary;