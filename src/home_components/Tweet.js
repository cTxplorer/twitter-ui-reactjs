import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import ImageImage from 'material-ui/svg-icons/image/image';
import './Tweet.css';

const tweetStyle = {
    height: '80px',
}
class Tweet extends React.Component {
    render() {
        return (
            <Paper zDepth = {1} className="tweet" style={tweetStyle}>
                <Avatar 
                    src="https://pbs.twimg.com/profile_images/871078150385668097/ntt97_KN_400x400.jpg"
                    size = {30}
                    className="profilePic1"
                />
                <div className="tweetBox">
                    <TextField
                        className="tweetField"
                        rows={2}
                        fullWidth={true}
                        hintText="What's Happening, Pratik?"
                    />
                    <a href="#">
                        <ImageImage color="#1569F7" className="imageIcon"/>
                    </a>
                </div>           
            </Paper>
        );
    }
}

export default Tweet;