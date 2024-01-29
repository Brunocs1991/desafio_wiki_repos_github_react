import React from "react";
import {ItemContaider, Remover} from "./styles";
import PropTypes from "prop-types";

const ItemRepo = ({repo: {full_name, html_url, name, id} , remove}) => {
    return (
        <ItemContaider >
            <h3>{name}</h3>
            <p>{full_name}</p>
            <a href={html_url} target={"_blank"} rel="noreferrer">Ver repositório</a>
            <br/>
            <Remover className={"remover"} onClick={() => remove(id)}>Remover</Remover>
            <hr/>
        </ItemContaider>
    )
}

ItemRepo.propTypes = {
    repo: PropTypes.shape({
        full_name: PropTypes.string,
        html_url: PropTypes.string,
        name: PropTypes.string,
        id: PropTypes.number,
    }).isRequired,
    remove: PropTypes.func,
};
export default ItemRepo
