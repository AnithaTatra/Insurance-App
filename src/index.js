import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
//import Appp from './SecondApp';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import Appp from 'E:/NewREACTANDNODE/InsuranceApp/src/components/pages/FirstLogin.js';


ReactDOM.render(<Router><Appp /></Router>, document.getElementById('root'));

registerServiceWorker();
