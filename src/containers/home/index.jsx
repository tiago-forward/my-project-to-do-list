import { Main, MainTitle } from "./styles"
import SearchForm from "../../components/SearchForm"
import TaskContainer from "../../components/tasks/container"
import useTaskData from "../../hooks/useTaskData"
import useFavoriteTaskData from "../../hooks/useFavoriteTaskData"

function Home() {
    const [listTask, setListTask] = useTaskData()
    const [listFavoriteTask, setListFavoriteTask] = useFavoriteTaskData()

    let titleContainer = 'Novas Tarefas'
    let favoriteTitleContainer = 'Favoritos'
    
    if (!listTask.length) {
        titleContainer = 'Nenhuma tarefa neste campo!'
    }

    return (
        <>
            <Main>
                <MainTitle>Lista de Tarefas</MainTitle>

                <SearchForm 
                    listTask={listTask} 
                    setListTask={setListTask} 
                    listFavoriteTask={listFavoriteTask} 
                    setListFavoriteTask={setListFavoriteTask} />

                {listFavoriteTask.length > 0 && (
                    <TaskContainer 
                        titleContainer={favoriteTitleContainer} 
                        listTask={listFavoriteTask} 
                        setListTask={setListTask} 
                        listFavoriteTask={listFavoriteTask} 
                        setListFavoriteTask={setListFavoriteTask} />
                )}

                <TaskContainer
                    titleContainer={titleContainer}
                    listTask={listTask}
                    setListTask={setListTask}
                    listFavoriteTask={listFavoriteTask}
                    setListFavoriteTask={setListFavoriteTask} />

            </Main>
        </>
    )
}

export default Home