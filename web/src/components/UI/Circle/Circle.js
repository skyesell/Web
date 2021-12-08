import React from 'react'
import './style.css';

export default function Circle(props) {

    const {
        name,
        count
    } = props

    return (
        <div>
            <div className="ContCirc">
                <h3>{name}</h3>
                <div className="Circle">
                    <h4>{count}</h4>
                </div>
            </div>

        </div>
    )
}
