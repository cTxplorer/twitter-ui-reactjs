import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

import './TweetFeed_Search.css';

const tweetFeedStyle = {
    // width: '500px'
}

class TweetFeed_Search extends React.Component {
    render() {
        return (
            <div className="tfdiv_s">
            <Paper zDepth={1} className="tweetFeed_s" style={tweetFeedStyle}>
                <Avatar 
                    src="https://pbs.twimg.com/profile_images/944247044339785728/sX_BIUrP_bigger.jpg"
                    size = {50}
                />
                <h4 className="authorName_s"> Johnson Rajkumar <span className="info_s"> @rohanchouhan98 · 1d </span> </h4>
                <p className="tweetContent_s"> If Aadhar was a person, his favorite band would be Linkin Park
                </p>
                <div className="feed_s">
                <Avatar 
                src="https://pbs.twimg.com/profile_images/519771245/q_bigger.JPG"
                size = {50}
                />
                <h4 className="authorName_s"> Rohan. <span className="info_s"> @rajkumarjohnson · Dec 22 </span> </h4>
                <p className="tweetContent_s"> How do I link my middle finger with Aadhar card? – looking
                     for recommendations </p>
                </div>

                <div className="feed1_s">
                <Avatar 
                    src="https://pbs.twimg.com/profile_images/897877073775083521/PGB92FzO_bigger.jpg"
                    size = {50}
                    className="authorPic4_s"
                />
                <h4 className="authorName_s"> RanbirKapoor.Net <span className="info_s"> @RanbirKapoorFC · 5h </span> </h4>
                <p className="tweetContent_s"> anbir, Armaan and Aadar playing with little Taimur 🤗 
                </p>
                <img className="pic_s" src = "https://pbs.twimg.com/media/DR5GRHhVAAEAiKK.jpg" />
                </div>
            </Paper>
            </div>
        );
    }
}

export default TweetFeed_Search;