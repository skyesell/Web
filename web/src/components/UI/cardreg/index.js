import React, {useState} from 'react'
import Button from '../button/button';
import Input from '../input'
import './style.css';
import {useHistory} from "react-router-dom";
import {login, register} from "../../../api/auth";

export default function Cardreg(props) {

    const history = useHistory()

    const [registerData, setRegisterData] = useState({
        email: '',
        password: '',
        name: ''
    })

    const handleOnChange = event => {
        const tmpUserData = {...registerData}
        tmpUserData[event.target.name] = event.target.value
        setRegisterData(tmpUserData)
    }

    const handleRegister = () => {
        register(registerData)
            .then(() => {
                login({
                    username: registerData.email,
                    password: registerData.password
                })
                    .then(() => history.push('/todo'))
            })
    }

    return (
        <section className="reg-container">
            <h2> {props.name} </h2>
            <Input
                name={'email'}
                placeholder={"email"}
                onChange={handleOnChange}
            />
            <Input
                name={'password'}
                placeholder={"Пароль"}
                onChange={handleOnChange}
            />
            <Input
                name={'name'}
                placeholder={"Имя пользователя"}
                onChange={handleOnChange}
            />
            <Button name="Регистрация" onClick={handleRegister}/>
        </section>
    )
}
