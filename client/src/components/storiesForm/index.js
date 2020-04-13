import React from "react";

import "../../components/storiesForm/style.css";

////mail////

// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'youremail@gmail.com',
//     pass: 'yourpassword'
//   }
// });

// var mailOptions = {
//   from: 'youremail@gmail.com',
//   to: 'myfriend@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

////mail////

class Forms extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        username: '',
        email: ''
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <form className="k-form">
                <fieldset>
                    <h1>First Name</h1>
                    <input
                        name='firstName'
                        placeholder='Mary'
                        value={this.state.firstName}
                        onChange={e => this.change(e)}
                    />
                    <br />
                    <h1>Last Name</h1>
                    <input
                        name='lastName'
                        placeholder=' Poppin'
                        value={this.state.lastName}
                        onChange={e => this.change(e)}
                    />
                    <br />
                    <h1>Username</h1>
                    <input
                        name='username'
                        placeholder='MaryP123'
                        value={this.state.username}
                        onChange={e => this.change(e)}
                    />
                    <br />
                    <h1>Email</h1>
                    <input
                        name='email'
                        placeholder='MaryPoppins@gmail.com'
                        value={this.state.email}
                        onChange={e => this.change(e)}
                    />
                    <br />
                
                    <button className="save-btn" onClick={e => this.onSubmit(e)}>
                        Submit
                    </button>
                    
                </fieldset>
            </form>
        )
    }
}

export default Forms;
