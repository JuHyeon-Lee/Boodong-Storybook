import React from 'react';
import PropTypes from 'prop-types';

import './list.css';

import { ListItem } from '../ListItem/ListItem';

export const List = ({ sales, type, status}) => (
    <div class='sales-list'>
        <div class='sales-list-tab'>
            {type==='TRADE' ? <label class='selected-tab'>매매</label> : <label class='unselected-tab'>매매</label>}
            {type==='JEONSE' ? <label class='selected-tab'>전세</label> : <label class='unselected-tab'>전세</label>}
            {type==='WALLSE' ? <label class='selected-tab'>월세</label> : <label class='unselected-tab'>월세</label>}
        </div>
        <div class='sales-list-nav'>
            {status==='SALE' ? <label class='selected-nav'>판매중</label> : <label class='unselected-nav'>판매중</label>}
            {status==='SOLDOUT' ? <label class='selected-nav'>판매완료</label> : <label class='unselected-nav'>판매완료</label>}
            {status==='HOLDING' ? <label class='selected-nav'>보류중</label> : <label class='unselected-nav'>보류중</label>}
        </div>
        <ListItem type='sales-filter'/>
        {sales.map(element => element.type===type && element.saleStatus===status ? <ListItem salesItem={element}/> : <></>)}
    </div>
);

List.propTypes = {
    sales: PropTypes.shape([]),
};

List.defaultProps = {
    sales: [],
};