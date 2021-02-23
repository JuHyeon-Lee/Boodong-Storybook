import React from 'react';

import { List } from './List';
import { sales } from '../../data/dummy'

export default {
    title: 'Lists',
    component: List,
}

const Template = (args) => <List {...args} />;

export const SalesList = Template.bind({});
SalesList.args = {
    sales: sales,
};