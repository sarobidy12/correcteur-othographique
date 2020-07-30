import React , {  useEffect }from 'react';
import { Link } from 'react-router-dom';

const Hero=()=>{

    return (
            <div> 
                    <div id='hero'>
                         <div className='row'>
                           
                             <div className='col-md-6' data-aos='fade-right'>
                                 <center>
                                     <img src='/img/hero.png'/>
                                 </center>
                             </div>
                             <div className='col-md-6' data-aos='fade-left'>
                                 <div className='hero-container'>
                                     <h1>
                                            PetitHuggo.com
                                     </h1>
                                     <p>
                                            PetitHuggo.com  aide les utilisateurs à corriger les fautes d’orthographe, à reconnaître les différences entre les noms, les noms de marques et l’argot, et à comprendre les homophones lors de la frappe.
                                     </p>
                                     <Link to='/app'>Commencer</Link>
                                     <button to='/app' onClick={()=>{
                                         window.scrollTo({
                                             top:800,
                                             behavior:'smooth'
                                         })
                                     }} >comment sa marche ?</button>
                                 </div>
                             </div>
                         </div>
                    </div>
            </div>
        ); 
  }

export default Hero;

