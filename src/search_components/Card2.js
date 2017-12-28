import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Avatar from 'material-ui/Avatar';
import './Card2.css';

class Card extends React.Component {
  render() {
    return(
      <Paper zDepth = {1} className="card1_s">
        <div>
          <img className="header1_s" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIUgksd3Dr3hzwskRnKyM1EzZJPAAyL5WIGLqXlt6QWnrg_qCxZA" />
          <div className="footer1_s">
              <Avatar
                src = "https://pbs.twimg.com/profile_images/901702717998895105/tetOaBlA_bigger.jpg"
                size = {90}
                className="profilePic1_s"
              />
            <div className="userInfo1_s">
              <h3>Aadar Malik</h3>
              <p>@TheAadarGuy</p>
            </div>
            <p className="desc1_s">Actor / musician / comic.</p>
            
            <span className="followBox4_s">
                <FlatButton label="Follow" 
                  labelStyle={{color: '#69bdee', fontWeight: 'bold', fontSize: '0.8em'}} />
            </span> 
            <MoreVertIcon className="threeDots2_s"/>
          </div>
        </div>
      </Paper>
    );
  }
}

export default Card;
