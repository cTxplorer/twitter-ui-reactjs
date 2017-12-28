import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import './TweetFeed.css';

const tweetFeedStyle = {
    // width: '500px'
}

class TweetFeed extends React.Component {
    render() {
        return (
            <div className="tfdiv">
            <Paper zDepth={1} className="tweetFeed" style={tweetFeedStyle}>
                <Avatar 
                    src="https://pbs.twimg.com/profile_images/829191018331385858/jxsj-ZmD_400x400.jpg"
                    size = {50}
                />
                <h4 className="authorName"> Neil Patel <span className="info"> @neilpatel · 38m </span> </h4>
                <p className="tweetContent"> 5 Ways to Turn a 404 Error into a Sale https://buff.ly/2p4Jc0B
                    <span className="hash"> #404 #sales #contentmarketing </span>
                </p>
                <img className="pic" src = "https://pbs.twimg.com/media/DRuKReEWsAAwJD8.jpg" />
               
                <Avatar 
                    src="https://pbs.twimg.com/profile_images/942666804534452230/4L7uIMBk_bigger.jpg"
                    size = {50}
                    className="authorPic"
                />
                <h4 className="authorName"> Hasura <span className="info"> @HasuraHQ · 1h </span> </h4>
                <p className="tweetContent"> Clone and deploy our <span className="hash"> #Golang #helloworld </span> boilerplate from 
                    <span className="hash"> http://bit.ly/2Dpd0Z5 </span>.
                    Get started with a simple <span className="hash"> #go #WebApp </span>
                    on a cluster in just 3 steps!
                    <span className="hash"> #appdev #webdev #tech #cloud #HowTo #DevOps </span>
                </p>
                <img className="pic" src = "https://pbs.twimg.com/media/DRuKEL_WAAAa1du.png" />
              
                <Avatar 
                    src="https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0_bigger.jpg"
                    size = {50}
                    className="authorPic"
                />
                <h4 className="authorName"> Elon Musk <span className="info"> @elonmusk · 1h </span> </h4>
                <p className="tweetContent"> If you liked tonight’s launch, you will really like Falcon
                     Heavy next month: 3 rocket cores & 3X thrust.  2 cores return to base doing 
                     synchronized aerobatics. 3rd lands on droneship.
                </p>
            </Paper>
            </div>
        );
    }
}

export default TweetFeed;