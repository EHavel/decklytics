import React, { useState } from 'react'
import axios from 'axios'

function TaskList() {
    const [myTasks, setMyTasks] = useState([])

    const getMyTasks = () => {
        axios.get('https://private-8b293-aulareact.apiary-mock.com/tasks')
            .then((response) => {
                setMyTasks(response.data)
            })
            .catch((error) => {
                console.log("Ops! Algo deu errado: ", error);
            })
    }

    const renderList = (list) => {
        return list.map(item => (
            <li>{item}</li>
        ))
    }

    return (
        <div className="task-list">
            <ol>
                {renderList(myTasks)}
            </ol>
            <button onClick={getMyTasks}>Carrega minhas tarefas</button>
        </div>
    )
}

export default TaskList