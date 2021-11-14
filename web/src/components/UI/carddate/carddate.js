import React from 'react'
import './style.css';
import calendar from '../../img/icon/calendar.svg';
import clock from '../../img/icon/clock.svg';


export default function Carddate() {
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();

    return (
        <div class="time-cont">
        <h2>А сейчас...</h2>
        <form class="datetime">
            <div class="time">
                <h3>На часах у нас</h3>
                <span class="Timedate"><img class="icon1" src={clock}/>{ currTime }</span>
            </div>
            <div class="date">
                <h3>Сегодня у нас</h3>
                <span class="Timedate"><img class="icon1" src={calendar}/>{ currDate }</span>
            </div>
        </form> 
    </div>
    )
}
