import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import Page from './home.jsx';
import Address from './Address.jsx';

class Home extends React.Component
{
  render(){
    return(
      <div>
        APP  is working
      </div>
    );
  
   }
}

ReactDOM.render(<Home/>,
document.getElementById('test'));