import React, { Component } from 'react';
import Header from './components/Header'
import Home from './components/Home'
import Sobre from './components/Sobre'
import Time from './components/Time'
import Servicos from './components/Servicos';
import Contato from './components/Contato'

import './styles/global.css'

<<<<<<< HEAD
=======
/*teste*/



>>>>>>> 36cb93137cf9c054ea7d1aea7fbd876c3a4d5bb7
class App extends Component {
  constructor() {
    super();
    this.state = {
<<<<<<< HEAD
       classNameServicos: '',
       classNameTime: 'time__info_h'
    }
  }

  
  handleScroll() { 
    if (document.documentElement.scrollTop >= 1186.40) {
       this.setState({
        classNameServicos: 'servicos__website'
       })
     }
     if (document.documentElement.scrollTop >= 582.40) {
      this.setState({
        classNameTime: 'time__info'
      })
    } 
   }

 componentDidMount() {
    window.onscroll = () => this.handleScroll()
  }

=======
       className: ''
    }
  }
>>>>>>> 36cb93137cf9c054ea7d1aea7fbd876c3a4d5bb7
  render() {
    return(
      <div>
        <Header />
        <Home/>
        <Sobre />
<<<<<<< HEAD
        <Time className={this.state.classNameTime}/>
        <Servicos className={this.state.classNameServicos}/>
=======
        <Time />
        <Servicos />
>>>>>>> 36cb93137cf9c054ea7d1aea7fbd876c3a4d5bb7
        <Contato />
      </div>
    )
  }
}


      

export default App;
