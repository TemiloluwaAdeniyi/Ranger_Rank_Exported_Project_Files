import React/*, { useState }*/ from 'react';
import { Alert } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import './index.css';
import './soldier_selection.css';

export default class SoldierSelection extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        batch : '',
        soldier_id : '',
        notes: ''
    };
  }

  inputHandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    <div><Alert variant="success">Successfully Selected Solider!</Alert></div>
    alert("Successfully Selected Solider!");
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
                    Applicant Selection Page
                  </Badge>
                </h1>

                <form onSubmit={this.handleSubmit}>
                    <div class = 'applicant_info'>
                        <div class = 'batch-info'>
                            <p id = 'batch'>Batch:&emsp;</p>
                            <input type="text" name="batch" value={this.state.batch} onChange={this.inputHandler} style={textStyle}></input>
                        </div>
                        <div class = 'solider-id'>
                            <p id = 'soldier_id'>Soldier ID:&emsp;</p>
                            <input type="text" name="soldier_id" value={this.state.soldier_id} onChange={this.inputHandler} style={textStyle}></input>
                        </div>
                    </div>

                    <div class='buttons_container'>
                        <span class='buttons'>

                            <input type="submit" value="Submit" id='submitButton'></input>

                        </span>
                    </div>

                    <div id='applicant_notes' style={{top:'100px'}}>
                        <p id = 'notes'>Notes/Suggestions:&emsp;</p>
                        <textarea rows="3"></textarea>
                        {/* <input id="applicant_notes" type="text" name="notes" value={this.state.notes} onChange={this.inputHandler} style={{right:'100px'}}></input> */}
                    </div>

                </form>
                      <h5><pre>{JSON.stringify(this.state, null, 1)}</pre></h5>
                </div>
            </div>
          </div>
      </div>
    );}
  }