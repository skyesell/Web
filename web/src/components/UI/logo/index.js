import React from 'react';
import './style.css';
import logo from './logo.svg';

export default function Logo() {
    return (

            <section className="logoContainer">
                <section className="logo">
                 <img src={logo} alt="logo"/>   
                </section>
                <section className="logoText">
                    <h2>Tasks<br/>Book</h2>
                </section>
            </section>
    )

}