import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import './Follow.css';

const followStyle = {
    height: '370px'
}

const style = {
    fontWeight: 'bold',
    display: 'relative',
    top: '-9px',
    left: '-5px',
    fontSize: '0.7em',
    color: '#69bdee'
}

class Follow extends React.Component {
    render() {
        return (
            <Paper zdepth={1} className="follow" style={followStyle}>
                <h3> Who to follow </h3>
                <div className="followDiv1">
                    <Avatar 
                        src="https://pbs.twimg.com/profile_images/806258881101971463/uRWBtE3z_bigger.jpg"
                        size = {50}
                    />
                    <h4 className="userName"> Lindsay Grumm <span className="info"> @grummlinds</span></h4>
                    <div className="followBox1">
                    <FlatButton label="Follow" className="followLabel1" labelStyle={style}/>
                    </div>
                </div>
                <div class="followDiv">
                    <Avatar 
                        src="https://pbs.twimg.com/profile_images/937382461918478336/AxXNkFRG_normal.jpg"
                        size = {50}
                    />
                    <h4 className="userName"> Ryan Florence <span className="info"> @ryanflorence</span></h4>
                    <div className="followBox1">
                    <FlatButton label="Follow" className="followLabel1" labelStyle={style} />
                    </div> 
                </div>
                <div class="followDiv2">
                    <Avatar 
                        src="https://pbs.twimg.com/profile_images/898977385420169216/JJJ8Hqbd_normal.jpg"
                        size = {50}
                    />
                    <h4 className="userName"> Santosh Panda <span className="info"> @santoshpanda</span></h4>
                    <div className="followBox1">
                    <FlatButton label="Follow" className="followLabel1" labelStyle={style} />
                    </div> 
                </div>
                <div class="followDiv3">
                    <Avatar 
                        src="https://pbs.twimg.com/profile_images/937994465519714304/iGYS6pxG_normal.jpg"
                        size = {50}
                    />
                    <h4 className="userName"> Arpit Kushwaha <span className="info"> @Sh_Ar_K </span></h4>
                    <div className="followBox1">
                    <FlatButton label="Follow" className="followLabel1" labelStyle={style} />
                    </div> 
                </div>
            </Paper>
        );
    }
}

export default Follow;