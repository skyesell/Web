import React from 'react';
import './style.css';


export default function Input(props) {
    return (
        <section className="Input">
            <input type="text" required placeholder= {props.name}></input>
        </section>
    )
}
