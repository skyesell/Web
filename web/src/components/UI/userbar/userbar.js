import React, {useEffect, useState} from 'react';
import './style.css';
import DropdownExamplePointing from '../dropdown/dropdown';
import user from '../../img/icon/user.png';
import { Link } from 'react-router-dom';
import {getMe} from "../../../api/permission";

export default function Userbar() {

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


    return (
        <div>
            <p className="User">Хорошего дня,&nbsp;<Link to="/account">{userName}</Link>
                <img className="Usericon" src={userAvatar} alt={'user'}/>
            </p>
            <DropdownExamplePointing />
        </div>
    )
}

