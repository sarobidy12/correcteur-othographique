import React , { Component } from 'react';
import Hero from './hero'; 
import How from './how'; 
import Footer from '../footer/index';

class Index extends Component{
  componentDidMount=()=>{
  }
  render(){
    
    return (
            <div>
              <Hero />
              <How />
              <Footer/>
            </div>          
        ); 
  }
}

export default Index;

