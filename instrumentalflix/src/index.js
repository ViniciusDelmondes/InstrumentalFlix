import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/index'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import CadastroVideo from './pages/cadastro/video/index'
import CadastroCategoria from './pages/categoria/index'


const Pagina404 = () => {
  return (
  <div>
    <h1> Ops! Algo de errado não está certo!</h1>
  </div>
  )
}
  
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

