import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../button/button';
import Input from '../input'
import './style.css';

export default function Cardlogin(props) {
    return (
        <section className="reg-container">
            <h2> {props.name} </h2>
            <Input name="email"/>
            <Input name="Пароль"/>
            <Button name="Войти" />
            <span>Ещё нет аккаунта? <Link to="/registration">Зарегистрируйся!</Link> </span>
        </section>
    )
}
