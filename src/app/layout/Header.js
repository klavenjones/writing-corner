import React from 'react';
import {Route} from 'react-dom';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => (

<div>
    <div className="header">
        <div className="site-branding">

            <div className="avatar">
                <img src="http://i1133.photobucket.com/albums/m591/klayboogie/Curt.png" alt="Curtis" />
            </div>
             <h1 className="site-title">
                Writing Silouhette 
             </h1>
            <h2 className="site-description">Sillo's Writing Corner</h2>
            <nav className="site-navigation" >
                <div className="menu-main-menu-container">
                    <ul className="nav-menu">
                        <li>
                         <Link to="/">About Me</Link>
                        </li>
                        <li>
                         <Link to="/blog">Posts</Link>
                        </li>
                    </ul>
                </div>  
            </nav>
        </div>
    </div>
</div>

)


export default Header;