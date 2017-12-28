import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from './home_components/AppBar';
import Card from './home_components/Card';
import Tweet from './home_components/Tweet';
import TweetFeed from './home_components/TweetFeed';
import Trends from './home_components/Trends';
import Follow from './home_components/Follow';
import Footer from './home_components/Footer';

class Home extends Component {
  render() {
    return (
			<MuiThemeProvider>
				<AppBar />
				<Card />
				<Tweet />
				<TweetFeed />
				<Follow />
				<Trends />
				<Footer />
			</MuiThemeProvider>
		);
  }
}

export default Home;