import styled from "styled-components"

function Home() {
    return (
        <>
            <Main>
                <h1>Título</h1>
            </Main>
        </>
    )
}

const Main = styled.main`
    background-color: beige;
    height: 100vh;
    margin: 0 auto;
`

export default Home