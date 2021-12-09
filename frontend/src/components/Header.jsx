import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
      <div className='logo-nav'>
        <div>
         Rezervacija telefonu
        </div>
        <nav className='main-nav'>
            <ul>
                <li>
                <Link onClick to={"/home"}>
                    Home
                  </Link>
                </li>
                <li>
                <Link onClick to={'/admin'}>
                    Admin
                  </Link>
                  </li>
                
            </ul>
        <button  className='sign-up'>{<Link to='/signup'>Sign up</Link>}
            </button>
           
        </nav>
      </div>
    </header>
    )
}

export default Header
