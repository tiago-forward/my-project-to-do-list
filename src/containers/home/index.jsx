import styled from "styled-components"
import { SearchForm } from "../../components/search-form"
import TaskContainer from "../../components/tasks/container"

function Home() {
    return (
        <>
            <Main>
                <TituloPrincipal>Lista de Tarefas</TituloPrincipal>
                <SearchForm />
                <TaskContainer />
                <TaskContainer />
            </Main>
        </>
    )
}

const Main = styled.main`
    background-color: #4586c2;
    width: 100%;
    min-height: 10vh;
    margin: 0 auto;
    border-radius: 10px;
    padding: 10px;
    
    @media (min-width: 900px) {
        max-width: 900px;
    }

`
const TituloPrincipal = styled.h1`
    text-align: center;
    padding-bottom: 10px;
    text-transform: uppercase;
`

export default Home