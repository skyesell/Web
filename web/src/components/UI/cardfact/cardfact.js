import React, {useEffect, useState} from 'react'
import './style.css';
import {getDayFact} from "../../../api/facts";

export default function Cardfact() {

    const [fact, setFact] = useState('')

    useEffect(() => {
        getDayFact()
            .then(({text}) => setFact(text))

    }, [])

    return (
        <div>
            <div class="fact">
                <h2>Факт дня</h2>
                <h3>{fact}</h3>

            </div>
        </div>
    )
}
