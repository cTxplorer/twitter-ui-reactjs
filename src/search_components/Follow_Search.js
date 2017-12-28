import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import './Follow_Search.css';

const followStyle = {
    height: '290px'
}

const style = {
    fontWeight: 'bold',
    display: 'relative',
    top: '-9px',
    left: '-5px',
    fontSize: '0.7em',
    color: '#69bdee'
}

class Follow_Search extends React.Component {
    render() {
        return (
            <Paper zdepth={1} className="follow_s" style={followStyle}>
                <h3> Who to follow </h3>
                <div className="followDiv1_s">
                    <Avatar 
                        src="https://pbs.twimg.com/profile_images/568692371957612544/O_2Cq_Ma_bigger.jpeg"
                        size = {50}
                    />
                    <h4 className="userName_s"> Aadhar Malhotra <span className="info_s"> @aadharma...</span></h4>
                    <div className="followBox1_s">
                    <FlatButton label="Follow" className="followLabel1_s" labelStyle={style}/>
                    </div>
                </div>
                <div class="followDiv_s">
                    <Avatar 
                        src="https://pbs.twimg.com/profile_images/882480526354862080/7e6mna2U_bigger.jpg"
                        size = {50}
                    />
                    <h4 className="userName_s"> Aadar Jain <span className="info_s"> @AadarJain</span></h4>
                    <div className="followBox1_s">
                    <FlatButton label="Follow" className="followLabel1_s" labelStyle={style} />
                    </div> 
                </div>
                <div class="followDiv2_s">
                    <Avatar 
                        src="https://pbs.twimg.com/profile_images/944866737564069890/VZiaoTu0_bigger.jpg"
                        size = {50}
                    />
                    <h4 className="userName_s"> Krishna Pawle <span className="info_s"> @PawleKrishna</span></h4>
                    <div className="followBox1_s">
                    <FlatButton label="Follow" className="followLabel1_s" labelStyle={style} />
                    </div> 
                </div>
            </Paper>
        );
    }
}

export default Follow_Search;