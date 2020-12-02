import React/*, { useState }*/ from 'react';
import Badge from 'react-bootstrap/Badge';
import './index.css';

export default class Login extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      username_field : '',
      password_field : ''
    };
  }

  inputHandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render(){

    // var inputStyle = {
    //   width : "150px",
    //   height : "2.5vh",
    //   marginLeft : "auto",
    //   marginRight : "auto",
    //   left : "500px",
    //   padding : "10px"
    // };

    var textStyle = {
      width : "150px",
      height : "5vh",
      right: "50px",
      marginLeft : "auto",
      marginRight : "auto",
      padding : "5px"
    };
    /* In React to refer to a css class you write className, not classThat’s what ur errors in the console were about */
    return (
      <div className="App">
       <div className = 'container'>
            <div className = 'row mt-4'>
              <div className = 'col text-center'>
                <h1>
                  <Badge className = 'text-align-center' variant = 'light'>
                    Login Page
                  </Badge>
                </h1>

                <form onSubmit={this.handleSubmit}>
                  <div class = 'login-info'>
                    <p id = 'username'>Username:&emsp;</p>
                      <input type="text" name="username_field" value={this.state.username_field} onChange={this.inputHandler} style={textStyle}></input>
                  </div>
                  <div class = 'login-info'>
                      <p id = 'password'>Password:&emsp;</p>
                        <input type="password" name="password_field" value={this.state.password_field} onChange={this.inputHandler} style={textStyle}></input>
                  </div>

                  <div class='container2'>
                    <span class='buttons'>

                      <input type="submit" value="Login" id='loginButton'></input>
                      <input type="submit" value="Cancel" id='cancelButton'></input>

                      </span>
                  </div>

                </form>
                </div>
            </div>
          </div>
      </div>
    );}
  }