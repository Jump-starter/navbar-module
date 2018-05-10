/* eslint-env browser */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class RemindMeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reminderSet: false,
      reminderForm: false,
      validEmail: '',
    };
    this.handleFormClick = this.handleFormClick.bind(this);
    this.handleExitFormClick = this.handleExitFormClick.bind(this);
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
    this.checkEmailValidity = this.checkEmailValidity.bind(this);
  }

  handleFormClick() {
    this.setState({
      reminderForm: true,
    });
  }

  handleExitFormClick() {
    this.setState({
      reminderForm: false,
    });
  }

  handleEmailSubmit() {
    if (this.state.validEmail && this.state.reminderSet === false) {
      axios.put(`http://localhost:3002/api/navbar/${this.props.projectId}`, {
        email: document.getElementsByClassName('emailInput')[0].value,
      })
        .then((response) => {
          console.log('Email saved!:', response);
        })
        .catch((error) => {
          console.log('Error saving your email:', error);
        });
      this.setState({
        reminderSet: true,
      });
    } else {
      // add your email is invalid to DOM
      console.log('Invalid Email');
    }
  }

  checkEmailValidity() {
    const context = this;
    let valid = false;
    let email;
    if (document.getElementsByClassName('emailInput')[0]) {
      email = document.getElementsByClassName('emailInput')[0].value;
    } else {
      email = [];
    }
    if (email.length > 0) {
      email = email.split('@');
      if (email[0].length > 0 && email[1] !== undefined) {
        email = email[1].split('.');
        if (email[1] !== undefined && email[1].length > 1) {
          console.log('valid email');
          valid = true;
          context.setState({
            validEmail: true,
          });
        }
      }
    }
    if (!valid) {
      console.log('invalid email');
      context.setState({
        validEmail: false,
      });
    }
  }

  render() {
    return (
      <div id="remindMeComponent">
        {this.state.reminderForm &&
        <div className="reminderFormContainerWrapper" onCLick={this.handleExitFormCLick} >
          <div className="reminderFormContainer">
            <button id="x" onClick={this.handleExitFormClick}>X</button>
            <div className="reminderFormMain">
              <p id="title">{this.state.reminderSet ? 'Project saved.' : 'Remind me'}</p>
              <p id="body">{this.state.reminderSet ? 'We\'ll remind you 48 hours before this project ends' : 'Enter your email address and we\'ll remind you 48 hours before this project ends.'}</p>
              {this.state.reminderSet ||
                <input className={this.state.validEmail === true ? 'emailInput validEmail' : (this.state.validEmail === false ? 'emailInput invalidEmail' : 'emailInput')} onChange={this.checkEmailValidity} placeholder="Email Address" />
              }
              {this.state.validEmail === false &&
                <p id="emailInvalidText">Your email is invalid</p>
              }
              <button id="emailSubmitButton" onClick={this.handleEmailSubmit}>Remind me</button>
            </div>
            <div className="closeButtonContainer">
              <button id="close" onClick={this.handleExitFormClick}>Close</button>
            </div>
          </div>
        </div>}
        <div className={this.state.reminderSet ? 'remindMe reminder' : 'remindMe'} onClick={this.handleFormClick}> <span>Remind me</span> </div>
      </div>
      // conditionally render input form
    );
  }
}

export default RemindMeButton;

RemindMeButton.propTypes = {
  projectId: PropTypes.string.isRequired,
};
