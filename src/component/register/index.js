import React , {  useEffect, useState }from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUp=()=>{

    const [stop,SetStop] =useState(0);
    const [disabled,Setdisabled] =useState(0);
    const [message,SetMessage] =useState(null);

    const Sign = function getCategorie(){
        document.getElementById('loader').style.display='block';
        Setdisabled(1);
        let formData= new FormData();

        var data = [
            document.getElementById('prenom').value,
            document.getElementById('email').value,
            document.getElementById('mdp1').value
        ];

        if(document.getElementById('mdp1').value === document.getElementById('mdp2').value){

            if(document.getElementById('mdp1').value.length > 5){
                formData.append("text",data);
                const url= 'http://localhost/huggo/register.php'; 
                axios.post(url,formData)
                .then((res)=>{
                    console.log(res.data);
                    
                    if(res.data ==='add-user-success'){
                        document.getElementById('loader').style.display='none';
                        Setdisabled(0);
                    }else{

                        SetMessage('Vous ête déja inscrit , connectez-vous !');
                        Setdisabled(0);
                        document.getElementById('loader').style.display='none'; 
                    }
                });
            }else{
            }
          
        }else{
            SetMessage('Mot de passe ne sont indentique ');
            Setdisabled(0);
            document.getElementById('loader').style.display='none';
        }
       
    }

    const btn = function btn(){
        if(disabled === 0){
            return <button onClick={()=>{ Sign() }} className='btn_login'>S'inscrire</button>
        }else{
            return <button disabled  className='btn btn-primary'>Chargement ... </button>
        }
    }

    const messageR = function messageR(){

        if(message != null){
            return   <div className='alert alert-danger'>{message}</div>
        }
       
    }

    return (
            <div> 
                <div id='login_register'>
                    <div className='container'>
                        <div className='row'>
                        <div id='loader'>
                                        <div className="cs-loader">
                                            <div className="cs-loader-inner">
                                                <span>●</span>
                                                <span>●</span>
                                                <span>●</span>
                                                <span>●</span>
                                                <span>●</span>
                                                <span>●</span>
                                            </div>
                                        </div>
                                </div>
                            <div className='col-md-6' data-aos='fade-in'>
                                    <img src='/img/bg_sign.png'/>
                            </div>

                            <div className='col-md-6' data-aos='fade-in'>
                                <div className='login'>

                                  {messageR()}
                                    <h1>
                                        S'inscire
                                    </h1>
                                   
                                    <label>Prénom</label>
                                    <div className='form-group'>
                                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                                        <input type='text' id='prenom' name='prenom' />
                                    </div>

                                    <label>Addres mail</label>

                                    <div className='form-group'>
                                        <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                                        <input type='email' id='email' name='email' />
                                    </div>

                                    <label>Mot de passe</label>

                                    <div className='form-group'>
                                        <span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
                                        <input type='password' id='mdp1' name='mdp1' />
                                    </div>

                                    <label>Comfirmé le mot de passe</label>
                                    <div className='form-group'>
                                        <span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
                                        <input type='password'  id='mdp2' name='mdp2' />
                                    </div>

                                    {btn()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ); 
  }

export default SignUp;

