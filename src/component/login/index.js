import React , {  useEffect ,useState }from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login=()=>{

    const [stop,SetStop] =useState(0);
    const [disabled,Setdisabled] =useState(0);
    const [message,SetMessage] =useState(null);

    const Sign = function getCategorie(){
        document.getElementById('loader').style.display='block';
        Setdisabled(1);
        let formData= new FormData();

        var data = [
            document.getElementById('email').value,
            document.getElementById('mdp').value
        ];

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
          
       
    }

    const btn = function btn(){
        if(disabled === 0){
            return <button onClick={()=>{ Sign() }} className='btn_login'>Se connecter</button>
        }else{
            return <button disabled className='btn btn-primary'>Chargement... </button>
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
                                    <img src='/img/bg_login.png'/>
                            </div>

                            <div className='col-md-6' data-aos='fade-in'>
                                <div className='login'>
                                    {messageR()}
                                    <h1>
                                        Se connecter
                                    </h1>
                                    <label>Addres mail</label>

                                    <div className='form-group'>
                                        <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                                        <input type='email' id='email' name='email' />
                                    </div>

                                    <label>Mot de passe</label>

                                    <div className='form-group'>
                                        <span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
                                        <input type='password' id='mdp' name='email' />
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

export default Login;

