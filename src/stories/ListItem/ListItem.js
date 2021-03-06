import React from 'react';
import PropTypes from 'prop-types';

import './listItem.css';

export const ListItem = ({ type, salesItem }) => (
    <div class={`sales-list-item`}>
        {type==='sales-filter' ? (
            <>
                <label class='sales-registeredDate'>등록일</label>
                <label class='sales-name'>아파트</label>
                <label class='sales-donghosu'>동호수</label>
                <label class='sales-pyung'>평수</label>
                <label class='sales-direction'>방향</label>
            </>
        ) : (
            <>
                <label class='sales-registeredDate'>{salesItem.registeredDate}</label>
                <label class='sales-name'>{salesItem.name}</label>
                <label class='sales-donghosu'>{salesItem.dong}동 {salesItem.hosu}호</label>
                <label class='sales-pyung'>{salesItem.pyung}평</label>
                <label class='sales-direction'>{salesItem.direction}향</label>
                {salesItem.saleStatus==='SALE'?(
                    <>
                        <button class='sales-postpone'>보류</button>
                        <button class='sales-direction'>거래완료</button>
                    </>
                ) : <></>}
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