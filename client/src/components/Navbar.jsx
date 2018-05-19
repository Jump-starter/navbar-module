import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import NavLinks from './NavLinks';
import InterestedLinks from './InterestedLinks';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId: this.props.projectId || 0,
      faqTotal: '',
      updatesTotal: '',
      commentsTotal: '',
    };
  }

  componentDidMount() {
    const context = this;
    const url = 'http://jumpstarter-navbar-lb-719389959.us-west-1.elb.amazonaws.com';
    axios({
      method: 'get',
      url: `${url}/api/navbar/${this.state.projectId}`,
    })
      .then(({ data: { faqTotal, updatesTotal, commentsTotal } }) => {
        context.setState({
          faqTotal, updatesTotal, commentsTotal,
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

Navbar.propTypes = {
  projectId: PropTypes.string.isRequired,
};
