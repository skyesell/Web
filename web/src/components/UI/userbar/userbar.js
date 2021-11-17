import React from 'react';
import './style.css';
import DropdownExamplePointing from '../dropdown/dropdown';
import user from '../../img/icon/user.png';
import { Link } from 'react-router-dom';

export default function Userbar() {
    return (
        <div>
            <p class="User">Хорошего дня,&nbsp;<Link to="/account">Username</Link><img class="Usericon" src={user}/></p>
            <DropdownExamplePointing />
        </div>
    )
}

