import React from 'react'
import Button from '../button/button';
import Input from '../input'
import user from '../../img/icon/user.png';
import './style.css';

import { Link } from 'react-router-dom';

export default function Cardacc() {
    return (
        <div>
            <div className="Accinfo">
                <div className="Information">
                    <figure className="Photo">
                        <img className="Usericoninfo" src={user} alt="Error"/>
                        <Link to="/">Изменить фото</Link>
                    </figure>
                    <div class="Input">
                        <h3>Ваш никнейм</h3>
                        <Input name="Никнейм"/>
                        <h3>Изменить email</h3>
                        <Input name="E-mail"/>
                        <h3>Изменить пароль</h3>
                        <Input name="Пароль"/>
                        <Button name="Сохранить изменения"/>
                    </div>
                </div>
            </div>
        </div>

    )
}
