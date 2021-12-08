import React from 'react'
import './style.css';
import {Link, useHistory} from 'react-router-dom';
import Logo from '../../UI/logo';
import home from '../../img/icon/home.svg';
import family from '../../img/icon/family.svg';
import work from '../../img/icon/work.svg';
import sport from '../../img/icon/sport.svg';
import add from '../../img/icon/add.svg';
import stat from '../../img/icon/stat.svg';
import trend from '../../img/icon/trend.svg';
import out from '../../img/icon/out.svg';
import {logout} from "../../../api/auth";


export default function Sidebar() {

    const history = useHistory()

    const handleLogout = () => {
        logout()
            .then(() => history.push('/'))
    }

    return (
        <section class="Sidebar">
            <Logo />

        <form class="Category">
            <ul>
                <lh>Категории</lh>
                <li><img class="icon" src={home} alt = "Error"/><Link to="/todo">Дом</Link></li>
                <li><img class="icon" src={family} alt = "Error"/><Link to="/todo">Семья</Link></li>
                <li><img class="icon" src={work} alt = "Error"/><Link to="/todo">Работа</Link></li>
                <li><img class="icon" src={sport} alt = "Error"/><Link to="/todo">Спорт</Link></li>
                <li class="add"><img class="icon" src={add} alt = "Error"/><Link to="/todo">Добавить</Link></li>
            </ul>

            <ul>
                <lh>Данные</lh>
                <li><img class="icon" src={stat} alt = "Error"/><Link to="/todo">Статистика</Link></li>
                <li><img class="icon" src={trend} alt = "Error"/><Link to="/todo">Сравнить</Link></li>
            </ul>

            <ul>
                <li><img class="icon" src={out} alt = "Error" onClick={handleLogout}/><Link to="/">Выход</Link></li>
            </ul>
        </form>
    </section>
    )
}
