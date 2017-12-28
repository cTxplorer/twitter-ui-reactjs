import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Avatar from 'material-ui/Avatar';
import './Card_Search.css';

class Card_Search extends React.Component {
  render() {
    return(
      <div className="card_s">
      <h3> People </h3>
      <Paper zDepth = {1}>
        <div>
          <img className="header_s" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAGlE7Y8M04LAiFDQljr2HOzbsOGrKwknIJuLLGW4lKjhXsIGd" />
          <div className="footer_s">
              <Avatar
                src = "https://pbs.twimg.com/profile_images/882480526354862080/7e6mna2U_bigger.jpg"
                size = {90}
                className="profilePic_s"
              />
            <div className="userInfo_s">
              <h3>Aadar Jain</h3>
              <p>@AadarJain</p>
            </div>
            <p className="desc_s">Actor (work in progress)</p>
            
            <span className="followBox3_s">
                <FlatButton label="Follow" 
                  labelStyle={{color: '#69bdee', fontWeight: 'bold', fontSize: '0.8em'}} />
            </span> 
            <MoreVertIcon className="threeDots1_s"/>
          </div>
        </div>
      </Paper>
      </div>
    );
  }
}

export default Card_Search;
