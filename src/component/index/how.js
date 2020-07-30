import React , {  useEffect }from 'react';
import { Link } from 'react-router-dom';

const How=()=>{

    return (
            <div> 
                <div className='container'>

                     <div id='how'>
                         <h1>
                             Comment sa marche ? 
                         </h1>

                         <div className='row how-content' data-aos='fade-up'>
                                <div className='col-md-6'>
                                    <h2>
                                    Césures de mots
                                    </h2>
                                    <p>
                                    Corrigez les erreurs de césure de mots avec une simple balise.
                                    </p>
                                </div>
                                <div className='col-md-6'>
                                   <center>
                                    <img src='/img/names.png'/>
                                   </center>
                                </div>
                        </div>

                        <div className='row how-content' data-aos='fade-up'>
                                <div className='col-md-6'>
                                    <h2>
                                    Argot
                                    </h2>
                                    <p>
                                    Reconnaissez facilement l’argot et le langage informel.
                                    </p>
                                </div>
                                <div className='col-md-6'>
                                   <center>
                                    <img src='/img/word-breaks.png'/>
                                   </center>
                                </div>
                        </div>

                        <div className='row how-content' data-aos='fade-up'>
                            <div className='col-md-6'>
                                <h2>
                                Noms
                                </h2>
                                <p>
                                Détectez les erreurs de noms courantes en contexte.
                                </p>
                             </div>
                             <div className='col-md-6'>
                                <center>
                                 <img src='/img/brands.png'/>
                                </center>
                            </div>
                        </div>

                        <div className='row how-content' data-aos='fade-up'>
                            <div className='col-md-6'>
                                <h2>
                                Homonymes
                                </h2>
                                <p>
                                Corrigez les homonymes et autres erreurs difficiles à identifier en contexte.
                                </p>
                             </div>
                             <div className='col-md-6'>
                                <center>
                                 <img src='/img/homonyms.png'/>
                                </center>
                             </div>
                        </div>

                        <div className='row how-content' data-aos='fade-up'>
                            <div className='col-md-6'>
                                <h2>
                                Marques
                                </h2>
                                <p>
                                Offrez la prise en charge de nouvelles marques et autres expressions inventées à mesure qu’elles émergent.
                                </p>
                             </div>
                             <div className='col-md-6'>
                               <center>
                                <img src='/img/slang.png'/>
                               </center>
                             </div>
                        </div>

                     </div>
                </div>

            </div>
        ); 
  }

export default How;

