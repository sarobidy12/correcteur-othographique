import React , {useEffect} from 'react';
import './App.css';
import { BrowserRouter , Route } from 'react-router-dom';

import Aos from 'aos';
import "aos/dist/aos.css";

import Index from './component/index/index'; 
import Nav from './component/header/index';

import Login from './component/login/index'; 
import Register from './component/register/index'; 
import AppUse from './component/app/index'; 

function App() {
  
  useEffect(()=>{
    Aos.init({
      duration : 1500
    })
  },[]);

  return (
    <BrowserRouter>
      <Nav/>
        <Route path="/" component={Index} exact />
        <Route path="/login" component={Login} />
        <Route path="/signUp" component={Register} />
        <Route path="/app" component={AppUse} />
    </BrowserRouter>
  );
}

export default App;
