import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
                <span style={ drawer }><i className="fas fa-bars"></i></span>
                <span style={ chat }><i className="far fa-comment-dots"></i></span>
            </Link>
        </header>
    )
}
const drawer = {
    float: 'left',
    marginLeft: '20px',
    marginTop: '15px',
    color: '#808B96 ',
    fontSize: '25px'
}

const chat = {
    float: 'right',
    marginRight: '20px',
    marginTop: '15px',
    color: '#808B96 ',
    fontSize: '29px'
}


export default Header
