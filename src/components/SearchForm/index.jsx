import { Form, DivSearch, Input, Button, DivAddTask, Label } from "./styles";
import { useRef, useState } from "react"
import SelectionBar from "./SelectionBar";

function SearchForm({listTask, setListTask, listFavoriteTask , setListFavoriteTask}) {

    const [task, setTask] = useState("")
    const [searchTerm, setSearchTerm] = useState("")
    const inputAddTask = useRef(null)

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    }
    
    const addTask = (event) => {
        if (inputAddTask.current.value === '') return alert('Escreva uma tarefa!')
        const newTask = {
            id: Math.random(),
            title: inputAddTask.current.value,
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
                <Button>
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
            </DivAddTask>
                <SelectionBar />
            {/* <input type="button" value="Marcar como prioridade" /> */}
        </Form>
    )
}

export default SearchForm