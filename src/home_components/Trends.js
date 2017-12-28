import React from 'react';
import Paper from 'material-ui/Paper';
import './Trends.css';

const trendsStyle = {
    height: '500px'
}

class Trends extends React.Component {
    render() {
        return (
            <Paper zDepth = {1} className="trends" style={trendsStyle}>
                <h3> Trends for you </h3>
                <div>
                    <h4 className="trendTitle">#FooderScam</h4>
                    <h5 className="trendFooter">@GabbbarSingh is Tweeting about this</h5>
                </div>
                <div>
                    <h4 className="trendTitle">#KisanDiwas</h4>
                    <h5 className="trendFooter">11.4k Tweets</h5>
                </div>
                <div>
                    <h4 className="trendTitle">#ElClasico</h4>
                    <h5 className="trendFooter">176k Tweets</h5>
                </div>
                <div>
                    <h4 className="trendTitle">#HalaMadrid</h4>
                    <h5 className="trendFooter">19.2k Tweets</h5>
                </div>
                <div>
                    <h4 className="trendTitle">#JingleBella</h4>
                    <h5 className="trendFooter">1,401 Tweets</h5>
                </div>
                <div>
                    <h4 className="trendTitle">#AirDeccan</h4>
                </div>
                <div>
                    <h4 className="trendTitle">Goodwill Ambasador</h4>
                </div>
                <div>
                    <h4 className="trendTitle">#ChristmasAtPhoenix</h4>
                    <h5 className="trendFooter">2,112 Tweets</h5>
                </div>
            </Paper>
        );
    }
}

export default Trends;