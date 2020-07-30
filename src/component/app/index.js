import React , { Component } from 'react';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class AppUse extends Component{
 

  corriger =()=>{

    // you can make here function
  }
  
  render(){
    
    return (
            <div>
             <div id='app'>
              <div className='row '>
                  <div className='col-md-2'  data-aos='fade-right'>
                    <h1>
                      App 
                    </h1>
                  </div>

                  <div className='col-md-8'  data-aos='fade-in'>
                    <CKEditor
                      editor={ ClassicEditor }
                      data="<p>Hello from CKEditor 5!</p>"
                      onInit={ editor => {
                          // You can store the "editor" and use when it is needed.
                          console.log( 'Editor is ready to use!', editor );
                      } }
                      onChange={ ( event, editor ) => {
                          const data = editor.getData();
                          console.log( { event, editor, data } );
                      } }
                      onBlur={ ( event, editor ) => {
                          console.log( 'Blur.', editor );
                      } }
                      onFocus={ ( event, editor ) => {
                          console.log( 'Focus.', editor );
                      } }
                  />
<br/>
                  <button onClick={()=>{
                    this.corriger()
                  }} className='btn btn-primary'> 
                    Corriger
                  </button> 
                  </div>

                  <div className='col-md-2' data-aos='fade-left'>
                      <div className='avert bleu'>
                          Adverbes , atteignant objectif  de 2 au moisn
                      </div>

                      <div className='avert violet'>
                          Utilisation  de la voix  passive , atteignant l'objectif de 2 ou moins 
                      </div>

                      <div className='avert yellow'>
                          Phrase  à une alternative plus simple 
                      </div>

                      <div className='avert orange'>
                          Phrase difficile à lire 
                      </div>
                      <div className='avert red'>
                          Phrase très difficile à lire
                      </div>
                  </div>
                </div>
             
             </div>

              
            </div>          
        ); 
  }
}

export default AppUse;

