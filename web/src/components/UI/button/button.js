import React from 'react'
import './style.css';

export default function Button(props) {

    const {
        name,
        onClick
    } = props

    return (
        <button class="button" onClick={onClick}>{name}</button>
    )
}
