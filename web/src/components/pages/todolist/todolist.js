import React, { useState } from "react";
import Carddate from '../../UI/carddate/carddate';
import Cardfact from '../../UI/cardfact/cardfact';
import Cardsuccess from '../../UI/cardsuccess/cardsuccess';
import Cardtodo from '../../UI/cardtodo/cardtodo';
import Sidebar from '../../UI/sidebar/sidebar';
import Userbar from '../../UI/userbar/userbar';
import Modal from "../../UI/modal/modal";
import addtask from '../../img/icon/addtask.svg';
import './style.css';




export default function Todolist() {
    const [show, setShow] = useState(false);
    return (
        <div>

            <Sidebar />
            <Userbar />
            <main class="main">
                <section class="left">
                    <Cardsuccess />
                    <Cardtodo />
                </section>
                <section class="right">
                    <Carddate />
                    <Cardfact />
                    <button onClick={() => setShow(true)}><img class="iconadd" src={addtask} alt = "Error"/>Новая задача</button>
                        <Modal title="Добавить новую задачу" onClose={() => setShow(false)} show={show}>
                            <input type="text" required placeholder="Что нужно сделать?" />
                         </Modal>
                </section>
            
            </main>
            

        </div>
    )
}
