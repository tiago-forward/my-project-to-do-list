import { useState } from "react"

const useFavoriteTaskData = () => {

    let [listFavoriteTask, setListFavoriteTask] = useState([])

    return [listFavoriteTask, setListFavoriteTask]
}

export default useFavoriteTaskData