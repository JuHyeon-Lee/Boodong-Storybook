import React from 'react';

import { ListItem } from './ListItem';
import { sales } from '../../data/dummy'

export default {
    title: 'ListItems',
    component: ListItem,
}

const Template = (args) => <ListItem {...args} />;

export const SalesListItem = Template.bind({});
SalesListItem.args = {
    salesItem: sales[0],
};