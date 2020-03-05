import React from "react";
import "./List.css";

export const List = props => {
    return <ul id="ul-main">{props.children}</ul>;
};
