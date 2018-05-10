import React, { Component } from 'react';
// import axios from 'axios';

class BackThisProjectButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // axios.get(`api/campaign/${this.props.projectId}`)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });  <--- TODO during integration
    console.log('TODO DURING INTEGRATION -- Get request sent off with projectID:', this.props.projectId);
  }

  render() {
    return (
      <button id="backThisProject" onClick={this.handleClick}>Back this project</button>
    );
  }
}

export default BackThisProjectButton;
