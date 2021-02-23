import React from 'react';

import { Page } from './Page';

export default {
    title: 'Pages',
    component: Page,
}

const Template = (args) => <Page {...args} />;

export const SalesList = Template.bind({});
SalesList.args = {
    content: 'SalesList',
};