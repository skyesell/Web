import React from 'react';
import './style.css';


export default function Input(props) {

    const {
        name,
        placeholder,
        onChange
    } = props

    return (
        <section className="Input">
            <input type="text" name={name} required placeholder={placeholder} onChange={onChange}/>
        </section>
    )
}
