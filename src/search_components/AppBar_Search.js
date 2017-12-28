import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import ActionHome from 'material-ui/svg-icons/action/home';
import SocialNotifications from 'material-ui/svg-icons/social/notifications';
import CommunicationMessage from 'material-ui/svg-icons/communication/message';
import ActionSearch from 'material-ui/svg-icons/action/search';
import { white } from 'material-ui/styles/colors';
import './AppBar_Search.css';
  
const searchStyle = {
	height: '30px'
}

const style = {
	fontSize: '0.75em'
}

class AppBar_Search extends React.Component {
	render() {
		return (
			<Paper className="appBarStyle_s" zDepth={1}>
				<div className="appBarButtons_s">
				<a href="../"><FlatButton
					  label="Home"
					  icon={<ActionHome />}
						labelStyle={style}
					/></a>
					<FlatButton
					  label="Moments"
					  icon={
						  <Avatar
							  src="https://png.icons8.com/ios-glyphs/540/lightning-bolt.png"
							  size={20}
							  backgroundColor={white}
							/>
					  }
						labelStyle={style}
					/>
					<FlatButton
					  label="Notifications"
					  icon={<SocialNotifications />}
						labelStyle={style}
					/>
					<FlatButton
					  label="Messages"
					  icon={<CommunicationMessage />}
						labelStyle={style}
					/>
				</div>
				
				<a href="../"><Avatar
				  src="https://www.shareicon.net/download/2016/08/01/639808_media.svg"
				  size={30}
				  backgroundColor={white}
				  className="twitterBirdIcon_s"
				/></a>
				
				<div className="searchBox">
					<TextField
					  className="searchField_s"
					  underlineShow={false}
					  style={searchStyle}
					/>
					<a href="/search/">
						<ActionSearch className="searchIcon_s"/>
					</a>
				</div>
				
				<Avatar
					src="https://pbs.twimg.com/profile_images/871078150385668097/ntt97_KN_400x400.jpg"
					size={30}
					className="profileIcon_s"
				/>
				
				<div className="followBox_s">
				  <FlatButton label="Follow" className="followLabel_s" />
				</div> 
			</Paper>
		);
	}	
}

export default AppBar_Search;