import React from "react";
import {InputContainer} from "./styles";
import PropTypes from "prop-types";

const Input = ({value, onChange}) => {
    return (
        <InputContainer>
            <input value={value} onChange={onChange}/>
        </InputContainer>
    )
}

Input.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
}
export default Input;
