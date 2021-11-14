import React from 'react'
import Circle from '../Circle/Circle';
import './style.css';


export default function Cardsuccess() {
    return (
        <div>
             <div class="Success">
                <h2>Успехи за неделю</h2>

                <div class="Circles">
                    <Circle name="Создано"  />
                    <Circle name="Завершено" />
                    <Circle name="Удалено" />
                </div>
            </div>
            
        </div>
    )
}
