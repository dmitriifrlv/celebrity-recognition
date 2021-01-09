import React from 'react';
import './Register.css';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }
    onNameChange = (event) => {
        this.setState({name:event.target.value})
    }
    onEmailChange = (event) => {
        this.setState({email:event.target.value})
    }
    onPasswordChange = (event) => {
        this.setState({password:event.target.value})
    }

    onSignInChange = (event) => {
        this.props.onRouteChange('signin')
    }

    onSubmitSignIn = (event) => {
        event.preventDefault();
        fetch('https://warm-retreat-42776.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
            .then(response => response.json())
            .then(user=>{  
                if (user.name && user.email) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home')
            }
        })   
    }

    render() {
        return (
            <div className="body d-flex justify-content-center align-items-center">
                <main className="form-signin d-flex justify-content-center align-items-center">
                    <form onSubmit={this.onSubmitSignIn} >
                        <img className="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
                        <h1 className="h3 mb-3 fw-normal">Register form</h1>
                        <label htmlFor="inputName" className="visually-hidden">Name</label>
                        <input 
                        onChange={this.onNameChange}
                        type="name" 
                        id="inputName" 
                        className="form-control" 
                        placeholder="Enter your name" 
                        required 
                        autoFocus/>
                        <label htmlFor="inputEmail" className="visually-hidden">Email address</label>
                        <input 
                        onChange={this.onEmailChange}
                        type="email" 
                        id="inputEmail" 
                        className="form-control" 
                        placeholder="Email address" 
                        required 
                        autoFocus/>
                        <label htmlFor="inputPassword" className="visually-hidden">Password</label>
                        <input 
                        onChange={this.onPasswordChange}
                        type="password" 
                        id="inputPassword" 
                        className="form-control" 
                        placeholder="Password" 
                        minLength = "6"
                        required/>
                        <div className="checkbox mb-3">
                        </div>
                        <button 
                        className="w-100 btn btn-lg btn-primary" 
                        type="submit" 
                        >Register</button>
                        <p className = "ma-1">Already have an account?</p>
                        <button 
                        className="w-100 btn btn-lg btn-primary" 
                        type="submit" 
                        onClick={this.onSignInChange}
                        >Sign In</button>
                    </form>
                </main> 
            </div>
        )
    }
}

export default Register