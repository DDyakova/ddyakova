import React from "react";
import "./ListItem.css";

export const ListItem = props => {
    return <li className="li-main">{props.children}</li>;
};
