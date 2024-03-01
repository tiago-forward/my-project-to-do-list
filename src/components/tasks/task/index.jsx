import styled from "styled-components"

function TaskCard() {
    return (
        <TaskCardContainer>
            <TaskTitle>
                <h3>Estudar Inglês</h3>
                <button><img src="https://cdn-icons-png.flaticon.com/128/616/616489.png" width={20} alt="Icone de estrela" /></button>
            </TaskTitle>
            <Categories>
                <span>Curso</span>
                <span>Estudos</span>
            </Categories>
            <Buttons>
                <Button>Renomear</Button>
                <Button>Excluir</Button>
            </Buttons>
        </TaskCardContainer>
    )
}

const TaskCardContainer = styled.div`
    background-color: #5baef3;
    margin: 10px auto;
    width: 80%;
    padding: 5px;
    border-radius: 10px;
`

const TaskTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Categories = styled.div`
    background-color: beige;
    margin: 5px 0;
`

const Buttons = styled.div`
    display: flex;
    justify-content: end;
`

const Button = styled.button`
    /* border: none; */
    padding: 2px;
    margin-left: 5px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
`

export default TaskCard