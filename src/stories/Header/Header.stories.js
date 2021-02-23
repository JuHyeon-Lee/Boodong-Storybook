import React from 'react';

import { Header } from './Header';

export default {
    title: 'Headers',
    component: Header,
}

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    user: '인하공인중개사',
};