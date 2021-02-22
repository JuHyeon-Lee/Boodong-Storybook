import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../Header/Header';
import './page.css';

export const Page = ({ type }) => (
    <article>
        <Header user='인하공인중개사' />
    </article>
);

Page.propTypes = {
    type: PropTypes.string,
};

Page.defaultProps = {
    type: 'list',
};