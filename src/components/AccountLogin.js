import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AccountLogin extends Component {
    render() {
        return (
            <div className="AccountLogin" > 
                <input className="inStyle" type="text" placeholder="Email" />
                <br />
                <input className="inStyle" type="password" placeholder="Password" />
                <br/>
                <p style={pCheck}><input className="inCheck" type="checkbox" /> Remember Me</p>
                <button style={{ width: '100%', textAlign: 'center' }} className="btnRound">
                    <Link style={{ color: 'white', textDecoration: 'none' }} to="/">Sign In</Link>
                    <span className="arrow1"><i className="fas fa-chevron-right"></i>
                    </span>
                </button>
                <p style={ forgetPw }>Forgot your password?</p>
                <div className="hrdiv">Or</div>
                <button style={{ width: '100%', textAlign: 'center' }} className="btnRoundRev">
                    <Link style={{ color: '#505EE4', textDecoration: 'none' }} to="/GetStarted">Sign Up</Link>
                </button>
            </div>
        )
    }
}

const forgetPw = {
    fontSize: '12px',
    fontFamily: 'Arial',
    marginTop: '20px',
    color: '#505EE4'
}

const pCheck = {
    fontFamily: 'Arial',
    fontSize: '12px',
    color: '#4D5656',
    width: '95%',
    textAlign: 'left',
    marginBottom: '30px',
    
}

export default AccountLogin
