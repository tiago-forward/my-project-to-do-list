import { Form, DivSearch, Input, Button, DivAddTask, Label, DivSelector, InputFavorite, LabelFavorite } from "./styles";
import search from '../../../public/search.svg'
import clipboardplus from '../../../public/clipboardplus.svg'
import { useRef, useState } from "react"
import SelectionBar from "./SelectionBar";

function SearchForm({ listTask, setListTask, listFavoriteTask, setListFavoriteTask }) {

    const [searchTerm, setSearchTerm] = useState('')
    const inputAddTask = useRef(null)
    const [isFavorite, setIsFavorite] = useState(false)
    const [dataCategories, setDataCategories] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleInputChange = (event) => {
        console.log(searchTerm)
        setSearchTerm(event.target.value);
    }

    const handleCheckboxChange = (event) => {
        setIsFavorite(event.target.checked)
    }

    const optionCategorie = (event) => {
        setDataCategories(event.value)
    }

    const addTask = () => {
        if (inputAddTask.current.value === '') return alert('Escreva uma tarefa!')
        if (dataCategories === undefined) return alert('Escolha ou escreva uma nova categoria!')

        const newTask = {
            id: Math.random(),
            title: inputAddTask.current.value,
            categorie: dataCategories,
            isCompleted: false
        }

        if (isFavorite) {
            setListFavoriteTask([...listFavoriteTask, newTask]);
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
                    value={searchTerm}
                    onChange={(event) => handleInputChange(event)} />
                <Button>
                    <img src={search} alt="Icone de localizar tarefa" width="25px" height="10px" />
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
                    <img src={clipboardplus} width="15px" height="10px" alt="Icone de adicionar tarefa" />
                </Button>
            </DivAddTask>
            <DivSelector>
                <SelectionBar
                    optionCategorie={optionCategorie} />
                <InputFavorite 
                    onChange={handleCheckboxChange} 
                    type="checkbox" 
                    name="favority" 
                    id="favority" />
                <LabelFavorite htmlFor="favority">Marcar tarefa como favorito</LabelFavorite>
            </DivSelector>
        </Form>
    )
}

export default SearchForm