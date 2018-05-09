import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import NavLinks from './NavLinks.jsx';
import InterestedLinks from './InterestedLinks.jsx';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId: this.props.projectId || 0,
      faqTotal: 0,
      updatesTotal: 0,
      commentsTotal: 0,
    };
  }

  componentDidMount() {
    const context = this;
    axios.get(`/api/navbar/${this.state.projectId}`)
      .then((response) => {
        context.setState({
          faqTotal: response.data.faqsCount,
          updatesTotal: response.data.updatesCount,
          commentsTotal: response.data.commentsCount,
        });
      })
      .catch((error) => {
        console.log('There was an error fetching this project:', error);
      });
  }

  render() {
    return (
      <div className="navbarContainerWrapper">
        <div className="navbarContainer">
          <NavLinks faqTotal={this.state.faqTotal} updatesTotal={this.state.updatesTotal} commentsTotal={this.state.commentsTotal} />
          <InterestedLinks projectId={this.state.projectId} />
        </div>
      </div>
    );
  }
}

export default Navbar;
