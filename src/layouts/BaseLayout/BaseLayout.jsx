import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/core.scss';
import { IndexLink, Link } from 'react-router';

class BaseLayout extends Component {
  render () {
    const { mainContent } = this.props;
    return (
      <div className='container text-center'>
        <h1>KNMI React Redux Starter Kit</h1>
        <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
        {' · '}
        <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
        <div className='page-layout__viewport'>
          {mainContent}
        </div>
      </div>
    );
  }
}

BaseLayout.propTypes = {
  mainContent: PropTypes.element
};

export default BaseLayout;
