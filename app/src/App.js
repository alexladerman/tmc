import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import HomePage from './pages/homepage'
import OrderPage from './pages/orderpage'
import SuccessPage from './pages/successpage'
import ErrorPage from './pages/errorpage'


function App() {
  return (    
    <div className="App">
			<Router>
					<Switch>
						{/* <Route path="/oidc-callback" component={(CallbackPage)}/> */}
						<Route exact={true} path="/" component={HomePage}/>
						<Route exact={true} path="/order" component={OrderPage}/>
						<Route exact={true} path="/success" component={SuccessPage}/>
						<Route exact={true} path="/error" component={ErrorPage}/>
					</Switch>
			</Router>
    </div>
  );
}

export default App;
