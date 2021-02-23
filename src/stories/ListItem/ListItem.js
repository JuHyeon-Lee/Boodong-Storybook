import React from 'react';
import PropTypes from 'prop-types';

import './listItem.css';

export const ListItem = ({ type, salesItem }) => (
    <div class={`sales-list-item-${type}`}>
        {type==='header' ? (
            <>
                <label>아파트명 / </label>
                <label>동 / </label>
                <label>호수 / </label>
                <label>평수 / </label>
                <label>방향</label>
            </>
        ) : (
            <>
                <label>{salesItem.name} / </label>
                <label>{salesItem.dong}동 / </label>
                <label>{salesItem.hosu}호 / </label>
                <label>{salesItem.pyung}평 / </label>
                <label>{salesItem.direction}향</label>
            </>
        )}
        
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