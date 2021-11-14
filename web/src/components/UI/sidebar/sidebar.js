import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';
import Logo from '../../UI/logo';
import home from '../../img/icon/home.svg';
import family from '../../img/icon/family.svg';
import work from '../../img/icon/work.svg';
import sport from '../../img/icon/sport.svg';
import add from '../../img/icon/add.svg';
import stat from '../../img/icon/stat.svg';
import trend from '../../img/icon/trend.svg';
import out from '../../img/icon/out.svg';


export default function Sidebar() {
    return (
        <section class="Sidebar">
            <Logo />

        <form class="Category">
            <ul>
                <lh>Категории</lh>
                <li><img class="icon" src={home} alt = "Error"/><Link to="#">Дом</Link></li>
                <li><img class="icon" src={family} alt = "Error"/><Link to="#">Семья</Link></li>
                <li><img class="icon" src={work} alt = "Error"/><Link to="#">Работа</Link></li>
                <li><img class="icon" src={sport} alt = "Error"/><Link to="#">Спорт</Link></li>
                <li class="add"><img class="icon" src={add} alt = "Error"/><Link to="#">Добавить</Link></li>
            </ul>

            <ul>
                <lh>Данные</lh>
                <li><img class="icon" src={stat} alt = "Error"/><Link to="#">Статистика</Link></li>
                <li><img class="icon" src={trend} alt = "Error"/><Link to="#">Сравнить</Link></li>
            </ul>

            <ul>
                <li><img class="icon" src={out} alt = "Error"/><Link to="#">Выход</Link></li>
            </ul>
        </form>
    </section>
    )
}
