import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import './Card.css';

class Card extends React.Component {
  render() {
    return(
      <Paper zDepth = {1} className="card">
        <div>
          <img className="header" src = "https://cdn-images-1.medium.com/max/2000/1*FB7eDwYTZu-UYCouj5Y-XQ.jpeg" />
          <div className="footer">
              <Avatar
                src = "https://pbs.twimg.com/profile_images/871078150385668097/ntt97_KN_400x400.jpg"
                size = {90}
                className="profilePic"
              />
            <div className="userInfo">
              <h3> Pratik Gadhiya</h3>
              <p> @pGxplorer_ </p>
            </div>
            <div className="statContainer">
              <div className="Button">
                <p className="title">Tweets</p>
                <p className="statnumber">35</p>
              </div>
              <div className="Button">
                <p className="title">Following</p>
                <p className="statnumber">174</p>
              </div>
              <div className="Button">
                <p className="title">Followers</p>
                <p className="statnumber">23</p>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    );
  }
}

export default Card;
