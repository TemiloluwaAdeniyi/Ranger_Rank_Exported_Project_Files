import React/*, { useState }*/ from 'react';
import Badge from 'react-bootstrap/Badge';
import './index.css';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Form from 'react-bootstrap/Form'

export default class SignUp extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        first_name_field : '',
        last_name_field : '',
        job_field : "noJobSelected",
        email_field : '',
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
    var textStyle = {
      width : "150px",
      height : "5vh",
      right: "50px",
      marginLeft : "auto",
      marginRight : "auto",
      padding : "5px"
    };
    /* In React to refer to a css class you write className, not class. That’s what ur errors in the console were about */
    return (
        // <form>
        //     <label>
        //         Name:
        //         <input type="text" name="name" />
        //     </label>
        //     <input type="submit" value="Submit" />
        // </form>

      <div className="App">
       <div className = 'container'>
            <div className = 'row mt-4'>
              <div className = 'col text-center'>
                <h1>
                  <Badge className = 'text-align-center' variant = 'light'>
                    Sign Up Page
                  </Badge>
                </h1>

                <form onSubmit={this.handleSubmit}>
                    <div class = 'names_container'>
                        <div class = 'signup-info'>
                            <p id = 'first_name'>First Name:&emsp;</p>
                            <input type="text" name="first_name_field" value={this.state.first_name_field} onChange={this.inputHandler} style={textStyle}></input>
                        </div>
                        <div class = 'signup-info'>
                            <p id = 'last_name'>Last Name:&emsp;</p>
                            <input type="text" name="last_name_field" value={this.state.last_name_field} onChange={this.inputHandler} style={textStyle}></input>
                        </div>
                    </div>
                    <div class = 'job_container'>
                     <p>Role:&emsp;</p>
                      <select value={this.state.job_field} onChange={this.inputHandler} id="job_selector">
                        <option value="noJobSelected">Select a Job</option>
                        <option value="Psychologist">Psychologist</option>
                        <option value="Nurse">Nurse</option>
                        <option value="Deputy">Deputy</option>
                      </select>
                     
                      {/* <Form.Group>
                          <Form.Label>Job</Form.Label>
                          <Form.Control as="select"
                          value={this.state.job_field}
                          onChange={this.handleSubmit}>
                              <option value={"Psychologist"}>Psychologist</option>
                              <option value={"Nurse"}>Nurse</option>
                              <option value={"Deputy"}>Deputy</option>
                          </Form.Control>
                      </Form.Group> */}

                        {/* <FormControl>
                            <InputLabel id="demo-simple-select-label">Job</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.job_field}
                                onChange={this.handleSubmit}
                            >
                                <MenuItem value={"Psychologist"}>Psychologist</MenuItem>
                                <MenuItem value={"Nurse"}>Nurse</MenuItem>
                                <MenuItem value={"Deputy"}>Deputy</MenuItem>
                            </Select>
                        </FormControl> */}
                    </div>

                    <div class = 'email_container'>
                        <p id = 'email'>Email Address:&emsp;</p>
                        <input type="text" name="email_field" value={this.state.email_field} onChange={this.inputHandler} style={textStyle}></input>
                    </div>
                    <div class = 'username_password_container'>
                        <div class = 'signup-info'>
                            <p id = 'username'>Username:&emsp;</p>
                            <input type="text" name="username_field" value={this.state.username_field} onChange={this.inputHandler} style={textStyle}></input>
                        </div>
                        <div class = 'signup-info'>
                            <p id = 'password'>Password:&emsp;</p>
                            <input type="password" name="password_field" value={this.state.password_field} onChange={this.inputHandler} style={textStyle}></input>
                        </div>
                    </div>
                  
                    <div class='buttons_container'>
                        <span class='buttons'>

                            <input type="submit" value="Register" id='registerButton'></input>
                            <input type="submit" value="Cancel" id='cancelButton'></input>

                        </span>
                    </div>
                </form>
                      <h5><pre>{JSON.stringify(this.state, null, 1)}</pre></h5>
                </div>
            </div>
          </div>
      </div>
    );}
  }