import { Container, Title } from "./styles"

import TaskCard from "../task";

function TaskContainer({titleContainer, listTask, setListTask, listFavoriteTask, setListFavoriteTask, valueSearch}) {
    let tasksToShow = titleContainer === "Favoritos" ? listFavoriteTask : listTask;

    tasksToShow = tasksToShow.filter(item => item.title.toLowerCase().includes(valueSearch.toLowerCase()))
    
    return (
        <Container>
            <Title>{titleContainer}</Title>
            {tasksToShow.map(task => (
                <TaskCard 
                    key={task.id} 
                    task={task} 
                    listTask={listTask} 
                    setListTask={setListTask} 
                    listFavoriteTask={listFavoriteTask} 
                    setListFavoriteTask={setListFavoriteTask} />
            ))}
        </Container>
    );
}

export default TaskContainer