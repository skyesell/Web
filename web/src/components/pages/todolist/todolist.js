import React, {useEffect, useState} from "react";
import Carddate from '../../UI/carddate/carddate';
import Cardfact from '../../UI/cardfact/cardfact';
import Cardsuccess from '../../UI/cardsuccess/cardsuccess';
import Cardtodo from '../../UI/cardtodo/cardtodo';
import Sidebar from '../../UI/sidebar/sidebar';
import Userbar from '../../UI/userbar/userbar';
import Modal from "../../UI/modal/modal";
import addtask from '../../img/icon/addtask.svg';
import './style.css';
import {checkTask, createTask, deleteTask, getStatistic, getTaskList} from "../../../api/tasks";


export default function Todolist() {
    const [show, setShow] = useState(false);

    const [toDoList, setToDoList] = useState([])
    const [statistic, setStatistic] = useState({
        created: 0,
        finished: 0,
        deleted: 0
    })

    useEffect(() => {
        getTaskList()
            .then(tasks => setToDoList(tasks))
    }, []);


    useEffect(() => {
        getStatistic()
            .then(statistica => setStatistic(statistica))
    }, [toDoList])


    const [createTaskName, setCreateTaskName] = useState('')
    const handleCreateTask = text => {
        createTask(createTaskName)
            .then(task => {
                setToDoList([...toDoList, task])
                setShow(false)
            })

    }

    const handleTaskClick = (taskId, finished) => {
        if (!finished)
            checkTask(taskId).then(newTask => setToDoList(
                toDoList.map(task => {
                    if (task.id !== taskId)
                        return task
                    return newTask
                })
            ))
        else

            deleteTask(taskId).then(() => setToDoList(
                toDoList.filter(task => task.id !== taskId)
            ))
    }
    return (
        <div>

            <Sidebar/>
            <Userbar/>
            <main className="main">
                <section className="left">
                    <Cardsuccess
                        statistic={statistic}
                    />
                    <Cardtodo
                        toDoList={toDoList}
                        handleTaskClick={handleTaskClick}
                    />
                </section>
                <section className="right">
                    <Carddate/>
                    <Cardfact/>
                    <button onClick={() => setShow(true)}><img className="iconadd" src={addtask} alt="Error"/>Новая
                        задача
                    </button>
                    <Modal title="Добавить новую задачу" onClose={handleCreateTask} show={show}>
                        <input
                            type="text"
                            required
                            placeholder="Что нужно сделать?"
                            onChange={event => setCreateTaskName(event.target.value)}
                            value={createTaskName}
                        />
                    </Modal>
                </section>

            </main>


        </div>
    )
}
