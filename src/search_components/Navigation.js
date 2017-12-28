import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import './Navigation.css';

const navigationStyle = {
    height: '38px'
}

const style = {
    fontSize: '0.75em',
    fontWeight: 'bold',
    color: 'grey'
}

class SearchTitle extends React.Component {
    render() {
        return (
            <Paper zDepth={1} style={navigationStyle} className="navigation_s">
                <div className="navigationDiv_s">
					<FlatButton
					  label="Top"
                      labelStyle={style}
					/>
					<FlatButton
					  label="Latest"
					  labelStyle={style}
					/>
					<FlatButton
					  label="People"
					  labelStyle={style}
					/>
					<FlatButton
					  label="Photos"
					  labelStyle={style}
					/>
					<FlatButton
					  label="Videos"
					  labelStyle={style}
					/>
					<FlatButton
					  label="News"
					  labelStyle={style}
					/>
					<FlatButton
					  label="Broadcasts"
					  labelStyle={style}
					/>
                    <span className="followBox2_s">
                        <FlatButton label="Follow search" 
                          labelStyle={{color: '#69bdee', fontWeight: 'bold', fontSize: '0.8em'}} />
                    </span> 
                    <MoreVertIcon className="threeDots_s"/>
                    
                </div>
            </Paper>
        );
    }
}

export default SearchTitle;