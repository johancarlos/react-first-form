import React, {Component} from 'react'

class Login extends Component{
  render(){
    return(
      <div>
        <h1>BIENVENIDO</h1>
        <form>
          <label>username:</label>
          <input name="username"/>
          <br/>
          <br/>
          <label>password:</label>
          <input name="password" type="password"/>
          <br/>
          <button>LOGIN</button>
          <br/><br/>
        </form>
      </div>
    );
  }
}

export default Login;
