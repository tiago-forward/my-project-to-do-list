import { useState } from "react"

const TaskData = () => {

    let [listTask, setListTask] = useState([
        {
            id: 1,
            title: 'Estudar Ia',
            isCompleted: false
        },
        {
            id: 2,
            title: 'Estudar Inglês',
            isCompleted: false
        }
    ])
    console.log(listTask)

    return [listTask, setListTask]
}

export default TaskData
