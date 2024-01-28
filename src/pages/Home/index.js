import React from "react";
import gitLogo from "../../assets/github.png"
import {Container} from "./styles";
import Input from "../../components/Input";
import ItemRepo from "../../components/ItemRepo";

const Index = () => {
    return (
        <Container className="App">
            <img src={gitLogo} alt="Logo github" width={72} height={72}/>
            <Input/>
            <ItemRepo/>
        </Container>
    );
}

export default Index;
