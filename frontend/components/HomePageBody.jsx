import React from 'react';
import Promos from './Promos.jsx'

export default class HomePageBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      passwordConfirm: "",
      messages: []
    }
  }

  updateState(target, value) {
    let newState = {};

    newState[target] = value;
    this.setState(newState);
  }


  update(field) {
    return (event) => {
      this.updateState(field,event.currentTarget.value);
    };
  }

  handleSubmit() {
    return (event) => {
      console.log("submit running");
      let errors = this.checkInputs();
      if (errors.length === 0) {
        let message = ["all inputs valid!"]
        this.updateState('messages', message);
      } else {
        this.updateState('messages', errors);
      }
    }
  }

  checkInputs() {
    const fields = ["fname", "lname", "email", "password", "passwordConfirm"]
    let errors = []
    fields.forEach( (field) => {
      if (this.state[field] === "") {
        errors.push(`*${field} cannot be empty.`);
      }
    })
    let emailDotCount = this.state.email.split(".").length - 1
    let emailAtCount = this.state.email.split(".").length - 1

    if (emailDotCount !== 1 || emailAtCount !== 1) {
      errors.push("*email address provided is not valid.");
    };

    if (this.state.password !== this.state.passwordConfirm) {
      errors.push("*passwords do not match.")
    }

    if (this.state.password.length < 6 || this.state.passwordConfirm < 6) {
      errors.push("*passwords must be at least 6 characters");
    }

    return errors;
  }

  render () {
    let messages

    if (this.state.messages[0] === "all inputs valid!") {
      messages = (
        <p className="allClear">all inputs valid!</p>
      )
    } else {
        messages = this.state.messages.map( (msg, index) => {
        return (
          <p className="errors" key={index}>{msg}</p>
        )
      })
    }
    return (
      <div id="HomePageBody">
        <div id="Row1">
          <img id="teampic" src="http://i.imgur.com/6BgMXWW.png"></img>
          <div id="AuthForm">
            <h2>Sign Up with CareDash to Edit your Provider Profile</h2>
            <div className="FormComponent">
              <h4>First Name</h4>
              <input
                placeholder = 'e.g. Gregory'
                type="text"
                value={this.state.fname}
                onChange={this.update("fname")}
              />
            </div>
            <div className="FormComponent">
              <h4>Last Name</h4>
              <input
                placeholder = 'e.g. House'
                type="text"
                value={this.state.lname}
                onChange={this.update("lname")}
              />
            </div>
            <div className="FormComponent">
              <h4>Email Address</h4>
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
              />
            </div>
            <div className="FormComponent">
              <h4>Password</h4>
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
              />
            </div>
            <div className="FormComponent">
              <h4>Confirm Password</h4>
              <input
                type="password"
                value={this.state.passwordConfirm}
                onChange={this.update("passwordConfirm")}
              />
            </div>

            <div id="Submission">
              <button onClick={this.handleSubmit()}>Sign Up</button>
              <button onClick={this.handleSubmit()}>Log In</button>
            </div>

            {messages}

          </div>
        </div>
        <Promos/>
      </div>
    )
  };
}
