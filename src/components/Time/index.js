import React, { Component } from 'react';
import './time.css'
import image from './image.png'

import TimeMembers from '../TimeMembers/timeMembers'

class Time extends Component { 

render(){
   
   return(

   <container id="time" className="container__time">

      <div className="time">
         <div className="title">
            <div className="title__time">Nosso Time</div>
            <div className="traco_time"></div>
         </div>
         <div className={this.props.className}>
            <div className="memb_card">
            <TimeMembers image={image} name="Jéssica Mazoni" board="Presidenta" insta="https://www.instagram.com/jessicamazoni_/"
            linkedin="https://www.linkedin.com/in/jessicamazonimoura/" />
            </div>
            <div className="memb_card1">
            <TimeMembers class="memb_card1" image={image} name="Vítor Rocha" board="NAF" insta="https://www.instagram.com/viitor_rocha/"
            linkedin="https://www.linkedin.com/in/vítor-rocha-morais" />
            </div>
            <div className="memb_card2">
            <TimeMembers image={image} name="Jonas Salatiel" board="NDP" insta="https://www.instagram.com/jonassalatiel/?hl=pt-br"
            linkedin="https://www.linkedin.com/in/jonas-salatiel/" />
            </div>
            <div className="memb_card3">
            <TimeMembers image={image} name="Aline Lopes" board="NGP" insta="https://www.instagram.com/aline_lopes___/"
            linkedin="https://www.linkedin.com/in/aline-lopes-49b398189/" />
            </div>
            <div className="memb_card4">
            <TimeMembers image={image} name="Carlos Henrique" board="NCM" insta="https://www.instagram.com/pradohenriq/"
            linkedin="https://www.linkedin.com/in/carloshprado/" />
            </div>
         </div>
      </div>

   </container>
)
}};


export default Time; 