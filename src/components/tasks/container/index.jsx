import styled from "styled-components"
import TaskCard from "../task"

function TaskContainer() {
    return (
        <Container>
            <Titulo>Titulo do container</Titulo>
            <TaskCard />
        </Container>
    )
}

const Container = styled.div`
    margin-top: 20px;
    background-color: var(--java-100);
    border-radius: 10px;
    padding-bottom: 20px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`

const Titulo = styled.h2`
    text-align: center;
    padding: 10px;
    color: var(--java-950);
`

export default TaskContainer