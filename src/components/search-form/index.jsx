import { useRef, useState } from "react"
import TaskData from "../../data"

export function SearchForm() {

    const [task, setTask] = useState("")
    const [listTask, setListTask] = TaskData()

    const addTask = () => {
        if(!task) return alert('Campo vazio')
        const newTask = {
            id: Math.random(),
            title: task,
            isCompleted: false
        }

        setListTask([...listTask, newTask])
        console.log(newTask)
    }


    return (
        <>
            {/* <input type="search" name="" id="" placeholder="Localizar tarefa" /> */}
            <label htmlFor="task">Adicionar tarefa:</label>
            <input type="text" name="task" id="task" placeholder="Escreva uma nova tarefa" onChange={(e) => setTask(e.target.value)} />
            <button onClick={addTask}><img src="https://cdn-icons-png.flaticon.com/512/64/64673.png" width="15px" height="10px" alt="lupa de pesquisa" /></button>
            {/* <div>
                <input type="button" value="Marcar como prioridade" />
            </div> */}
        </>
    )
}