import React from 'react';
import Paper from 'material-ui/Paper';
import { blue500 } from 'material-ui/styles/colors';
import './SearchTitle.css';

const searchTitleStyle = {
    backgroundColor: blue500,
    height: '100px'
}

class SearchTitle extends React.Component {
    render() {
        return (
            <Paper zDepth={1} style={searchTitleStyle} className="searchTitle_s">
                <div className="searchTitleDiv_s">
                    <h2> aadhar </h2>
                    <p> Including results for <b><i>aadar</i></b>. Search only for <b><u>aadhar</u></b> instead. </p>
                </div>
            </Paper>
        );
    }
}

export default SearchTitle;