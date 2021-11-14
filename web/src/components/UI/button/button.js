import React from 'react'
import './style.css';

export default function Button(props) {
    return (
        <button class="button">{props.name}</button>
    )
}
