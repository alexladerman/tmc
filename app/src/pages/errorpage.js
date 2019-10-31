import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import ReturnHomeButton from '../components/returnhomebutton';

function ErrorPage() {
  return (    
    <div>

			<div id="footer">
    <div className="container medium" id="orderdiv">

      <header className="major last">
        <h2>OOOPS! AN ERROR OCCURRED</h2>
      </header>

      <p>Please try again shortly.</p>

      <ReturnHomeButton/>

      <ul className="copyright">
        <li>&copy; The Moving Company. All rights reserved.</li>
      </ul>

    </div>
  </div>

	</div>



);
  }
  
export default ErrorPage;
