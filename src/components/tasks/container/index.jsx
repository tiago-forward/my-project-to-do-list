import styled from "styled-components"
import TaskCard from "../task"

function TaskContainer() {
    return (
        <Container>
            <Titulo>Titulo do container</Titulo>
            <TaskCard />
            <TaskCard />
        </Container>
    )
}

const Container = styled.div`
    margin-top: 20px;
    background-color: cadetblue;
    border-radius: 10px;
    padding-bottom: 20px;
`

const Titulo = styled.h2`
    text-align: center;
    padding: 10px;
`

export default TaskContainer