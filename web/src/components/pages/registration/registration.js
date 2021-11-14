import React from 'react';
import './style.css';
import Logo from '../../UI/logo';
import Navigation from '../../UI/navigation/navigation';
import Cardreg from '../../UI/cardreg';

export default function registration() {
    return (
        <div >
            <Logo />
            <Cardreg name="Регистрация" />
            <Navigation />    
        </div>
    )
}