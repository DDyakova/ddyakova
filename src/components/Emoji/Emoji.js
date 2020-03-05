import React from "react";

export const Emoji = props => {
    return (
        <span role="img" aria-label={`emoji-${props.name}`}>
            {props.children}
        </span>
    );
};
