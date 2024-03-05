import styled from "styled-components";
import { useRef, useState } from "react"

export function SearchForm({listTask, setListTask}) {

    const [task, setTask] = useState("")
    const inputAddTask = useRef(null)

    const addTask = (event) => {
        event.preventDefault()
        // if(!task) return alert('Campo vazio')
        if (inputAddTask.current.value === '') return alert('Escreva uma tarefa!')
        const newTask = {
            id: Math.random(),
            title: inputAddTask.current.value,
            isCompleted: false
        }

        setListTask([...listTask, newTask])

        inputAddTask.current.value = ''
    }

    return (
        <Form>
            <DivSearch>
                <Input type="search" name="" id="" placeholder="Localizar tarefa" />
                <Button><img src="../../public/search.svg" alt="Icone de localizar tarefa" width="15px" height="10px" /></Button>
            </DivSearch>
            <DivAddTask>
                <Label htmlFor="task">Adicionar tarefa:</Label>
                <Input type="text" name="task" id="task" placeholder="Escreva uma nova tarefa" onChange={(e) => setTask(e.target.value)} ref={inputAddTask} />
                <Button onClick={addTask}><img src="../../public/clipboard-plus.svg" width="15px" height="10px" alt="Icone de adicionar tarefa" /></Button>
            </DivAddTask>
            {/* <div>
                <input type="button" value="Marcar como prioridade" />
            </div> */}
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const DivSearch = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: var(--java-50);
    border-radius: 5px;
    margin-bottom: 15px;

    @media screen and (min-width: 720px) {
        margin-left: 400px;
    }
`

const Input = styled.input`
    border: none;
    background-color: transparent;
    padding: 5px;
    width: 100%;
`

const Button = styled.button`
    cursor: pointer;
    border: none;
    padding: 2px;
    margin-left: 5px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    background-color: var(--java-50);
    &:hover {
        background-color: var(--java-50);
    }
    &:active {
        background-color: var(--java-100);
    }
`

const DivAddTask = styled.div`
    display: flex;
    background-color: var(--java-50);
    border-radius: 5px;

    @media screen and (min-width: 720px) {
        margin-right: 400px;
    }
`

const Label = styled.label`
    width: 195px;
    padding: 5px;
    font-size: 14px;
`