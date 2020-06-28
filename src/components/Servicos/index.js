import React, { Component } from 'react';
import Lutties from '../Lotties/UncontrolledLottie'
import './style.css'

class Servicos extends Component {

   render() {
      return (
         <section id="servicos" className="container__servicos">
            <div className="servicos">
               <div className="title__servicos">Servicos</div>
               <div className="traco"></div>
               <div className="servicos__itens">
                  
                  <Lutties />

                  <div className="servicos__desc">
                     <h1 className="servicos__desc__title">Desenvolvimento de sites</h1>
                     <p className="servicos__desc__text">Desenvolvimento de sites responsivos com sistemas gerenciadores de conteúdo (CMS).</p>

                     <h1 className="servicos__desc__title">Desenvolvimento de sistemas</h1>
                     <p className="servicos__desc__text">Desenvolvimento de sistemas personalizados e ajustados para agilizar e integrar seus processos.</p>
                     
                  </div> 
               </div>
            </div>
         </section>
      )
   }
}

export default Servicos; 