import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      loggedIn: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you'd send a request to the server to authenticate the user.
    // For this example, we'll simulate a successful login after a short delay.
    setTimeout(() => {
      this.setState({ loggedIn: true });
    }, 1000);
  }

  render() {
    if (this.state.loggedIn) {
      return (
        <div>
          <h2>Welcome, {this.state.username}!</h2>
          <p>You are now logged in.</p>
        </div>
      );
    }

    return (
      <div className='card w-25 d-inline-flex p-2'>
        <form onSubmit={this.handleSubmit}>
            
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

        </form>
      </div>
    );
  }
}

export default Login;
