import React, {useState} from "react";
import gitLogo from "../../assets/github.png"
import {Container} from "./styles";
import Input from "../../components/Input";
import ItemRepo from "../../components/ItemRepo";
import Button from "../../components/Button";

const Index = () => {
    const [repos, setRepos] =  useState([])
    return (
        <Container className="App">
            <img src={gitLogo} alt="Logo github" width={72} height={72}/>
            <Input/>
            <Button/>
            <ItemRepo/>
        </Container>
    );
}

export default Index;
