import React from 'react'
import '../CSS/Card.css'

export default function Card(props) {
    return (

        <div>
            <div class="card subject-card" style={{width: "600px"}} >
                <img src={props.imagesrc} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.subject}</h5>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
