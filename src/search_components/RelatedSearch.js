import React from 'react';
import Paper from 'material-ui/Paper';
import './RelatedSearch.css';

const relatedStyle = {
    width: '20%'
}

class RelatedSearch extends React.Component {
    render() {
        return (
            <Paper zDepth={1} style={relatedStyle} className="relatedPaper_s">
                <div className="relatedDiv_s">
                    <p><b>  Realted Search </b></p>
                    <p><b>
                    <ul>
                    <li>cvoter</li>
                    <li>delhi</li>
                    <li>gujarat elections</li>
                    <li>the centre</li>
                    <li>gujarat bjp</li>
                    </ul></b></p>
                </div>
            </Paper>    
        );
    }
}

export default RelatedSearch;