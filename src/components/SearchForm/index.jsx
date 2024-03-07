import { Form, DivSearch, Input, Button, DivAddTask, Label } from "./styles";
import { useRef, useState } from "react"
import SelectionBar from "./SelectionBar";
import styled from "styled-components";

function SearchForm({listTask, setListTask, listFavoriteTask , setListFavoriteTask}) {

    const [task, setTask] = useState("")
    const [searchTerm, setSearchTerm] = useState("")
    const inputAddTask = useRef(null)
    const [selectedOptions, setSelectedOptions] = useState([])

    const mostrarSelecao = () => {
        console.log(selectedOptions)
    }

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const addTask = (event) => {
        if (inputAddTask.current.value === '') return alert('Escreva uma tarefa!')
        const newTask = {
            id: Math.random(),
            title: inputAddTask.current.value,
            categorie: '',
            isCompleted: false
        }

        setListTask([...listTask, newTask])

        inputAddTask.current.value = ''
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <Form onSubmit={handleSubmit}>
            <DivSearch>
                <Input 
                    type="search" 
                    name="searchTask" 
                    id="searchTask" 
                    placeholder="Localizar tarefa" 
                    onChange={(event) => handleInputChange(event)} />
                <Button
                    onClick={mostrarSelecao}>
                    <img src="../../public/search.svg" alt="Icone de localizar tarefa" width="25px" height="10px" />
                </Button>
            </DivSearch>
            <DivAddTask>
                <Label htmlFor="task">Adicionar tarefa:</Label>
                <Input 
                    type="text" 
                    name="task" 
                    id="task" 
                    placeholder="Escreva uma nova tarefa" 
                    ref={inputAddTask} />
                <Button
                    onClick={addTask}>
                    <img src="../../public/clipboard-plus.svg" width="15px" height="10px" alt="Icone de adicionar tarefa" />
                </Button>
                {/* <Button
                    onClick={addTask}>
                    <img src="../../src/assets/estrela.png" width="25px" height="20px" alt="Icone de adicionar tarefa" />
                    Favority
                </Button> */}
            </DivAddTask>
            <Divv>
                <SelectionBar setSelectedOptions={setSelectedOptions} />
                <InputFavority type="radio" id="favority" />
                <Labell htmlFor="favority">Adicionar a lista de Favoritos</Labell>
            </Divv>
        </Form>
    )
}

export default SearchForm

const Divv = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const InputFavority = styled.input`
    display: none;

    &&:checked + label::before {
        background-color: var(--java-600);
        border: 1px solid var(--java-900);
    }
`

const Labell = styled.label`
    position: relative;
    background-color: var(--java-50);
    border-radius: 4px;
    padding: 5px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    font-size: 14px;
    margin-top: 15px;
    height: 38px;
    cursor: pointer;

    &&::before {
        position: absolute;
        content: "";
        height: 15px;
        width: 15px;
        border: 1px solid var(--java-600);
        border-radius: 50%;
        left: 5px;
        /* background-color: var(--java-50); */
        background-image: url('../../src/assets/estrela.png');
        background-repeat: no-repeat;
    }
`