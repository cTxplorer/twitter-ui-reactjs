import React from 'react';
import Paper from 'material-ui/Paper';

const pStyle = {
    color: 'grey',
    cursor: 'pointer'
}

const footerStyle = {
    height: '120px',
    width: '25%',
    position: 'relative',
    top: '-1800px',
    left: '905px',
    padding: '5px 10px'
}

class Footer extends React.Component {
    render() {
        return (
            <Paper zdepth={1} style={footerStyle}>
                <p style={pStyle}> © 2017  Twitter  About  Help&nbsp;Center  Terms  Privacy&nbsp;policy  Cookies  
                    Ads&nbsp;info  Brand  Blog  Status  Apps  Jobs  Marketing  Businesses  Developers </p>
            </Paper>
        );
    }
}

export default Footer;