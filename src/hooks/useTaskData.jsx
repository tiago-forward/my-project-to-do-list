import { useState } from "react"

const useTaskData = () => {
    let [listTask, setListTask] = useState([])

    return [listTask, setListTask]
}

export default useTaskData