import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import PlaceOrderButton from '../components/placeorderbutton';

function OrderPage() {
  return (    
    <div>

			<div id="footer">
    <div className="container medium" id="orderdiv">

      <header className="major last">
        <h2>PLACE YOUR ORDER</h2>
      </header>

      <p>Please complete and submit the order form below. We will get in touch with you shortly before the scheduled date.</p>

      <form method="post" action="#">
        <div className="row">
        <div className="col-12 col-12-mobilep">
            <input type="email" id="user_email" name="user_email" placeholder="User's email" />
          </div>
          <div className="col-12 col-12-mobilep">
            <input type="text" id="name" name="name" placeholder="Recipient" />
          </div>
          <div className="col-6 col-12-mobilep">
            <input type="email" id="email" name="email" placeholder="Recipient's email" />
          </div>
          <div className="col-6 col-12-mobilep">
            <input type="text" id="phone" name="phone" placeholder="Recipient's phone" />
          </div>
          <div className="col-6 col-12-mobilep">
            <input type="text" id="from" name="from" placeholder="From address"/>
          </div>
          <div className="col-6 col-12-mobilep">
            <input type="text" id="to" name="to"  placeholder="To address"/>
          </div>
          <div className="col-4 col-12-mobilep">
            <input type="checkbox" id="packing" name="packing" />
            <label for="packing">Packing</label>
          </div>        
          <div className="col-4 col-12-mobilep">
            <input type="checkbox" id="moving" name="moving" />
            <label for="moving">Moving</label>
          </div>
          <div className="col-4 col-12-mobilep">
          <input type="checkbox" id="cleaning" name="cleaning" />
            <label for="cleaning">Cleaning</label>
          </div>
          <div className="col-6 col-12-mobilep">
            <input type="date" id="date" name="date" placeholder="Service date" />
          </div>
          <div className="col-12">
            <textarea id="message" name="message" placeholder="Message" rows="6"></textarea>
          </div>
          <div className="col-12">
            <ul className="actions special">
              <li><input type="submit" onClick={
                (event)=> {

                event.preventDefault()
                          
                const postBody = 

                {
                  "user_email": document.getElementById("user_email").value,
                  "name": document.getElementById("name").value,
                  "email": document.getElementById("email").value,
                  "phone": document.getElementById("phone").value,
                  "fromaddress": document.getElementById("from").value,
                  "toaddress": document.getElementById("to").value,
                  "services": document.getElementById("packing").checked ? "packing" : "" + document.getElementById("moving").checked ? "moving" : "" + document.getElementById("cleaning").checked ? "cleaning" : "",
                  "movingdate": document.getElementById("date").value,
                  "message": document.getElementById("message").value
                }
                
                try {

                  console.log("placing order")
                  const response = fetch('http://localhost:3002/orders', {
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                    },
                    method: 'post',
                    body: JSON.stringify(postBody),
                  })
                  
                  console.log("order placed")
                  window.location = '/success'
                                    
                } catch (error) {
                  window.location ='/error'
                  console.log(error)
                }

              }}value="Place order" /></li>
            </ul>
          </div>
        </div>
      </form>

      <ul className="copyright">
        <li>&copy; The Moving Company. All rights reserved.</li>
      </ul>

    </div>
  </div>

	</div>



);
  }
  
export default OrderPage;
