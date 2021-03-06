import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../Header/Header';
import { List } from '../List/List';
import { sales } from '../../data/dummy'
import './page.css';

export const Page = ({ content, type, status }) => (
    <article>
        <Header user='인하공인중개사' />
        {content==='SalesList' ? <List sales={sales} type={type} status={status}/> : <div></div>}
    </article>
);

Page.propTypes = {
    content: PropTypes.string,
};

Page.defaultProps = {
    content: 'SalesList',
};