import React from 'react'
import Carddate from '../../UI/carddate/carddate'
import Cardfact from '../../UI/cardfact/cardfact';
import Cardsuccess from '../../UI/cardsuccess/cardsuccess';
import Cardtodo from '../../UI/cardtodo/cardtodo';
import Sidebar from '../../UI/sidebar/sidebar';
import Userbar from '../../UI/userbar/userbar';
import './style.css';




export default function Todolist() {
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
                </section>
                    
            </main>
        </div>
    )
}
