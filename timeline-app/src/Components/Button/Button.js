import React from "react";
import ButtonCss from "../Button/Button.module.css";

// A General Button Functional Component with click handler and css classes
// Css Modules are used in this component for the purpose of Local Scope

const Button = (props) => {
    return (
        <button data-testid="button_test"
            disabled={props.disabled}
            onClick={props.buttonClickMethod}
            className={[ButtonCss.Button, ButtonCss[props.buttonType]].join(" ")}
        >
            {props.children}
        </button>
    );
};
export default Button;
