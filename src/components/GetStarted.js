import React, { Component } from 'react'

class GetStarted extends Component {
    render() {
        return (
            <div>
                <h3 style={userList}>Users</h3>
                <div style={{ textAlign:'left', margin: '20px' }}>
                    <p style={labelP}>First Name:</p>
                    <p style={infoP}>Em</p><br />

                    <p style={labelP}>Last Name:</p>
                    <p style={infoP}>Buenaventura</p><br />

                    <p style={labelP}>Contact Number:</p>
                    <p style={infoP}>09663601467</p><br />

                    <p style={labelP}>Email:</p>
                    <p style={infoP}>em@gmail.com</p><br />

                    <p style={labelP}>Gender:</p>
                    <p style={infoP}>M</p>
                </div>


            </div>
        )
    }
}

const userList = {
    marginTop: '50px',
    fontFamily: 'Arial'
}

const labelP = {
    display: 'inline-block',
    fontFamily: 'Arial',
    fontSize: '15px',
    color: '#808B96',
    width: '42%'
    
}

const infoP = {
    display: 'inline-block',
    fontFamily: 'Arial',
    fontSize: '15px',
}



export default GetStarted
