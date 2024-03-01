import styled from "styled-components"

function TaskContainer() {
    return (
        <Container>
            <Titulo>Titulo do container</Titulo>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 20px;
    background-color: cadetblue;
    border-radius: 10px;
`

const Titulo = styled.h2`
    text-align: center;
`

export default TaskContainer