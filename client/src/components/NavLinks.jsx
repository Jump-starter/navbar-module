import React, { Component } from 'react';
import NavButton from './NavButton';

class NavLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'campaign',
    };
    this.navButtonClick = this.navButtonClick.bind(this);
  }

  navButtonClick(event) {
    this.setState({
      selected: event.target.id,
    });
  }

  render() {
    return (
      <div className="navLinksContainer">
        <NavButton navButtonClick={this.navButtonClick} buttonId="campaign" selected={this.state.selected} display="Campaign" />
        <NavButton navButtonClick={this.navButtonClick} buttonId="faq" total={this.props.faqTotal} selected={this.state.selected} display="FAQ" />
        <NavButton navButtonClick={this.navButtonClick} buttonId="updates" total={this.props.updatesTotal} selected={this.state.selected} display="Updates" />
        <NavButton navButtonClick={this.navButtonClick} buttonId="comments" total={this.props.commentsTotal} selected={this.state.selected} display="Comments" />
        <NavButton navButtonClick={this.navButtonClick} buttonId="community" selected={this.state.selected} display="Community" />
        <div className="movingUnderline" />
      </div>
    );
  }
}

export default NavLinks;
