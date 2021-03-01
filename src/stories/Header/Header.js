import React from 'react';
import PropTypes from 'prop-types';

import './header.css';

export const Header = ({ user }) => (
    <header>
        <label class='header-username'>{user}</label>
    </header>
);

Header.propTypes = {
    user: PropTypes.string,
};

Header.defaultProps = {
    user: null,
};