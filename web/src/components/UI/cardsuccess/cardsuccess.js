import React from 'react'
import Circle from '../Circle/Circle';
import './style.css';


export default function Cardsuccess(prop) {

    const {
        statistic
    } = prop

    return (
        <div>
             <div className="Success">
                <h2>Успехи за неделю</h2>

                <div className="Circles">
                    <Circle name="Создано" count={statistic.created} />
                    <Circle name="Завершено" count={statistic.finished} />
                    <Circle name="Удалено" count={statistic.deleted} />
                </div>
            </div>
            
        </div>
    )
}
