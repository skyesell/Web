import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';

export default function Navigation() {
    return (
        <div className="navigation">
            <ul>
                <li>
                © copy copyright 2021
                </li>
                <li>
                    <Link to ="/todo">Политика конфиденциальности</Link>
                </li>
            </ul>
        </div>
    )
}
