/* 
Author: Richard McHorgh
Date: 6 Feb 2018
Title: APUSH Timeline
*/

import React from 'react';
import './App.sass';
import SearchComp from './comps/search';
import { BrowserRouter as Router, Route } from "react-router-dom";
import people from './pages/people';
import helpout from './pages/help-out';
import event from './pages/event';

const People = people;
const HelpOut = helpout;
const Event = event;

function App() {
  return (
		<Router>
			<div className="app">
				<h1>APUSH Timeline</h1>
				<p>This is just a little tool to help me study for APUSH.</p>
				<a href="https://github.com/r2awes/APUSH-Timeline">Leave some comments on my github page here!</a>
				<p>Thanks to Wikipedia for some of the inputs.</p>

				<SearchComp />

				<div className="view">
					<Route path="/person" exact component={People}/>
					<Route path="/event" exact component={Event}/>
					<Route path="/help-out" exact component={HelpOut}/>
					<div className="spacer"/>
					<div className="tagline">
						<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/185/flag-for-united-states_1f1fa-1f1f8.png" alt="🇺🇸"/>
						<a href="http://r2awes.github.io">
							Built by Richard McHorgh
						</a>
						<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/185/flag-for-jamaica_1f1ef-1f1f2.png" alt="🇯🇲"/>
					</div>
				</div>
			</div>


		</Router>
  );
}

export default App;
