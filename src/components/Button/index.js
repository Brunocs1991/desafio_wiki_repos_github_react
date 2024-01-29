import React from "react";
import {ButtonContainer} from "./styles";
import PropTypes from "prop-types";

const Button = ({onCLick}) => {
    return (
        <ButtonContainer onClick={onCLick}>Buscar</ButtonContainer>
    )
}

Button.propTypes ={
    onCLick: PropTypes.func
}
export default Button
