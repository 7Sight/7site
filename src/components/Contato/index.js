import React,{useState} from 'react';
import './style.css';
import iconinstagran from '../../assets/svg/iconinstagran.svg'
import iconlinkedin from '../../assets/svg/iconlinkedin.svg'
import { useHistory } from 'react-router-dom';

import api from '../../services/api'


const Contato = () => {


   const [name, setName] = useState('');
   const [phone, setPhone] = useState('');
   const [email, setEmail] = useState('');
   const [description, setDescription] = useState('');

   const history = useHistory()

   async function sendEmail(e){
      //e.preventDefault();

      const data = ({
         name,
         phone,
         email,
         description
      })

      try {
         const response = await api.post('/', data);
         alert('Obrigado por nos contactar, em breve entraremos em contato!');
         history.post('/');

      } catch (err){
         console.log('Erro ao enviar contato');
      }

   }


   return(
   <container id="contato" className="container__contato">
      
      <div className="contato">
         <div className="title__contato">Contato</div>
         <div className="traco"></div>

         <div className="contato__itens">
         <div className="contato__form">
            <form className="form" onSubmit={sendEmail}>
         
               <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder=" Nome"
                  value={name}
                  onChange={e => setName(e.target.value)} >
               </input>

               <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  placeholder=" 55 (00) 00000-0000"
                  value={phone}
                  onChange={e => setPhone(e.target.value)} >
               </input>

               <input 
                  type="e-mail" 
                  id="email" 
                  name="email" 
                  placeholder=" E-mail"
                  value={email}
                  onChange={e => setEmail(e.target.value)} >
               </input>

               <textarea 
                  type="description" 
                  id="description" 
                  placeholder="Nós diga o que você está pensando..." 
                  value={description}
                  onChange={e => setDescription(e.target.value)} >
               </textarea>

               <button type="submit">Enviar</button>
            </form>
         </div>
         <div className="contato__i">
            <div className="contato__info">
               <div className="contato__info__endereco">Endereço</div>
               <p>
                  Av. das Castanheiras, S/N - Lote 3700 - Águas Claras, Brasília - DF, 70297-400<br/>
                  Centro Universitário Euro-Americano
               </p>
               <div className="contato__info__endereco">Redes Sociais</div>
               <a href="https://www.instagram.com/7sightjr/"><img className="contato_icons" src={iconinstagran}></img></a>
               <a href="https://br.linkedin.com/company/7sight"><img className="contato_icons" src={iconlinkedin}></img></a>
            </div>
         </div>
      </div>   
      </div>
      
      
   </container>
    

   )};

export default Contato; 