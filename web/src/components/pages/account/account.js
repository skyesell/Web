import React from 'react'
import Cardacc from '../../UI/cardacc/cardacc';
import Carddate from '../../UI/carddate/carddate'
import Cardfact from '../../UI/cardfact/cardfact';

import Sidebar from '../../UI/sidebar/sidebar';
import Userbar from '../../UI/userbar/userbar';
import './style.css';

export default function account() {
    return (
        <div>
            <Sidebar />
            <Userbar />
            <main class="main">
                <section class="left">
                    <Cardacc />
                </section>
                <section class="right">
                    <Carddate />
                    <Cardfact />
                </section>
                    
            </main>
        </div>
    )
}
