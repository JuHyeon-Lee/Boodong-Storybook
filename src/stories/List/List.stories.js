import React from 'react';

import { List } from './List';
import { sales } from '../../data/dummy'

export default {
    title: 'Lists',
    component: List,
}

const Template = (args) => <List {...args} />;

export const TradeSale = Template.bind({});
TradeSale.args = {
    sales: sales,
    type: 'TRADE',
    status: 'SALE'
};

export const JeonseSale = Template.bind({});
JeonseSale.args = {
    sales: sales,
    type: 'JEONSE',
    status: 'SALE'
};

export const WallseSale = Template.bind({});
WallseSale.args = {
    sales: sales,
    type: 'WALLSE',
    status: 'SALE'
};