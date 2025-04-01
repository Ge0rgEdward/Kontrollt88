import React from "react";

const Button = (props) => {
    const buttonClass = props.textOnly ? "button text-only" : "button";

    return (
        <button className={buttonClass} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;