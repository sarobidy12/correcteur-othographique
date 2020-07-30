import React , {  useEffect }from 'react';
import { Link } from 'react-router-dom';

const Hero=()=>{

    return (
            <nav>
                <div className='container'>
                <div className='row'>

                    <div className='col-md-8'>
                        <h1><Link to='/'>PetitHuggo.com </Link></h1>
                    </div>

                    <div className='col-md-4'>
                        <ul>
                            <li>
                                <Link to='/login' className='login_nav'>
                                Se connecter
                                </Link>
                            </li>
                            <li>
                            <Link to='/signUp' className='sign_nav'>
                                S'inscrire
                            </Link>
                            </li>
                        </ul>
                    </div>

                    </div>
                    </div>
            </nav>
        ); 
  }

export default Hero;

