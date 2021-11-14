import React from 'react'
import './style.css';

export default function Circle(props) {
    return (
        <div>
            <div class="ContCirc">
                        <h3>{props.name}</h3>
                        <div class="Circle">
                            <h4>{props.count}</h4>
                        </div>
                     </div>
            
        </div>
    )
}
