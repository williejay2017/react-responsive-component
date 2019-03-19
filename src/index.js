import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './responsive.css';

ResponsiveMedia.propTypes = {
    size: PropTypes.string.isRequired
};

export class ResponsiveMedia extends Component {
render() {
    return (
    <div className={`ResponsiveMedia-${this.props.size || 'desktop'}`}>TESTING
        {this.props.children}
    </div>
    );
  }
};

 
