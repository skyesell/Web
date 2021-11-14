import React from 'react';
import './style.css';
import Logo from '../../UI/logo';
import Cardlogin from '../../UI/cardlogin';
import Navigation from '../../UI/navigation/navigation';

export default function login() {
    return (
        <div >
            <Logo />
            <Cardlogin name="Вход в аккаунт" />
            <Navigation />
            
        </div>
    )
}

