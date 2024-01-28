import React from "react";
import {ItemContaider} from "./styles";

const ItemRepo = () =>{
    return(
        <ItemContaider>
            <h3>Bruno</h3>
            <p>dig Bruno</p>
            <a href="#" >Ver repositório</a>
            <br/>
            <a href="#" className={"remover"}>Remover</a>
            <hr/>
        </ItemContaider>
    )
}

export default ItemRepo
