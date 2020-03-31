import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LoginStart extends Component {
    render() {
        return (
                <div className="loginGS">
                    <div>
                        <button className="btnRound">
                        <Link style={{ color: 'white', textDecoration: 'none' }} to="/GetStarted">Get Started </Link>
                        <span style={arrow}><i className="fas fa-chevron-right"></i>
                        </span>
                        </button>
                    </div>
                    <div>
                        <p style={linkLabel}>
                        <Link style={{ color: '#808B96', textDecoration: 'none' }} to="/AccountLogin">Login to Account</Link>
                        </p>
                    </div>
                </div>            
        )
    }
}

// green #30B7F7 blue #3D68C4
// pink #FF97AE

const linkLabel = {
    color: '#808B96 ',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: '12px'
}

const arrow = {
    marginLeft: '40px'
}

export default LoginStart
