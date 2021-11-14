import React from 'react'
import Button from '../button/button';
import Input from '../input'
import './style.css';

export default function Cardreg(props) {
    return (
        <section className="reg-container">
            <h2> {props.name} </h2>
            <Input name="email"/>
            <Input name="Пароль"/>
            <Input name="Введите пароль повторно"/>
            <Button name="Регистрация" />
        </section>
    )
}
