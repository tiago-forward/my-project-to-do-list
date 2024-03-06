import styled from "styled-components"
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
                <TituloPrincipal>Lista de Tarefas</TituloPrincipal>

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

const Main = styled.main`
    background-color: var(--java-600);
    width: 100%;
    min-height: 10vh;
    margin: 0 auto;
    border-radius: 10px;
    padding: 10px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    
    @media (min-width: 900px) {
        max-width: 900px;
    }
`
const TituloPrincipal = styled.h1`
    text-align: center;
    padding-bottom: 10px;
    text-transform: uppercase;
    color: var(--java-50);
    font-style: italic;
    font-weight: 800;
    
`

export default Home