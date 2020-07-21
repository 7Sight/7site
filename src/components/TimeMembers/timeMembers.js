import React from 'react'
import '../Time/time.css'

export default props =>
    <div className="time_text">
        <img className="time_image" src={`${props.image}`} alt="Membros"/>
        <p className="time__text ">
            {props.name}
        </p>
        <p className="time__text ">
            {props.board}
        </p>
        <a className="time__icons" href={`${props.insta}`} target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram time_instF"></i></a>
        <a ClassName="time__icons" href={`${props.linkedin}`} target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin time_instF "></i></a>
    </div>