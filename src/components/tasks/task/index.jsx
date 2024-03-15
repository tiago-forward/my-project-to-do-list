import { TaskCardContainer, TaskTitle, Title, Categories, Span, Buttons, Button, ButtonStar, ButtonStarActive } from "./styles.ts"
import star from '../../../../public/star.png'
import { useState, useEffect } from "react"

function TaskCard({ task, listTask, setListTask, listFavoriteTask, setListFavoriteTask }) {
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        setIsFavorite(listFavoriteTask.some(item => item.id === task.id))
    }, [listFavoriteTask, task.id])

    const deleteTask = () => {
        if (listFavoriteTask.some(item => item.id === task.id)) {
            setListFavoriteTask(listFavoriteTask.filter(item => item.id !== task.id))
        } else {
            setListTask(listTask.filter(item => item.id !== task.id))
        }
    }


    const addFavoriteTask = () => {
        if (!listFavoriteTask.some(item => item.id === task.id)) {
            setListFavoriteTask([...listFavoriteTask, task])
            setListTask(listTask.filter(item => item.id !== task.id))
        }
    }

    return (
        <TaskCardContainer>
            <TaskTitle>
                <Title>{task.title}</Title>
                {isFavorite
                    ? <ButtonStarActive>
                        <img src={star} width={20} alt="Icone para adicionar a tarefa como favorito" />
                    </ButtonStarActive>
                    : <ButtonStar
                        onClick={addFavoriteTask}>
                        <img src={star} width={20} alt="Icone para adicionar a tarefa como favorito" />
                    </ButtonStar>}
            </TaskTitle>
            <Categories>
                <Span>{task.categorie}</Span>
            </Categories>
            <Buttons>
                {/* <Button>Renomear</Button> */}
                <Button onClick={deleteTask}>Excluir</Button>
            </Buttons>
        </TaskCardContainer>
    )
}

export default TaskCard