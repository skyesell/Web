import React, {useEffect, useState} from 'react'
import Button from '../button/button';
import Input from '../input'
import user from '../../img/icon/user.png';
import './style.css';

import {changeUserName, getMe} from "../../../api/permission";

export default function Cardacc() {

    const [userName, setUserName] = useState('')
    const [userAvatar, setUserAvatar] = useState(user)

    useEffect(() => {
        getMe()
            .then(({name, avatar}) => {
                setUserName(name)
                if (avatar)
                    setUserAvatar(avatar.url)
            })
    }, []);

    const handleEmailChange = event => setUserName(event.target.value)
    const handleEmailClick = () => {
        changeUserName(userName)
            .then(() => {})
    }


    return (
        <div>
            <div className="Accinfo">
                <div className="Information">
                    <figure className="Photo">
                        <img className="Usericoninfo" src={userAvatar} alt="Error"/>
                    </figure>
                    <div className="Input">
                        <h3>Ваш никнейм</h3>
                        <Input
                            name={"name"}
                            placeholder={userName}
                            onChange={handleEmailChange}
                        />
                        <Button
                            name="Сохранить изменения"
                            onClick={handleEmailClick}
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}
