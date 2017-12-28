import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar_Search from './search_components/AppBar_Search';
import TweetFeed_Search from './search_components/TweetFeed_Search';
import Trends_Search from './search_components/Trends_Search';
import Follow_Search from './search_components/Follow_Search';
import Card_Search from './search_components/Card_Search';
import Card2 from './search_components/Card2';
import SearchTitleStyle from './search_components/SearchTitle';
import Navigation from './search_components/Navigation';
import SearchFilter from './search_components/SearchFilter';
import RelatedSearch from './search_components/RelatedSearch';

class Search extends Component {
  render() {
    return (
			<MuiThemeProvider>
				<AppBar_Search />
				<SearchTitleStyle />	
				<Navigation />
				<SearchFilter />
				<RelatedSearch />
				<Follow_Search />
				<Card_Search />
				<Card2 />
				<TweetFeed_Search />
				<Trends_Search />
			</MuiThemeProvider>
		);
  }
}

export default Search;