import React from "react";
import "./Heading.css";

export const Heading = props => {
    return (
        <h1 id="h-main" className={props.size}>
            {props.children}
        </h1>
    );
};
