import React from 'react';
import PropTypes from 'prop-types';

import './listItem.css';

export const ListItem = ({ salesItem }) => (
    <div class={`sales-list-item`}>
        <label class='sales-registeredDate'>{salesItem.registeredDate}</label>
        <label class='sales-name'>{salesItem.name}</label>
        <label class='sales-donghosu'>{salesItem.dong}동 {salesItem.hosu}호</label>
        <label class='sales-pyung'>{salesItem.pyung}평</label>
        <label class='sales-direction'>{salesItem.direction}향</label>
        <button class='sales-postpone'>보류</button>
        <button class='sales-direction'>거래완료</button>
    </div>
);

ListItem.propTypes = {
    type: PropTypes.string,
    salesItem: PropTypes.shape({}),
};

ListItem.defaultProps = {
    type: 'salesItem',
    salesItem: {},
};