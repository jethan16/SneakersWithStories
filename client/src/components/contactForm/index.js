import React from "react";


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
            <form>
                <input 
                name='firstName'
                placeholder='First name' 
                value={this.state.firstName} 
                onChange={e => this.change(e)}
                />
                <br />
               <input 
                name='lastName'
                placeholder='Last name' 
                value={this.state.lastName} 
                onChange={e => this.change(e)}
                />
                <br />
                <input 
                name='email'
                placeholder='Email' 
                value={this.state.email} 
                onChange={e => this.change(e)}
                />
                <br />
                <textarea
                name='story'
                placeholder='Share your story'
                value={this.state.story}
                onChange={e => this.change(e)}
                />

                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        )
    }
}

  export default Contact;