import React from "react";
import "../../components/storiesForm/style.css";

class Contact extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        story: ''
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
                    <h1 style={{ fontSize: '50px' }}>Enter First Name</h1>
                    <input
                        name='firstName'
                        placeholder='Mary'
                        value={this.state.firstName}
                        onChange={e => this.change(e)}
                    />
                    <br />
                    <h1 style={{ fontSize: '50px' }}>Enter Last Name</h1>
                    <input
                        name='lastName'
                        placeholder='Poppins'
                        value={this.state.lastName}
                        onChange={e => this.change(e)}
                    />
                    <br />
                    <h1 style={{ fontSize: '50px' }}>Enter Valid Email</h1>
                    <input
                        name='email'
                        placeholder='Marypoppins@gmail.com'
                        value={this.state.email}
                        onChange={e => this.change(e)}
                    />
                    <br />
                    <h1 style={{ fontSize: '50px' }}>Your Story</h1>
                    <textarea
                        name='story'
                        placeholder='Share your story'
                        value={this.state.story}
                        onChange={e => this.change(e)}
                    />
                    <br />
                    <button className="save-btn" onClick={e => this.onSubmit(e)}>Submit</button>
                </fieldset>
            </form>
        )
    }
}

export default Contact;