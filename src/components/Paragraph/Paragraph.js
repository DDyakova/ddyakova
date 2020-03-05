import React from "react";
import "./Paragraph.css";

export const Paragraph = props => {
    return (
        <p id="p-main" className={props.className}>
            {props.children}
        </p>
    );
};
