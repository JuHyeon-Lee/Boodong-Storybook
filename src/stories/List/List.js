import React from 'react';
import PropTypes from 'prop-types';

import './list.css';

import { ListItem } from '../ListItem/ListItem';

export const List = ({ sales, type, status}) => (
    <div class='sales-list'>
        {type==='TRADE' ? <label class='selected-tab'>매매</label> : <label class='unselected-tab'>매매</label>}
        {type==='JEONSE' ? <label class='selected-tab'>전세</label> : <label class='unselected-tab'>전세</label>}
        {type==='WALLSE' ? <label class='selected-tab'>월세</label> : <label class='unselected-tab'>월세</label>}
        {sales.map(element => element.type===type ? <ListItem salesItem={element}/> : <></>)}
    </div>
);

List.propTypes = {
    sales: PropTypes.shape([]),
};

List.defaultProps = {
    sales: [],
};