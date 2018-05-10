import React from 'react';
import PropTypes from 'prop-types';
import BackThisProjectButton from './BackThisProjectButton';
import RemindMeButton from './RemindMeButton';

const InterestedLinks = props => (
  <div className="interestedLinksContainer">
    <BackThisProjectButton projectId={props.projectId} />
    <RemindMeButton projectId={props.projectId} />
  </div>
);

export default InterestedLinks;

InterestedLinks.propTypes = {
  projectId: PropTypes.string.isRequired,
};

