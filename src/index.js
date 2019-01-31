/*
	# Project : VOD
	# Team : Octelio
	# Author : @s43id
	# Revision : Aout 2018
*/

import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

import { Header } from './app/partials/Header';
import { Footer } from './app/partials/Footer';

import { HomeView } from './app/views/Home';
import { ContentView } from './app/views/Content';

import './assets/css/main.css';

class App extends Component {

	render() {
		return (
			<BrowserRouter>
				<div id="main">
					<Header />
					<div className="wrap">
						<Route path="/" component={HomeView} exact />
						<Route path="/pages/:content" component={ContentView} />
					</div>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

render(<App />, document.getElementById('app'));