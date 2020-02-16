import React from 'react';
import ReactDOM from 'react-dom';

// using ES6 modules
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import Tumblr from './util/TumblrAPI'
import registerServiceWorker from './registerServiceWorker';









ReactDOM.render(
    (<Router>
        <App /> 
     </Router>), document.getElementById('root'));
registerServiceWorker();
