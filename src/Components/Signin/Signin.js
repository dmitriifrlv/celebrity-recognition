import React from 'react';
import './Signin.css';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          signInEmail: '',
          signInPassword: ''
        }
      }
    
      onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
      }
    
      onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
      }
    
      onSubmitSignIn = (event) => {
        event.preventDefault();
        fetch('https://warm-retreat-42776.herokuapp.com/signin', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            email: this.state.signInEmail,
            password: this.state.signInPassword
          })
        })
          .then(response => response.json())
          .then(user => {
            if (user.id) {
              this.props.loadUser(user)
              this.props.onRouteChange('home');
            }
          })
      }

    render() {
        const {onRouteChange} = this.props;
        return (
          <section>
            <header className="mt-3">Celebrity Recognition</header>
            <div className="body d-flex justify-content-center align-items-center">
              <main className="form-signin d-flex justify-content-center align-items-center">
                  <form onSubmit={this.onSubmitSignIn}>
                      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                      <label htmlFor="inputEmail" className="visually-hidden">Email address</label>
                      <input 
                      type="email" 
                      id="inputEmail" 
                      className="form-control" 
                      placeholder="Email address" 
                      onChange={this.onEmailChange}
                      required 
                      autoFocus/>
                      <label htmlFor="inputPassword" className="visually-hidden">Password</label>
                      <input 
                      type="password" 
                      id="inputPassword" 
                      onChange={this.onPasswordChange}
                      className="form-control" 
                      placeholder="Password" required/>
                      <div className="checkbox mb-3">
                      </div>
                      <button type="submit" className="w-100 btn btn-lg btn-primary"
                      onClick = {this.onSubmitSignIn}>Sign in</button>
                      <p className="w-100 btn btn-lg btn-primary mt-3" onClick={() => onRouteChange('register')}>Register</p>
                  </form>
              </main> 
          </div>
          </section>
            
        )
    }
}

export default Signin