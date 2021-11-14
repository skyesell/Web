 import React from 'react'
 import './style.css';
 
 export default function Cardtodo() {
     return (
         <div>

             <div class="Tasks">

                <h2>Активные задачи</h2>
                <div class="Task">
                    <span class="active">Протереть пыль с полок</span>
                </div>
                <div class="Task">
                    <span class="active">Вымыть полы</span>
                </div>

                <h2>Завершенные задачи</h2>
                <div class="Task">
                    <span class="done">Стирка белья</span>
                </div>
                <div class="Task">
                    <span class="done">Вынести мусор</span>
                </div>
            </div>
             
         </div>
     )
 }
 