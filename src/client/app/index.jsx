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
      <h1> This is my first component created using node setup </h1>
      <Link to="/">home</Link>
      <Link to="/address">address</Link>
      {this.props.children}
      </div>
    );
  
   }
}

ReactDOM.render(<Router history={browserHistory}>
  <Route path="/" component={Home}>
    <IndexRoute component={Page}></IndexRoute>
    <Route path="/address" component={Address}></Route>
  </Route>
  </Router>,
document.getElementById('test'));