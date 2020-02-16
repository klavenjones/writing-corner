import React from "react";
import "./Footer.css";

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';



const Footer = () => {

    return( 
        
        <div>
            <footer className="site-footer">
                <div className="site-info">
                    <Link to="/">Curtis Sillo's Blog</Link>
                </div>
                <div className="social-links">
                    <ul className="social-links-menu">
                        <li>
                            <a href="http://writingsilhouette.tumblr.com/">
                                <div className="icon">
                                    <FontAwesomeIcon icon={['fab', 'tumblr']} />
                                </div>
                            </a>
                        </li>
                        <li>
                           <a href="https://www.instagram.com/writingsilhouette/">
                               <div className="icon">
                                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                               </div>  
                           </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/Curtissillo27">
                                <div className="icon">
                                    <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                                </div>   
                            </a>     
                        </li>
                    </ul>
                </div>
            </footer>
        </div> 
    )



}

export default Footer;