import React , {  useEffect }from 'react';
import { Link } from 'react-router-dom';

const Footer=()=>{

    return (
            <div> 
                     <footer>
                         
                     <div className='container'>
                        <div className='row '>
                                 <div className='col-md-6' data-aos='fade-left'>
                                            <div className='footer'>

                                            <h1>
                                            A propos du correcteur
                                            </h1>
                                            <p>Ce module de correction a été conçu pour éliminer automatiquement les fautes les plus évidentes et les plus gênantes. Lorsque plusieurs corrections sont possibles, il vous indique que c’est à vous de choisir. Pour ne pas rajouter trop d’avertissements, ce correcteur peut laisser passer quelques fautes, il vous faut donc toujours relire pour choisir la bonne proposition et vous servir des outils complémentaires comme la grammaire, la conjugaison ou le dictionnaire pour éliminer les erreurs qui n’ont pas été détectées.</p>
                                        </div>
                                </div>

                                <div className='col-md-6' data-aos='fade-right'>
                                    <img src='/img/img_footer.png'/>
                                </div>
                                </div>
                        </div>
                     </footer>
            </div>
        ); 
  }

export default Footer;

