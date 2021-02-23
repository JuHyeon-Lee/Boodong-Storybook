import React from 'react';
import PropTypes from 'prop-types';

import './list.css';

import { ListItem } from '../ListItem/ListItem';

export const List = ({ sales }) => (
    <div>
        <ListItem type='header' />
        {sales.map(element => <ListItem type='item' salesItem={element}/>)}
    </div>
);

List.propTypes = {
    sales: PropTypes.shape([]),
};

List.defaultProps = {
    sales: [],
};