import React from 'react';
import Paper from 'material-ui/Paper';
import './Trends_Search.css';

const trendsStyle = {
    height: '500px'
}

class Trends_Search extends React.Component {
    render() {
        return (
            <Paper zDepth = {1} className="trends_s" style={trendsStyle}>
                <h3> Worldwide trends </h3>
                <div>
                    <h4 className="trendTitle_s">#MerryChristmasEveryone</h4>
                    <h5 className="trendFooter_s">88.3k tweets</h5>
                </div>
                <div>
                    <h4 className="trendTitle_s">#OTDirecto25D</h4>
                    <h5 className="trendFooter_s">40.9k Tweets</h5>
                </div>
                <div>
                    <h4 className="trendTitle_s">#ChristmasDay</h4>
                    <h5 className="trendFooter_s">33.7k Tweets</h5>
                </div>
                <div>
                    <h4 className="trendTitle_s">#NBAXmas</h4>
                    <h5 className="trendFooter_s">29.1k Tweets</h5>
                </div>
                <div>
                    <h4 className="trendTitle_s">#DoctorWHO</h4>
                    <h5 className="trendFooter_s">22.7k Tweets</h5>
                </div>
                <div>
                    <h4 className="trendTitle_s">#Moscú</h4>
                    <h5 className="trendFooter_s">9,215 Tweets</h5>
                </div>
                <div>
                    <h4 className="trendTitle_s">Robbie Malinga</h4>
                </div>
                <div>
                    <h4 className="trendTitle_s">Ron Baker</h4>
                </div>
                <div>
                    <h4 className="trendTitle_s">マイルーム</h4>
                </div>
            </Paper>
        );
    }
}

export default Trends_Search;