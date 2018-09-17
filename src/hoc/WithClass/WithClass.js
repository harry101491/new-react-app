import React from "react";

const withClass = (WrappedComponent, className) => {
    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent  appTitle={props.appTitle} />
            </div>
        );
    }
};

export default withClass;
