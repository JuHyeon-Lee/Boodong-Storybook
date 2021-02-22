import React from 'react';
import PropTypes from 'prop-types';

import './page.css';

export const Page = ({ type }) => (
    <label>{ type }</label>
);

Page.propTypes = {
    type: PropTypes.string,
};

Page.defaultProps = {
    type: 'list',
};