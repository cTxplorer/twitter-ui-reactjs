import React from 'react';
import Paper from 'material-ui/Paper';
import './SearchFilter.css';

const filterStyle = {
    width: '20%'
}

class SearchFilter extends React.Component {
    render() {
        return (
            <Paper zDepth={1} style={filterStyle} className="filterPaper_s">
                <div className="filterDiv_s">
                    <p><b>  Search filters </b>· <a href="/">show</a> </p>
                </div>
            </Paper>    
        );
    }
}

export default SearchFilter;