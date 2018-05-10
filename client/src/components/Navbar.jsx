import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import NavLinks from './NavLinks';
import InterestedLinks from './InterestedLinks';

class Navbar extends Component {
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
    axios.get(`/api/navbar/${this.state.projectId}`)
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

export default Navbar;

Navbar.propTypes = {
  projectId: PropTypes.string.isRequired,
};
