import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PlaceOrderButton from '../components/placeorderbutton';

function HomePage() {
  return (    
    <div>
      <div id="header">
				<span className="logo icon fa-paper-plane"></span>
				<h1>The Moving Company</h1>
				<p>A complete provider of relocation services.
				<br />
        Packing. Moving. Cleaning. 
        </p>
			</div>

			<div id="main">

				<header className="major container medium">
					<h2>We take extra special care of you
					<br />
					and help you every step of the way
					<br /></h2>
				</header>

				<div className="box alt container">
					<section className="feature left">
						<a href="#" className="image icon solid fa-dolly"><img src="images/pic01.jpg" alt="" /></a>
						<div className="content">
							<h3>Packing</h3>
							<p>We take great care and pride in carefully packing all your belongings ready for transportation or storage. We can provide all the boxes and other packing material necessary for the job
              <br />
               <PlaceOrderButton></PlaceOrderButton>
              </p>
  					</div>
					</section>
					<section className="feature right">
						<a href="#" className="image icon solid fa-shipping-fast"><img src="images/pic02.jpg" alt="" /></a>
						<div className="content">
							<h3>Moving</h3>
							<p>                
                We can transport all kinds of items including moving boxes, furniture and even pianos. We securely transport your goods and can unpack your boxes at your new home. We work quickly and efficiently at competitive prices.
                <br />
								<PlaceOrderButton></PlaceOrderButton>
              </p>
						</div>
					</section>
					<section className="feature left">
						<a href="#" className="image icon solid fa-tint"><img src="images/pic03.jpg" alt="" /></a>
						<div className="content">
							<h3>Cleaning</h3>
							<p>
                Clean your home professionally with a guarantee against complaints after the takeover. Worry not about cleaning out your old place. You can rest assured the new occupants will find everything to their satisfaction.
                <br />
								<PlaceOrderButton></PlaceOrderButton>
              </p>
						</div>
					</section>
				</div>

				{/* <div className="box container">
					<header>
						<h2>A lot of generic stuff</h2>
					</header>
					<section>
						<header>
							<h3>Paragraph</h3>
							<p>This is the subtitle for this particular heading</p>
						</header>
						<p>Phasellus nisl nisl, varius id <sup>porttitor sed pellentesque</sup> ac orci. Pellentesque
						habitant <strong>strong</strong> tristique <b>bold</b> et netus <i>italic</i> malesuada <em>emphasized</em> ac turpis egestas. Morbi
						leo suscipit ut. Praesent <sub>id turpis vitae</sub> turpis pretium ultricies. Vestibulum sit
						amet risus elit.</p>
					</section>
					<section>
						<header>
							<h3>Blockquote</h3>
						</header>
						<blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget.
						tempus euismod. Vestibulum ante ipsum primis in faucibus.</blockquote>
					</section>
					<section>
						<header>
							<h3>Divider</h3>
						</header>
						<p>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra
						ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel. Praesent nec orci
						facilisis leo magna. Cras sit amet urna eros, id egestas urna. Quisque aliquam
						tempus euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
						posuere cubilia.</p>
						<hr />
						<p>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra
						ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel. Praesent nec orci
						facilisis leo magna. Cras sit amet urna eros, id egestas urna. Quisque aliquam
						tempus euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
						posuere cubilia.</p>
					</section>
					<section>
						<header>
							<h3>Unordered List</h3>
						</header>
						<ul className="default">
							<li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
							<li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
							<li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
							<li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
						</ul>
					</section>
					<section>
						<header>
							<h3>Ordered List</h3>
						</header>
						<ol className="default">
							<li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
							<li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
							<li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
							<li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
						</ol>
					</section>
					<section>
						<header>
							<h3>Table</h3>
						</header>
						<div className="table-wrapper">
							<table className="default">
								<thead>
									<tr>
										<th>ID</th>
										<th>Name</th>
										<th>Description</th>
										<th>Price</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>45815</td>
										<td>Something</td>
										<td>Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</td>
										<td>29.99</td>
									</tr>
									<tr>
										<td>24524</td>
										<td>Nothing</td>
										<td>Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</td>
										<td>19.99</td>
									</tr>
									<tr>
										<td>45815</td>
										<td>Something</td>
										<td>Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</td>
										<td>29.99</td>
									</tr>
									<tr>
										<td>24524</td>
										<td>Nothing</td>
										<td>Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</td>
										<td>19.99</td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<td colspan="3"></td>
										<td>100.00</td>
									</tr>
								</tfoot>
							</table>
						</div>
					</section>
					<section>
						<header>
							<h3>Form</h3>
						</header>
						<form method="post" action="#">
							<div className="row">
								<div className="col-6 col-12-mobilep">
									<label for="name">Name</label>
									<input className="text" type="text" name="name" id="name" value="" placeholder="John Doe" />
								</div>
								<div className="col-6 col-12-mobilep">
									<label for="email">Email</label>
									<input className="text" type="text" name="email" id="email" value="" placeholder="johndoe@domain.tld" />
								</div>
								<div className="col-12">
									<label for="subject">Subject</label>
									<input className="text" type="text" name="subject" id="subject" value="" placeholder="Enter your subject" />
								</div>
								<div className="col-12">
									<label for="subject">Message</label>
									<textarea name="message" id="message" placeholder="Enter your message" rows="6"></textarea>
								</div>
								<div className="col-12">
									<ul className="actions special">
										<li><input type="submit" value="Send" /></li>
										<li><input type="reset" value="Reset" className="alt" /></li>
									</ul>
								</div>
							</div>
						</form>
					</section>
				</div> */}

				{/* <footer className="major container medium">
					<h3>Get shady with science</h3>
					<p>Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur tempor orci penatibus. Tellus erat mauris ipsum fermentum etiam vivamus.</p>
					<ul className="actions special">
						<li><a href="#" className="button">Join our crew</a></li>
					</ul>
				</footer> */}

			</div>

			<div id="footer">
				<div className="container medium">

					{/* <header className="major last">
						<h2>Questions or comments?</h2>
					</header>

					<p>Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur tempor
					orci penatibus. Tellus erat mauris ipsum fermentum etiam vivamus.</p> */}


					<ul className="icons">
						<li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
						<li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
						<li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
						<li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
						<li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
					</ul>

					<ul className="copyright">
						<li>&copy; The Moving Company. All rights reserved.</li>
					</ul>

				</div>
			</div>      
    </div>

);
  }
  
export default HomePage;
