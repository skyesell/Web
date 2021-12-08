import React from 'react'
import './style.css';

export default function Cardtodo(props) {

    const {
        toDoList,
        handleTaskClick
    } = props

    return (
        <div>

            <div className="Tasks">

                <h2>Активные задачи</h2>
                {toDoList.map(task => {
                    if (!task.finished)
                        return (
                            <button className="Task" onClick={() => handleTaskClick(task.id, task.finished)}>
                                <span className="active" >{task.text}</span>
                            </button>
                        )
                })}

                <h2>Завершенные задачи</h2>
                {toDoList.map(task => {
                    if (task.finished)
                        return (
                            <button className="Task" onClick={() => handleTaskClick(task.id, task.finished)}>
                                <span className="done">{task.text}</span>
                            </button>
                        )
                })}
            </div>

        </div>
    )
}
 