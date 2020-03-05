import React from "react";
import "./Link.css";

export const Link = props => {
    return (
        <a id="a-main" href={props.link} style={{ color: props.color }}>
            {props.children}
        </a>
    );
};
