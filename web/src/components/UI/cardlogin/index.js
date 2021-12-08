import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom';
import Button from '../button/button';
import Input from '../input'
import './style.css';
import {login} from "../../../api/auth";

export default function Cardlogin(props) {

    const history = useHistory()

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    const handleOnChange = event => {
        const tmpUserData = {...userData}
        tmpUserData[event.target.name] = event.target.value
        setUserData(tmpUserData)
    }

    const handleLogin = () => {
        login(userData)
            .then(() => history.push('/todo'))
    }

    return (
        <section className="reg-container">
            <h2> {props.name} </h2>
            <Input
                name={'username'}
                placeholder={"email"}
                onChange={handleOnChange}
            />

            <Input
                name={'password'}
                placeholder={"Пароль"}
                onChange={handleOnChange}
            />

            <Button
                name={"Войти"}
                onClick={handleLogin}
            />
            <span>Ещё нет аккаунта? <Link to="/registration">Зарегистрируйся!</Link> </span>
        </section>
    )
}
