import React, {useState} from "react";
import gitLogo from "../../assets/github.png"
import {Container} from "./styles";
import Input from "../../components/Input";
import ItemRepo from "../../components/ItemRepo";
import Button from "../../components/Button";
import {api} from "../../services/api";

const Index = () => {
    const [currentRepo, setCurrentRepo] = useState("")
    const [repos, setRepos] = useState([])

    const handleSeacherRepo = async () => {
        try {
            const {data} = await api.get(`repos/${currentRepo}`)
            if (data.id && !repos.find(repo => repo.id === data.id)) {
                setRepos(prevState => [...prevState, data])
                setCurrentRepo("")
            }
        } catch (ex) {
            alert('Repositório não encontrado')
        }
    }

    const handleRemove = (id) => {
        const reposFilter = repos.filter(repo => repo.id !== id);
        setRepos(reposFilter.length > 0 ? reposFilter : []);
    }
    return (
        <Container className="App">
            <img src={gitLogo} alt="Logo github" width={72} height={72}/>
            <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
            <Button onCLick={handleSeacherRepo}/>
            {repos.length
                ? repos.map(repo => <ItemRepo repo={repo} key={repo.id} remove={handleRemove}/>)
                : <></>}

        </Container>
    );
}

export default Index;
