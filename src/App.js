/* 
Author: Richard McHorgh
Date: 6 Feb 2018
Title: APUSH Timeline
*/

import React from 'react';
import './App.sass';
import SearchComp from './comps/search';

function App() {
  return (
    <div className="app">
      <h1>APUSH Timeline</h1>
			<p>This is just a little tool to help me study for APUSH.</p>
			<a href="https://github.com/r2awes/APUSH-Timeline">Leave some comments on my github page here!</a>
			<p>Thanks to Wikipedia for some of the inputs.</p>

			<SearchComp />
    </div>
  );
}

export default App;
