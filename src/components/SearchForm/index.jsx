import { Form, DivSearch, Input, Button, DivAddTask, Label, DivSelector, InputFavorite, LabelFavorite } from "./styles";
import { useRef, useState } from "react"
import SelectionBar from "./SelectionBar";

function SearchForm({ listTask, setListTask, listFavoriteTask, setListFavoriteTask }) {

    const [searchTerm, setSearchTerm] = useState("")
    const inputAddTask = useRef(null)
    const [selectedOptions, setSelectedOptions] = useState([])
    const [isFavorite, setIsFavorite] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleCheckboxChange = (event) => {
        setIsFavorite(event.target.checked)
    }

    const addTask = (event) => {
        if (inputAddTask.current.value === '') return alert('Escreva uma tarefa!')
        const newTask = {
            id: Math.random(),
            title: inputAddTask.current.value,
            categorie: '',
            isCompleted: false
        }

        if (isFavorite) {
            setListFavoriteTask(listItem => [...listItem, newTask]);
        } else {
            setListTask([...listTask, newTask])
        }

        inputAddTask.current.value = ''
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
            <DivSelector>
                <SelectionBar setSelectedOptions={setSelectedOptions} />
                <InputFavorite onChange={handleCheckboxChange} type="checkbox" name="favority" id="favority" />
                <LabelFavorite htmlFor="favority">Marcar tarefa como favorito</LabelFavorite>
            </DivSelector>
        </Form>
    )
}

export default SearchForm