import styled from "styled-components"
import { SearchForm } from "../../components/search-form"

function Home() {
    return (
        <>
            <Main>
                <Titulo>Lista de Tarefas</Titulo>
                <SearchForm />
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
const Titulo = styled.h1`
    text-align: center;
    padding-bottom: 10px;
    text-transform: uppercase;
`

export default Home